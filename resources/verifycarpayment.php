<?php require_once("config.php"); ?>
<?php
if (isset($_GET['status'])) {
    if ($_GET['status'] === "cancelled") {
        redirect("cart");
    } else {

        if ($_GET['status'] === "successful") {

            $txid = escape_string($_GET['transaction_id']);

            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => "https://api.flutterwave.com/v3/transactions/{$txid}/verify",
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET",
                CURLOPT_HTTPHEADER => array(
                    "Authorization: Bearer FLWSECK_TEST-3715e4c0f5f7bbfecfa631d6ff6f7667-X",
                    "Content-Type:application/json"
                )
            ));

            $response = curl_exec($curl);
            curl_close($curl);
            $res = json_decode($response);

            if ($res->status === "success") {

                // insert into database for order table
                $amount_paid = escape_string($res->data->charged_amount);
                $amountToPay = escape_string($res->data->meta->price);
                $order_transaction = escape_string($txid);
                $order_date = escape_string(substr($res->data->customer->created_at, 0, 19));

                $customer_name = escape_string($res->data->customer->name);
                $customer_email = escape_string($res->data->customer->email);
                $order_currency_type = escape_string($res->data->currency);
                $customer_id = escape_string($res->data->meta->consumer_id);
                $product_id = escape_string($res->data->meta->product_id);

                $query_user = query("SELECT * FROM users WHERE user_id='$customer_id'");
                confirm($query_user);

                while ($row = fetch_assoc($query_user)) {

                    $customer_address1 = $row['street'] . " " . $row['city'];
                    $customer_mobile = $row['mobile'];
                    $state = $row['state'];
                    $city = $row['city'];
                    $country = $row['country'];
                }

                if ($amount_paid >= $amountToPay) {

                    $insert_orders = query("INSERT INTO orders (order_amount, order_transaction, order_status, order_currency, order_date, customer_id, customer_fullname, customer_mobile, customer_email, customer_address1, customer_state, customer_city) VALUES('$amountToPay','$order_transaction','$res->status','$order_currency_type','$order_date','$customer_id','$customer_name', '$customer_mobile', '$customer_email', '$customer_address1','$state', '$city')");
                    confirm($insert_orders);

                    $last_id = mysqli_insert_id($conn);
                    $user_id = escape_string($_SESSION['user_id']);

                    // to be modified
                    $query = "SELECT * FROM tbl_vehicle WHERE id='$product_id'";
                    $res = mysqli_query($conn, $query);
                    confirm($res);
                    while ($row = fetch_assoc($res)) {

                        $product_id = escape_string($row['id']);
                        $product_image = escape_string($row['vehicle_image']);
                        $product_title = escape_string($row['model']);
                        $product_price = escape_string($row['price']);


                        // insert into report table
                        $insert_report = query("INSERT INTO reports (order_id, product_image, product_title, product_price, product_quantity) VALUES('$last_id', '$product_image', '$product_title', '$amountToPay', 1)");
                        confirm($insert_report);
                    }
                } else {
                    set_message("<span class='alert alert-danger'>Fraud Transaction Detected</span>");
                    redirect("cart.php");
                }
                sleep(5);
                redirect("/myproject/public/index.php");
            } else {
                echo "Cannot Process Payment";
            }
        }
    }
}
?>