<?php require_once("config.php"); ?>
<?php

if (isset($_POST['addToCart'])) {

    $p_id = $_POST['p_id'];
    $user_id = $_POST['user_id'];
    $ip_add = getenv("REMOTE_ADDR");
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

?>