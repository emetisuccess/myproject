<?php require_once("config.php"); ?>
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$ip_add = getenv("REMOTE_ADDR");

// getting the last inserted id;
function last_id()
{
    global $conn;
    return mysqli_insert_id($conn);
}


// set alert message
function set_message($msg)
{
    if (!empty($msg)) {
        $_SESSION['msg'] = $msg;
    } else {
        $msg = "";
    }
}

// display alert message
function display_message()
{
    if (isset($_SESSION['msg'])) {
        echo $_SESSION['msg'];
        unset($_SESSION['msg']);
    }
}

function display_user()
{
    if (isset($_SESSION['username'])) {
        echo $_SESSION['username'];
    }
}

function admin_message()
{
    if (isset($_SESSION['user_email'])) {
        echo $_SESSION['user_email'];
    }
}

function escape_string($string)
{
    global $conn;
    return trim(htmlspecialchars(stripslashes(mysqli_real_escape_string($conn, $string))));
}

function redirect($location)
{
    header("Location: $location");
}

function query($sql)
{
    global $conn;
    return mysqli_query($conn, $sql);
}

function confirm($query)
{
    global $conn;
    if (!$query) {
        die("QUERY FAILED :" . mysqli_error($conn));
    }
}

function fetch_assoc($result)
{
    return $result->fetch_assoc();
}

function getVehicles($table, $column, $num)
{
    $query = query("SELECT * FROM {$table} WHERE {$column}={$num}");
    confirm($query);

    while ($rows = fetch_assoc($query)) {
        $vehicle_id = $rows['id'];
        $model = $rows["model"];
        $price = $rows["price"];
        $image = $rows["vehicle_image"];

        $vehicle = <<<DELIMETER
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                <div class="card mb-3">
                    <a class="link-scale"
                        href="shop-car.php?car_ids={$vehicle_id}">
                        <img src="/myproject/resources/uploads/{$image}" width="300px" alt="">
                    </a>
                    <div class="card-body py-4">
                        <div class="py-3">
                            <p class="mb-0">{$model}</p>
                            <span class="price ">
                                <span>&#8358;</span>{$price}
                            </span>
                        </div>
                        <form action="" method="post" style="margin: 0px;">
                                <input type="hidden" name="prod_id" value="{$vehicle_id}">
                                <input type="hidden" name="user_id" value="10">
                                <input type="submit" name="add_to_cart" value="Buy Now!" class="btn btn-warning btn-sm">
                        </form>
                    </div> 
                </div>
            </div>
        DELIMETER;
        echo $vehicle;
    }
}


function getProducts($table, $column, $num)
{
    $query = query("SELECT * FROM {$table} WHERE {$column}={$num}");
    confirm($query);
    while ($rows = fetch_assoc($query)) {
        $product_id = $rows['id'];
        $product_name = $rows["product_name"];
        $product_price = $rows["product_price"];
        $image = $rows["product_image"];

        $products = <<<DELIMETER
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                <div class="card mb-3">
                <a class="link-scale"
                        href="shop-product.php?pro_id={$product_id}">
                        <img src="/myproject/resources/uploads/{$image}" class='img-fluid' alt="">
                    </a>
                    <div class="card-body">
                            <p class="mb-0">{$product_name}</p>
                            <span class="price">
                                <span>&#8358;</span>{$product_price}
                            </span>
                        <form action="" method="post" style="margin: 0px;">
                            <input type="hidden" id="user_id" value="10">
                            <input type="submit" value="Add to Cart" p_id="{$product_id}" class="btn btn-warning btn-sm addToCart">
                        </form>
                    </div>
                </div>
            </div>
        DELIMETER;
        echo $products;
    }
}
// user_id = 2 and ip_add = '{$ip_add}'

function getCartItems()
{
    $total = 0;
    global $ip_add;
    $query = query("SELECT p.id, p.product_name, p.product_image, p.product_price, c.qty FROM tbl_products AS p INNER JOIN cart AS c ON p.id=c.p_id AND c.user_id='10'");
    confirm($query);

    while ($items = fetch_assoc($query)) {

        $product_id = $items['id'];
        $product_name = $items['product_name'];
        $product_image = $items['product_image'];
        $product_price = $items['product_price'];
        $cart_qty = $items['qty'];

        $subtotal = $cart_qty * $product_price;
        $total  = $total + $subtotal;
        $_SESSION['total'] = $total;

        $cartItems = <<<DELIMETER
         <tr class="cart_item">
            <td class="product-remove">
                <a href="/myproject/public/cart.php?del={$product_id}" class="remove" aria-label="Remove this item" data-product_id="{$product_id}">×</a>
            </td>
            <td class="product-thumbnail">
                <a href="shop-product.php">
                    <img width="180" height="180" src="/myproject/resources/uploads/{$product_image}" class="img-fluid" alt="">
                </a>
            </td>
            <td class="product-name" data-title="{$product_name}">
                <a href="shop-product.php">{$product_name}</a>
            </td>
            <td class="product-price" data-title="{$product_price}">
                <span class="amount">
                    <span>&#8358;</span>{$product_price}
                </span>
            </td>
            <td class="product-quantity product" data-title="Quantity">
                <div class="quantity">
                    <input type='hidden' name="product_id[]" value="{$product_id}" >

                    <input type="number" class="px-1 py-0" step="1" min="1" max="10"
                        name="quantity[]" value="{$cart_qty}" title="Qty" size="5">

                </div>
            </td>
            <td class="product-subtotal" data-title="Total">
                <span class="amount">
                    <span>&#8358;</span>{$subtotal}
                </span>
            </td>
        </tr>
        DELIMETER;
        echo $cartItems;
    }
}

function getCheckoutItems()
{
    $total = 0;
    global $ip_add;
    $query = query("SELECT p.id, p.product_name, p.product_image, p.product_price, c.qty FROM tbl_products AS p INNER JOIN cart AS c ON p.id=c.p_id AND c.user_id='10'");
    confirm($query);

    while ($items = fetch_assoc($query)) {
        $product_name = $items['product_name'];
        $product_price = $items['product_price'];
        $cart_qty = $items['qty'];

        $subtotal = $cart_qty * $product_price;
        $total  = $total + $subtotal;
        $_SESSION['total'] = $total;

        $cartCheckoutItems = <<<DELIMETER
        <tr class="cart_item">
            <td class="product-name">
                {$product_name}&nbsp; <strong class="product-quantity">× {$cart_qty}</strong>
            </td>
            <td class="product-total">
                <span class="woocommerce-Price-amount amount">
                    <span class="woocommerce-Price-currencySymbol">&#8358;</span>{$subtotal}</span>
            </td>
        </tr>
        DELIMETER;
        echo $cartCheckoutItems;
    }
}



?>