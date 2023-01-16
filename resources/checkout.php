<?php require_once("config.php"); ?>
<?php

if (isset($_POST['addToCart'])) {

    $p_id = escape_string($_POST['p_id']);
    $user_id = escape_string($_POST['user_id']);
    $ip_add = escape_string(getenv("REMOTE_ADDR"));
    $qty = 1;

    $select = "SELECT * FROM cart WHERE p_id='$p_id' AND user_id='$user_id' AND ip_add='$ip_add'";
    $result = mysqli_query($conn, $select);
    $count = mysqli_num_rows($result);


    if ($count < 1) {
        $query = "INSERT INTO cart(user_id, p_id, qty, ip_add) VALUES(?,?,?,?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("iiis", $user_id, $p_id, $qty, $ip_add);
        $stmt->execute();

        if (!$stmt) {
            echo "failed to add product";
        } else {
            echo "inserted";
        }
    } else {
        echo "already inserted";
    }
}


if (isset($_GET['del'])) {
    $cartItemId = $_GET['del'];
    $query = "DELETE FROM cart WHERE p_id=?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $cartItemId);
    $stmt->execute();

    if (!$stmt) {
        echo "failed to delete item from cart";
    }
    redirect("/myproject/public/cart.php");
}

// cart count
if (isset($_POST['cart_count'])) {
    global $conn;

    if (isset($_SESSION['user_id'])) {
        $query = mysqli_query($conn, "SELECT * FROM cart WHERE user_id='$_SESSION[user_id]'");
    } else {
        $query = mysqli_query($conn, "SELECT * FROM cart WHERE user_id='-1'");
    }

    $count = mysqli_num_rows($query);
    echo $count;
}



if (isset($_POST['update_cart'])) {

    $item_ids = $_POST['product_id'];
    $item_qty = $_POST['quantity'];

    $count = count($item_ids);

    for ($i = 0; $i <= $count; $i++) {
        $query = "UPDATE cart SET qty=? WHERE p_id=?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ii", $item_qty[$i], $item_ids[$i]);
        $stmt->execute();

        if (!$stmt) {
            echo "failed to update cart items";
        }
    }
    redirect("/myproject/public/cart.php");
}



//  checkout and update users section
if (
    isset($_POST['checkout_place_order']) or isset($_POST['check_out_place_car_order'])
) {

    $customer_firstname = escape_string($_POST['billing_first_name']);
    $customer_lastname = escape_string($_POST['billing_last_name']);
    $customer_address = escape_string($_POST['billing_address']);
    $customer_city = escape_string($_POST['billing_city']);
    $customer_state = escape_string($_POST['billing_state']);
    $customer_country = escape_string($_POST['billing_country']);
    $customer_postcode = escape_string($_POST['billing_postcode']);
    $customer_phone = escape_string($_POST['billing_phone']);
    $customer_name = $customer_firstname . " " . $customer_lastname;
    $customer_id = escape_string($_POST['user_id']);
    $customer_email = escape_string($_POST['billing_email']);
    $amount_paid = escape_string($_POST['amount_paid']);
    $payment_method = escape_string($_POST['payment_method']);

    if (isset($payment_method)) {
        echo  $paid_amount = $payment_method + $amount_paid;
    }
    die();

    if (!$customer_firstname or !$customer_lastname or !$customer_address or !$customer_city or !$customer_state or !$customer_country or !$customer_postcode or !$customer_phone) {
        echo "All fields are Required";
        redirect("shop-checkout.php");
        die();
    } else {
        $query = $conn->prepare("UPDATE users SET firstname=?, lastname=?, mobile=?, street=?, city=?, state=?, country=?, zip_code=? WHERE user_id='$customer_id'");
        $query->bind_param("ssssssss", $customer_firstname, $customer_lastname, $customer_phone, $customer_address, $customer_city, $customer_state, $customer_country, $customer_postcode);
        $query->execute();
        confirm($query);
    }


    if ($_POST['checkout_place_order'] == true) {

        $request = [
            "tx_ref" => time(),
            "amount" => $paid_amount,
            "currency" => "NGN",
            "payment_options" => "card",
            "redirect_url" => "http://localhost/myproject/resources/verifypayment.php",
            "customer" => [
                "email" => $customer_email,
                "name" => $customer_name,
                "phonenumber" => $customer_mobile
            ],
            "meta" => [
                "consumer_id" => $customer_id,
                "price" => $paid_amount
            ],
            "customizations" => [
                "title" => "Paying for items bought",
                "description" => "items bought from Vehika"
            ]
        ];

        // call the flutterwave endpoint;
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.flutterwave.com/v3/payments",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => json_encode($request),
            CURLOPT_HTTPHEADER => array(
                "Authorization: Bearer FLWSECK_TEST-3715e4c0f5f7bbfecfa631d6ff6f7667-X",
                "Content-Type:application/json"
            )
        ));

        $response = curl_exec($curl);

        $res = json_decode($response);
        if (isset($res->status) || $res->status == "success") {
            sleep(5);
            $link = $res->data->link;
            redirect($link);
        } else {
            sleep(5);
            set_message("Failed to process payment, Check internet connection");
            // header("Location:" . $_SERVER['PHP_SELF']);
            redirect("/myproject/public/shop-checkout-car.php");
        }
    }



    if ($_POST['check_out_place_car_order'] == true) {

        $request = [
            "tx_ref" => time(),
            "amount" => $paid_amount,
            "currency" => "NGN",
            "payment_options" => "card",
            "redirect_url" => "http://localhost/myproject/resources/verifycarpayment.php",
            "customer" => [
                "email" => $customer_email,
                "name" => $customer_name,
                "phonenumber" => $customer_mobile
            ],
            "meta" => [
                "consumer_id" => $customer_id,
                "price" => $paid_amount
            ],
            "customizations" => [
                "title" => "Paying for vehicle bought",
                "description" => "vehicle bought from Vehika"
            ]
        ];

        // call the flutterwave endpoint;
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.flutterwave.com/v3/payments",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => json_encode($request),
            CURLOPT_HTTPHEADER => array(
                "Authorization: Bearer FLWSECK_TEST-3715e4c0f5f7bbfecfa631d6ff6f7667-X",
                "Content-Type:application/json"
            )
        ));

        $response = curl_exec($curl);

        $res = json_decode($response);
        if (isset($res->status) || $res->status == "success") {
            sleep(5);
            $link = $res->data->link;
            redirect($link);
        } else {
            sleep(5);
            set_message("Failed to process payment, Check internet connection");
            // header("Location:" . $_SERVER['PHP_SELF']);
            redirect("/myproject/public/shop-checkout-car.php");
        }
    }
}


if (isset($_POST['checkout_rent_vehicle'])) {


    $ip_add = getenv("REMOTE_ADDR");
    $veh_id = escape_string($_POST['veh_id']);
    $customer_id = $_SESSION['user_id'] ?? "";
    $image1 = escape_string($_POST['image1']);
    $model_year = escape_string($_POST['model_year']);
    $make = escape_string($_POST['make']);
    $seats = escape_string($_POST['seats']);
    $charge_per_day = escape_string($_POST['charge_per_day']);
    $contact_name = escape_string($_POST['contact_name']);
    $contact_number = escape_string($_POST['contact_number']);
    $vehicle_qty = 1;
    $location = escape_string($_POST['location']);
    $pick_up_time = escape_string($_POST['pick_uptime']);
    $pick_update = escape_string($_POST['pick_update']);
    $drop_offdate = escape_string($_POST['drop_offdate']);
    $drop_offtime = escape_string($_POST['drop_offtime']);
    $customer_email = escape_string($_POST['email']);
    $customer_title = escape_string($_POST['title']);
    $customer_firstname = escape_string($_POST['firstname']);
    $customer_lastname = escape_string($_POST['lastname']);
    $licenceno = escape_string($_POST['licenceno']);
    $customer_mobile = escape_string($_POST['cust_number']);
    $flightno = escape_string($_POST['flightno']);
    $status = "booked";
    $pickupdate = date_create($pick_update);
    $dropoffdate = date_create($drop_offdate);
    $interval = date_diff($pickupdate, $dropoffdate);
    $total = $interval->format("%R%a") * $charge_per_day;

    if (!$pick_up_time or !$pick_update or !$drop_offtime or !$drop_offdate or !$customer_email or !$customer_title or !$customer_firstname or !$customer_lastname or !$licenceno or !$customer_mobile) {
        echo "All Fields are Required";
    } else {
        // trigger an email notification once a company's vehicle is booked;
        $request = [
            "tx_ref" => time(),
            "amount" => $total,
            "currency" => "NGN",
            "payment_options" => "card",
            "redirect_url" => "http://localhost/myproject/resources/verifypayment.php",
            "customer" => [
                "email" => $customer_email,
                "name" => $customer_name,
                "phonenumber" => $customer_mobile
            ],
            "meta" => [
                "consumer_id" => $customer_id,
                "price" => $total
            ],
            "customizations" => [
                "title" => "Paying for vehicle Rental",
                "description" => "items bought from Vehika"
            ]
        ];

        // call the flutterwave endpoint;
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.flutterwave.com/v3/payments",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => json_encode($request),
            CURLOPT_HTTPHEADER => array(
                "Authorization: Bearer FLWSECK_TEST-3715e4c0f5f7bbfecfa631d6ff6f7667-X",
                "Content-Type:application/json"
            )
        ));

        $response = curl_exec($curl);

        $res = json_decode($response);
        if (isset($res->status) || $res->status == "success") {

            $query = $conn->prepare("INSERT INTO tbl_vehicle_rent(vehicle_id, user_id, ip_add, vehicle_image, pickup_time, pickup_date, drop_off_time, drop_off_date, vehicle_type, vehicle_qty, customer_title, customer_firstname, customer_lastname, customer_email, customer_licenceno, customer_contact_number, customer_flight_number, status) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

            $query->bind_param("ssssssssssssssssss", $veh_id, $user_id, $ip_add, $image1, $pick_up_time, $pick_update, $drop_offtime, $drop_offdate, $model_year, $vehicle_qty, $customer_title, $customer_firstname, $customer_lastname, $customer_email, $licenceno, $customer_mobile, $flightno, $status);
            $query->execute();
            sleep(5);
            $link = $res->data->link;
            redirect($link);
        } else {

            sleep(5);
            set_message("Failed to process payment, Check internet connection");
            // header("Location:" . $_SERVER['PHP_SELF']);
            redirect("vehicledetails.php?vehicle_id= $veh_id");
        }
    }
}
?>