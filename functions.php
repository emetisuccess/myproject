<?php require_once("config.php"); ?>
<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$ip_add = getenv("REMOTE_ADDR");
$user_id = $_SESSION['user_id'] ?? -1;

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


// vehicle section
function getVehicles($table, $column, $num)
{
    global $user_id;
    // $query = query("SELECT * FROM {$table} WHERE {$column}={$num}");
    $query = query("SELECT * FROM tbl_vehicle");
    confirm($query);

    while ($rows = fetch_assoc($query)) {
        $vehicle_id = $rows['id'];
        $model = $rows["model"];
        $price = $rows["price"];
        $image = $rows["vehicle_image"];

        $vehicle = <<<DELIMETER
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                <div class="card mb-2">
                    <a class="link-scale"
                        href="shop-car.php?car_ids={$vehicle_id}">
                        <img src="/myproject/resources/uploads/{$image}" width="400px" alt="" style='height:200px'>
                    </a>
                    <div class="card-body">
                        <div class="">
                            <p class="mb-0">{$model}</p>
                            <span class="price mb-0">
                                <span>&#8358;</span>{$price}
                            </span>
                        </div>
                    </div> 
                </div>
            </div>
        DELIMETER;
        echo $vehicle;
    }
}


// product section
function getProducts($table, $column, $num)
{
    global $user_id;
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
                            <input type="hidden" id="user_id" value="{$user_id}">
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


    if (isset($_SESSION['user_id'])) {
        $query = query("SELECT p.id, p.product_name, p.product_image, p.product_price, 
    c.qty FROM tbl_products AS p INNER JOIN cart AS c ON p.id=c.p_id AND c.user_id=" . $_SESSION['user_id'] . "");
    } else {
        $query = query("SELECT p.id, p.product_name, p.product_image, p.product_price, 
        c.qty FROM tbl_products AS p INNER JOIN cart AS c ON p.id=c.p_id AND c.user_id='-1'");
    }
    confirm($query);

    $count = mysqli_num_rows($query);
    if ($count > 0) {
        while ($items = fetch_assoc($query)) {

            $product_id = $items['id'];
            $product_name = $items['product_name'];
            $product_image = $items['product_image'];
            $product_price = $items['product_price'];
            $cart_qty = $items['qty'];

            $subtotal = $cart_qty * $product_price;
            $total  = $total + $subtotal;

            $cartItems = <<<DELIMETER
             <tr class="cart_item">
                <td class="product-remove">
                    <a href="/myproject/public/cart.php?del={$product_id}" 
                    class="remove" aria-label="Remove this item" data-product_id="{$product_id}">×</a>
                </td>
                <td class="product-thumbnail">
                    <a href="shop-product.php">
                        <img width="180" height="180" src="/myproject/resources/uploads/{$product_image}"
                        class="img-fluid" alt="">
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
}


function getCheckoutItems()
{
    $total = 0;
    global $ip_add;
    if (isset($_SESSION['user_id'])) {
        $query = query("SELECT p.id, p.product_name, p.product_image, p.product_price,
        c.qty FROM tbl_products AS p INNER JOIN cart AS c ON p.id=c.p_id AND c.user_id=" . $_SESSION['user_id'] . "");
    } else {
        $query = query("SELECT p.id, p.product_name, p.product_image, p.product_price,
        c.qty FROM tbl_products AS p INNER JOIN cart AS c ON p.id=c.p_id AND c.user_id='-1'");
    }

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

function getCheckoutCar()
{
    $total = 0;
    global $ip_add;
    if (isset($_GET['car_ids'])) {
        $car_id = $_GET['car_ids'];

        $query = query("SELECT * FROM tbl_vehicle WHERE id='$car_id'");

        confirm($query);

        while ($items = fetch_assoc($query)) {
            $vehicle_model = $items['model'];
            $vehicle_price = $items['price'];
            $total  = $vehicle_price;
            $_SESSION['total'] = $total;

            $cartCheckoutItems = <<<DELIMETER
        <tr class="cart_item">
            <td class="product-name">
                {$vehicle_model}&nbsp; <strong class="product-quantity">× 1</strong>
            </td>
            <td class="product-total">
                <span class="woocommerce-Price-amount amount">
                    <span class="woocommerce-Price-currencySymbol">&#8358;</span>{$total}</span>
            </td>
        </tr>
        DELIMETER;
            echo $cartCheckoutItems;
        }
    }
}

function user_signup()
{
    global $conn;
    if (isset($_POST['signup_submit'])) {

        $email = escape_string($_POST['email']);
        $password = escape_string($_POST['password']);
        $confirmpwd = escape_string($_POST['confirmpwd']);
        $accept = escape_string($_POST['accept'] ?? "");


        $hash_f = "$2y$10$";
        $hash_st = "iusesomecrazystrings22";
        $hash_salt = $hash_f . $hash_st;
        $hashed_password = crypt($password, $hash_salt);

        $chash_f = "$2y$10$";
        $chash_st = "iusesomecrazystrings22";
        $chash_salt = $chash_f . $chash_st;
        $hashed_confirmpwd = crypt($confirmpwd, $chash_salt);

        $queryEmail = mysqli_query($conn, "SELECT * FROM users WHERE email='$email'");
        $count = mysqli_num_rows($queryEmail);


        if (!$email or !$password or !$confirmpwd) {
            set_message("<span class='alert alert-warning text-white px-4 py-1 m-0' style='background-color:#ff4e3c;
             border-radius:48px;'> All Fields Are Required</span>");
            redirect("signup.php");
        } else {
            if ($count > 0) {
                set_message("<span class='alert alert-warning text-white px-4 py-1 m-0' style='background-color:#ff4e3c;
                border-radius:48px;'> The email already Exist </span>  ");
                redirect("signup.php");
            } else {

                if ($hashed_password !== $hashed_confirmpwd) {
                    set_message("<span class='alert alert-warning text-white px-4 py-1 m-0' style='background-color:#ff4e3c;
                    border-radius:48px;'> Password doesn't match </span> ");
                    redirect("signup.php");
                } else {

                    if (!$accept or empty($accept)) {
                        set_message("<span class='alert alert-warning text-white px-4 py-1 m-0' style='background-color:#ff4e3c;
                        border-radius:48px;'> The box should be thicked </span>");
                        redirect("signup.php");
                    } else {

                        $query = $conn->prepare("INSERT INTO users(email, password, confirmpwd) VALUES(?,?,?)");
                        $query->bind_param("sss", $email, $hashed_password, $hashed_confirmpwd);
                        $query->execute();

                        if (!$query) {
                            die("QUERY FAILED" . mysqli_error($conn));
                            redirect("signup.php");
                        } else {
                            set_message("<span class='alert alert-warning text-white px-4 py-1 m-0' style='background-color:#ff4e3c;
                            border-radius:48px;'> User Registered Successfully </span>");
                            redirect("signin.php");
                        }
                    }
                }
            }
        }
    }
}


function user_signin()
{
    global $conn;
    if (isset($_POST['signin_submit'])) {

        $email = $_POST['email'];
        $password = $_POST['password'];

        $hash_f = "$2y$10$";
        $hash_st = "iusesomecrazystrings22";
        $hash_salt = $hash_f . $hash_st;
        $hashed_password = crypt($password, $hash_salt);

        $logincheck = mysqli_query($conn, "SELECT * FROM users WHERE password='{$hashed_password}' AND email='{$email}'");
        $count = mysqli_num_rows($logincheck);

        if (!$email or empty($email) or !$password or empty($password)) {
            set_message("<span class='alert alert-warning text-white px-4 py-1 m-0' style='background-color:#ff4e3c;
            border-radius:48px;'> All Fields Are Required</span>");
            redirect("signin.php");
        } else {

            if ($count > 0) {
                while ($row = fetch_assoc($logincheck)) {
                    $_SESSION['email'] = $row["email"];
                    $_SESSION['user_id'] = $row['user_id'];
                }
                redirect("index.php");
            }
        }
    }
}

function selectBrandOptions()
{
    global $conn;
    $query = mysqli_query($conn, "SELECT * FROM brands");
    confirm($query);

    while ($items = fetch_assoc($query)) {
        $selectOption = <<<DELIMETER
        <option value="{$items['brand_id']}">{$items['brand_name']}</option>
        DELIMETER;
        echo $selectOption;
    }
}

function selectProductCategoriesOption()
{
    global $conn;
    $query = mysqli_query($conn, "SELECT * FROM product_categories");
    confirm($query);

    while ($items = fetch_assoc($query)) {
        $selectItems = <<<DELIMETER
        <option value="{$items['pro_cat_id']}">{$items['pro_cat_title']}</option>
        DELIMETER;
        echo $selectItems;
    }
}

function selectCategoryOptions()
{
    global $conn;
    $query = mysqli_query($conn, "SELECT * FROM categories");
    confirm($query);

    while ($items = fetch_assoc($query)) {
        $selectOption = <<<DELIMETER
        <option value="{$items['cat_id']}">{$items['cat_title']}</option>
        DELIMETER;
        echo $selectOption;
    }
}


function addVehicle()
{
    global $conn;
    if (isset($_POST['add_vehicle'])) {

        $vehicle_model = escape_string($_POST['vehicle_model']);
        $vehicle_make = escape_string($_POST['vehicle_make']);
        $fuel_economy = escape_string($_POST['fuel_economy']);
        $payload_capacity = escape_string($_POST['payload_capacity']);
        $vehicle_price = escape_string($_POST['vehicle_price']);
        $year_manufactured = escape_string($_POST['year_manufactured']);
        $vehicle_mileage = escape_string($_POST['vehicle_mileage']);
        $vehicle_quantity = escape_string($_POST['vehicle_quantity']);
        $engine_power = escape_string($_POST['engine_power']);
        $torque = escape_string($_POST['torque']);
        $vin = escape_string($_POST['vin']);
        $vehicle_cat_id = escape_string($_POST['vehicle_cat_id']);
        $vehicle_engine_type = escape_string($_POST['vehicle_engine_type']);
        $vehicle_fuel_type = escape_string($_POST['vehicle_fuel_type']);
        $vehicle_brand_id = escape_string($_POST['vehicle_brand_id']);
        $keywords = escape_string($_POST['keywords']);
        $vehicle_image = escape_string($_FILES['image']['name']);

        if (isset($vehicle_image)) {
            if ($vehicle_image !== "") {

                $image_size = $_FILES['image']['size'];
                $allowable_img_ext = array("jpg", "jpeg", "png");
                $ext = pathinfo($vehicle_image, PATHINFO_EXTENSION);

                if ($image_size > 2000000) {
                    set_message("<h3><span class='text-danger'>Image should be less than 2mb</span></h3>");
                    redirect("index.php?add_vehicle");
                    die();
                } else {
                    if (!in_array($ext, $allowable_img_ext)) {
                        set_message("<h4><span class='text-danger'> Allowable image types are jpg, png, jpeg</span></h4>");
                        redirect("index.php?add_vehicle");
                        die();
                    } else {
                        $source_path = $_FILES['image']['tmp_name'];
                        $uploads = move_uploaded_file($source_path, UPLOADS . DS . $vehicle_image);
                        if (!$uploads) {
                            set_message("<h4 class='text-center'>Failed To Upload Image</h4>");
                            redirect('index.php?add_vehicle');
                            die();
                        }
                    }
                }
            } else {
                set_message("<h4 class='text-center text-danger'>Image shouldn't be empty</h4>");
                redirect("index.php?add_vehicle");
            }
        }

        if (
            !$vehicle_model or !$vehicle_make or !$fuel_economy or !$payload_capacity or !$vehicle_price or !$year_manufactured
            or !$vehicle_mileage or !$vehicle_quantity or !$engine_power or !$torque or !$vin or !$vehicle_cat_id or !$vehicle_engine_type
            or !$vehicle_fuel_type or !$vehicle_brand_id or !$keywords
        ) {
            set_message("<h4 class='text-center text-danger'>All fields are Required</h4>");
            redirect("index.php?add_vehicle");
        } else {

            $query = $conn->prepare("INSERT INTO tbl_vehicle(vehicle_brand_id, vehicle_cat_id, model, make, engine_type, fuel_type, 
            vehicle_mileage, fuel_economy, payload_capacity, engine_power, 
            torque, vin, year_manufacture, price, vehicle_qty, vehicle_image, keywords)
             VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
            $query->bind_param(
                "iissssisissssisss",
                $vehicle_brand_id,
                $vehicle_cat_id,
                $vehicle_model,
                $vehicle_make,
                $vehicle_engine_type,
                $vehicle_fuel_type,
                $vehicle_mileage,
                $fuel_economy,
                $payload_capacity,
                $engine_power,
                $torque,
                $vin,
                $year_manufactured,
                $vehicle_price,
                $vehicle_quantity,
                $vehicle_image,
                $keywords
            );
            $query->execute();
            if (!$query) {
                set_message("<h3><span class='text-danger'>Failed to insert vehicle</span></h3>");
                redirect("index.php?add_vehicle");
            } else {
                set_message("<h3><span class='text-danger'>Vehicle uploaded Successfully</span></h3>");
                redirect("index.php?add_vehicle");
            }
        }
    }
}


function addProducts()
{
    global $conn;
    if (isset($_POST['addProduct'])) {

        // get the data from the input fields;
        $product_title = escape_string($_POST["product_title"]);
        $product_price = escape_string($_POST["product_price"]);
        $product_quantity = escape_string($_POST["product_quantity"]);
        $product_cat_id = escape_string($_POST["product_cat_id"]);
        $trending_product = escape_string($_POST["trending_product"]);
        $product_brand_id = escape_string($_POST["product_brand_id"]);
        $product_keywords = escape_string($_POST['product_keywords']);
        $product_description = escape_string($_POST['product_description']);
        $product_image = escape_string($_FILES['product_image']['name']);

        // get the image 
        if (isset($product_image)) {
            // validate the image
            if ($product_image != "") {

                $product_img_size = $_FILES['product_image']['size'];
                $ext = pathinfo($product_image, PATHINFO_EXTENSION);

                $allowable_img_ext = array("jpg", "png", "jpeg");

                if ($product_img_size > 2000000) {
                    set_message("<h3><span class='text-danger'>Image size must be less than 2mb</span></h3>");
                    redirect("index.php?add_product");
                } else {
                    if (!in_array($ext, $allowable_img_ext)) {
                        set_message("<h3><span class='text-danger'>Allowable extensions are jpg, png, and jpeg</span></h3>");
                        redirect("index.php?add_product");
                    } else {

                        $destination_path = UPLOADS . DS . $product_image;
                        $source_path = $_FILES['product_image']['tmp_name'];
                        $uploads = move_uploaded_file($source_path, $destination_path);

                        if ($uploads == false) {

                            set_message("<h3><span class='text-danger'>Failed to Upload Image</span></h3>");
                            redirect("index.php?add_product");
                            die();
                        }
                    }
                }
            } else {
                set_message("<h3><span class='text-danger'>Image not added</span></h3>");
                redirect("index.php?add_product");
            }
        }

        if (
            !$product_title or !$product_price or !$product_quantity or
            !$product_cat_id or !$product_brand_id or
            !$product_keywords or !$product_description
        ) {
            set_message("<h3><span class='text-danger'>All fields are Required</span></h3>");
            redirect("index.php?add_product");
        } else {
            $query = $conn->prepare("INSERT INTO tbl_products(product_cat_id, product_brand_id,
            product_name, product_price, product_image, product_qty, product_desc, 
            product_keywords, trending_product) VALUES(?,?,?,?,?,?,?,?,?)");
            $query->bind_param(
                "sssssssss",
                $product_cat_id,
                $product_brand_id,
                $product_title,
                $product_price,
                $product_image,
                $product_quantity,
                $product_description,
                $product_keywords,
                $trending_product
            );
            $query->execute();

            if (!$query) {
                die("QUERY FAILED" . mysqli_error($conn));
            }

            set_message("<h3><span class='text-success'>Product inserted Successfully</span></h3>");
            redirect("index.php?add_product");
        }
    }
}

function getSpareparts()
{
    $s = 1;
    global $conn;
    $query = mysqli_query($conn, "SELECT * FROM tbl_products");
    while ($item = fetch_assoc($query)) {

        $product_id = $item['id'];
        $product_name = $item['product_name'];
        $product_image = $item['product_image'];
        $product_price = $item['product_price'];
        $product_qty = $item['product_qty'];
        $product_desc = substr($item['product_desc'], 0, 40) . "...";
        $product_keywords = substr($item['product_keywords'], 0, 20) . "..";
        $trending_product = $item['trending_product'];
        $sn = $s++;

        $sparepartItems = <<<DELIMETER
                    <tr>
                        <td style="vertical-align:middle;">{$sn}</td>
                        <td style="vertical-align:middle;">
                        <img src="/myproject/resources/uploads/{$product_image}" width="100px" height="100px">
                        </td>
                        <td style="vertical-align:middle;">{$product_name}</td>
                        <td style="vertical-align:middle;">{$product_price}</td>
                        <td style="vertical-align:middle;">{$product_qty}</td>
                        <td style="vertical-align:middle;">{$product_keywords}</td>
                        <td style="vertical-align:middle;">{$trending_product}</td>
                        <td style="vertical-align:middle;">{$product_desc}</td>
                        <td style="vertical-align:middle;">
                        <a href="/myproject/resources/templates/back/delete_product.php?delete_sparepart={$product_id}" class="btn p-1"><i class="fa fa-trash text-info"></i></a>
                        <a href="../admin/index.php?update_sparepart_product={$product_id}" class="btn p-1"><i class="fa fa-edit text-danger"></i></a>
                        </td>
                    </tr>
            DELIMETER;
        echo $sparepartItems;
    }
}

function manageVehicles()
{
    $s = 1;
    global $conn;
    $query = mysqli_query($conn, "SELECT * FROM tbl_vehicle");

    while ($row = fetch_assoc($query)) {

        $sn = $s++;
        $id = $row['id'];
        $brand = $row['vehicle_brand_id'];
        $model = $row['model'];
        $make = $row['make'];
        $engine_type = $row['engine_type'];
        $fuel_type = $row['fuel_type'];
        $mileage = $row['vehicle_mileage'];
        $fuel_economy = $row['fuel_economy'];
        $torque = $row['torque'];
        $vin = $row['vin'];
        $year = $row['year_manufacture'];
        $price = $row['price'];
        $image = $row['vehicle_image'];

        $vehicle = <<<DELIMETER
            <tr>
                <td style="vertical-align:middle;">{$sn}</td>
                <td style="vertical-align:middle;">
                    <img src="/myproject/resources/uploads/{$image}" width="100px" height="50px">
                </td>
                <td style="vertical-align:middle;">{$model}</td>
                <td style="vertical-align:middle;">{$make}</td>
                <td style="vertical-align:middle;">{$engine_type}</td>
                <td style="vertical-align:middle;">{$fuel_type}</td>
                <td style="vertical-align:middle;">{$mileage}</td>
                <td style="vertical-align:middle;">{$fuel_economy}</td>
                <td style="vertical-align:middle;">{$torque}</td>
                <td style="vertical-align:middle;">{$vin}</td>
                <td style="vertical-align:middle;">{$year}</td>
                <td style="vertical-align:middle;"> {$price}</td>
                <td style="vertical-align:middle;">
                    <a href="/myproject/resources/templates/back/delete_vehicle.php?del_car={$id}" class="p-1 text-danger"><i class="fa fa-trash"></i></a>
                    <a href="../admin/index.php?edit_vehicle={$id}" class="p-1"><i class="fa fa-edit"></i></a>
                </td>
            </tr>
        DELIMETER;
        echo $vehicle;
    }
}


function manageMechanics()
{
    $s = 1;
    global $conn;
    $query = mysqli_query($conn, "SELECT * FROM tbl_mechanic");

    while ($row = fetch_assoc($query)) {

        $sn = $s++;
        $id = $row['mech_id'];
        $fullname = $row['mech_fullname'];
        $mobile = $row['mech_contact'];
        $email = $row['mech_email'];
        $address = $row['mech_address'];
        $city = $row['mech_city'];
        $state = $row['mech_state'];
        $experience = $row['mech_experience'];
        $work_type = $row['mech_work_type'];
        $cert = $row['mech_certification'];
        $image1 = $row['mech_image1'];
        $image2 = $row['mech_image2'];
        $image3 = $row['mech_image3'];
        $duration = $row['mech_hourly_work'];
        $services = $row['mech_services'];

        $vehicle = <<<DELIMETER
            <tr>
                <td style="vertical-align:middle;">{$sn}</td>
                <td style="vertical-align:middle;">
                    <img src="/myproject-development/resources/uploads/{$image1}" width="100px" height="50px">
                </td>
                <td style="vertical-align:middle;">
                    <img src="/myproject-development/resources/uploads/{$image2}" width="100px" height="50px">
                </td>
                <td style="vertical-align:middle;">
                    <img src="/myproject-development/resources/uploads/{$image3}" width="100px" height="50px">
                </td>
                <td style="vertical-align:middle;">{$fullname}</td>
                <td style="vertical-align:middle;">{$mobile}</td>
                <td style="vertical-align:middle;">{$email}</td>
                <td style="vertical-align:middle;">{$address}</td>
                <td style="vertical-align:middle;">{$city}</td>
                <td style="vertical-align:middle;">{$state}</td>
                <td style="vertical-align:middle;">{$experience}</td>
                <td style="vertical-align:middle;">{$duration}</td>
                <td style="vertical-align:middle;">{$cert}</td>
                <td style="vertical-align:middle;">{$work_type}</td>
                <td style="vertical-align:middle;">
                    <a href="/myproject-development/resources/templates/back/delete_mechanic.php?del_mech={$id}" class="p-1 text-danger"><i class="fa fa-trash"></i></a>
                    <a href="../admin/index.php?edit_mech={$id}" class="p-1"><i class="fa fa-edit"></i></a>
                </td>
            </tr>
        DELIMETER;
        echo $vehicle;
    }
}
function manageDrivers()
{
    $s = 1;
    global $conn;
    $query = mysqli_query($conn, "SELECT * FROM tbl_driver");

    while ($row = fetch_assoc($query)) {

        $sn = $s++;
        $id = $row['driver_id'];
        $fullname = $row['driver_fullname'];
        $mobile = $row['driver_mobile'];
        $email = $row['driver_email'];
        $address = $row['driver_address'];
        $city = $row['driver_city'];
        $state = $row['driver_state'];
        $driver_birthday = $row['driver_birthday'];
        $driver_blood_group = $row['driver_blood_group'];
        $experience = $row['driver_experience'];
        $driver_class = $row['driver_class'];
        $driver_image = $row['driver_image'];
        $driver_licenceno = $row['driver_license_number'];
        $licence_image_front = $row['driver_license_front'];
        $licence_image_back = $row['driver_license_back'];
        $preffered_location = $row['preffered_location'];


        $vehicle = <<<DELIMETER
            <tr>
                <td style="vertical-align:middle;">{$sn}</td>
                <td style="vertical-align:middle;">
                    <img src="/myproject-development/resources/uploads/{$driver_image}" width="100px" height="100px">
                </td>
                <td style="vertical-align:middle;">
                    <img src="/myproject-development/resources/uploads/{$licence_image_front}" width="100px" height="100px">
                </td>
                <td style="vertical-align:middle;">
                    <img src="/myproject-development/resources/uploads/{$licence_image_back}" width="100px" height="100px">
                </td>
                <td style="vertical-align:middle;">{$driver_licenceno}</td>
                <td style="vertical-align:middle;">{$driver_birthday}</td>
                <td style="vertical-align:middle;">{$driver_blood_group}</td>
                <td style="vertical-align:middle;">{$fullname}</td>
                <td style="vertical-align:middle;">{$mobile}</td>
                <td style="vertical-align:middle;">{$email}</td>
                <td style="vertical-align:middle;">{$address}</td>
                <td style="vertical-align:middle;">{$city}</td>
                <td style="vertical-align:middle;">{$state}</td>
                <td style="vertical-align:middle;">{$experience}</td>
                <td style="vertical-align:middle;">{$preffered_location}</td>
                <td style="vertical-align:middle;">{$driver_class}</td>
                <td style="vertical-align:middle;">
                    <a href="/myproject-development/resources/templates/back/delete_driver.php?del_driver={$id}" class="p-1 text-danger"><i class="fa fa-trash"></i></a>
                </td>
            </tr>
        DELIMETER;
        echo $vehicle;
    }
}

function manageUsers()
{
    $s = 1;
    global $conn;
    $query = mysqli_query($conn, "SELECT * FROM users");

    while ($row = fetch_assoc($query)) {

        $sn = $s++;
        $id = $row['user_id'];
        $firstname = $row['firstname'];
        $lastname = $row['lastname'];
        $email = $row['email'];
        $mobile = $row['mobile'];
        $street = $row['street'];
        $city = $row['city'];
        $state = $row['state'];
        $created_at = $row['created_at'];

        $users = <<<DELIMETER
            <tr>
                <td style="vertical-align:middle;">{$sn}</td>
                
                <td style="vertical-align:middle;">{$firstname}</td>
                <td style="vertical-align:middle;">{$lastname}</td>
                <td style="vertical-align:middle;">{$email}</td>
                <td style="vertical-align:middle;">{$mobile}</td>
                <td style="vertical-align:middle;">{$street}</td>
                <td style="vertical-align:middle;">{$city}</td>
                <td style="vertical-align:middle;">{$state}</td>
                <td style="vertical-align:middle;">{$created_at}</td>
                <td style="vertical-align:middle;">
                    <a href="/myproject-development/resources/templates/back/delete_user.php?del_user={$id}" class="p-1 text-danger"><i class="fa fa-trash"></i></a>
                    <a href="../admin/index.php?edit_user={$id}" class="p-1"><i class="fa fa-edit"></i></a>
                </td>
            </tr>
        DELIMETER;
        echo $users;
    }
}
function manageTowing()
{
    $s = 1;
    global $conn;
    $query = mysqli_query($conn, "SELECT * FROM registeredcompany");

    while ($row = fetch_assoc($query)) {
        $sn = $s++;
        $id = $row['company_id'];
        $company_name = $row['company_name'];
        $company_number = $row['contact_number'];
        $email = $row['contact_email'];
        $address = $row['address'];
        $city = $row['city'];
        $state = $row['state'];
        $logo = $row['logo'];
        $charge_per_km = $row['charge_per_km'];
        $created_at = $row['created_at'];

        $towing = <<<DELIMETER
            <tr>
                <td style="vertical-align:middle;">{$sn}</td>
                <td style="vertical-align:middle;">
                    <img src="/myproject-development/resources/uploads/{$logo}" width="100px" height="50px">
                </td>
                <td style="vertical-align:middle;">{$company_name}</td>
                <td style="vertical-align:middle;">{$company_number}</td>
                <td style="vertical-align:middle;">{$email}</td>
                <td style="vertical-align:middle;">{$address}</td>
                <td style="vertical-align:middle;">{$city}</td>
                <td style="vertical-align:middle;">{$state}</td>
                <td style="vertical-align:middle;">{$charge_per_km}</td>
                <td style="vertical-align:middle;">{$created_at}</td>
                <td style="vertical-align:middle;">
                    <a href="/myproject-development/resources/templates/back/delete_towing.php?del_tow={$id}" class="p-1 text-danger"><i class="fa fa-trash"></i></a>
                    <a href="../admin/index.php?edit_tow={$id}" class="p-1"><i class="fa fa-edit"></i></a>
                </td>
            </tr>
        DELIMETER;
        echo $towing;
    }
}




function manageBookings()
{
    $s = 1;
    global $conn;
    $query = mysqli_query($conn, "SELECT * FROM tbl_vehicle_rent");

    while ($row = fetch_assoc($query)) {

        $sn = $s++;
        $id = $row['rent_id'];
        $image = $row['vehicle_image'];
        $pickup_time = $row['pickup_time'];
        $model = $row['vehicle_type'];
        $pickup_date = $row['pickup_date'];
        $drop_off_time = $row['drop_off_time'];
        $drop_off_date = $row['drop_off_date'];
        $customer_fullname = $row['customer_firstname'];
        $customer_lastname = $row['customer_lastname'];
        $customer_email = $row['customer_email'];
        $customer_licenceno = $row['customer_licenceno'];
        $customer_mobile = $row['customer_contact_number'];
        $flightno = $row['customer_flight_number'];
        $status = $row['status'];

        $vehicle_rent = <<<DELIMETER
            <tr>
                <td style="vertical-align:middle;">{$sn}</td>
                <td style="vertical-align:middle;">
                    <img src="/myproject-development/resources/uploads/{$image}" width="100px" height="50px">
                </td>
                <td style="vertical-align:middle;">
                {$model}
                </td>
                <td style="vertical-align:middle;">{$pickup_time}</td>
                <td style="vertical-align:middle;">{$pickup_date}</td>
                <td style="vertical-align:middle;">{$drop_off_time}</td>
                <td style="vertical-align:middle;">{$drop_off_date}</td>
                <td style="vertical-align:middle;">{$customer_fullname}</td>
                <td style="vertical-align:middle;">{$customer_lastname}</td>
                <td style="vertical-align:middle;">{$customer_email}</td>
                <td style="vertical-align:middle;">{$customer_licenceno}</td>
                <td style="vertical-align:middle;"> {$customer_mobile}</td>
                <td style="vertical-align:middle;"> {$flightno}</td>
                <td style="vertical-align:middle;"> {$status}</td>
                <td style="vertical-align:middle;">
                    <a href="/myproject-development/resources/templates/back/delete_booking.php?del_booking={$id}" class="p-1 text-danger"><i class="fa fa-trash"></i></a>
                </td>
            </tr>
        DELIMETER;
        echo $vehicle_rent;
    }
}


function edit_vehicle()
{
    global $conn;
    if (isset($_POST['update_vehicle'])) {

        $id = escape_string($_POST['vehicle_id']);
        $vehicle_brand = escape_string($_POST['vehicle_brand_id']);
        // $brand_name = $_POST['brand_name'];
        $vehicle_cat = escape_string($_POST['vehicle_cat_id']);
        // $cat_title = $_POST['cat_title'];
        $model = escape_string($_POST['vehicle_model']);
        $make = escape_string($_POST['vehicle_make']);
        $engine_type = escape_string($_POST['vehicle_engine_type']);
        $fuel_type = escape_string($_POST['vehicle_fuel_type']);
        $mileage = escape_string($_POST['vehicle_mileage']);
        $fuel_economy = escape_string($_POST['fuel_economy']);
        $payload_capacity = escape_string($_POST['payload_capacity']);
        $engine_power = escape_string($_POST['engine_power']);
        $torque = escape_string($_POST['torque']);
        $vin = escape_string($_POST['vin']);
        $year = escape_string($_POST['year_manufactured']);
        $price = escape_string($_POST['vehicle_price']);
        $vehicle_qty = escape_string($_POST['vehicle_quantity']);
        $keywords = escape_string($_POST['keywords']);
        $current_image = escape_string($_POST['current_image']);
        $new_vehicle_image = escape_string($_FILES['vehicle_image']['name']);

        // get the image 
        if (isset($new_vehicle_image)) {
            // validate the image

            if ($new_vehicle_image !== "") {

                $vehicle_img_size = $_FILES['vehicle_image']['size'];
                $ext = pathinfo($new_vehicle_image, PATHINFO_EXTENSION);

                $allowable_img_ext = array("jpg", "png", "jpeg");

                if ($vehicle_img_size > 2000000) {
                    set_message("<h3><span class='text-danger'>Image size must be less than 2mb</span></h3>");
                    redirect("index.php?edit_vehicle");
                } else {
                    if (!in_array($ext, $allowable_img_ext)) {
                        set_message("<h3><span class='text-danger'>Allowable extensions are jpg, png, and jpeg</span></h3>");
                        redirect("index.php?edit_vehicle");
                    } else {

                        $destination_path = UPLOADS . DS . $new_vehicle_image;
                        $source_path = $_FILES['vehicle_image']['tmp_name'];
                        $uploads = move_uploaded_file($source_path, $destination_path);

                        $current_image_path = UPLOADS . DS . $current_image;
                        unlink($current_image_path);

                        if ($uploads == false) {
                            set_message("<h3><span class='text-danger'>Failed to Upload Image</span></h3>");
                            redirect("index.php?edit_vehicle");
                            die();
                        }
                    }
                }
            } else {
                $new_vehicle_image = $current_image;
            }
        }

        $query = $conn->prepare("UPDATE tbl_vehicle SET vehicle_brand_id=?, vehicle_cat_id=?, model=?, make=?, engine_type=?, fuel_type=?, vehicle_mileage=?, fuel_economy=?, payload_capacity=?, engine_power=?, torque=?, vin=?, year_manufacture=?, price=?, vehicle_qty=?, vehicle_image=?, keywords=? WHERE id='$id'");

        $query->bind_param("sssssssssssssssss", $vehicle_brand, $vehicle_cat, $model, $make, $engine_type, $fuel_type, $mileage, $fuel_economy, $payload_capacity, $engine_power, $torque, $vin, $year, $price, $vehicle_qty, $new_vehicle_image, $keywords);
        $query->execute();

        if (!$query) {
            set_message("<h3><span class='text-danger'>Query Failed to Execute</span></h3>");
            redirect("index.php?edit_vehicle");
        } else {
            set_message("<h3><span class='text-success'>Vehicle Updated Successfully</span></h3>");
            redirect("index.php?manage_vehicle");
        }
    }
}

function updateProduct()
{
    global $conn;
    if (isset($_POST['updateSparepartProduct'])) {

        $id = $_POST['pro_id'];
        $product_cat_id = $_POST['product_cat_id'];
        $product_brand_id = $_POST['product_brand_id'];
        $product_name = $_POST['product_name'];
        $product_price = $_POST['product_price'];
        $product_qty = $_POST['product_qty'];
        $product_desc = $_POST['product_desc'];
        $product_keywords = $_POST['product_keywords'];
        $trending = $_POST['trending'];
        $current_image = $_POST['current_image'];
        $new_product_image = $_FILES['product_image']['name'];

        // get the image 
        if (isset($new_product_image)) {
            // validate the image

            if ($new_product_image !== "") {

                $product_img_size = $_FILES['product_image']['size'];

                $ext = pathinfo($new_product_image, PATHINFO_EXTENSION);

                $allowable_img_ext = array("jpg", "png", "jpeg");

                if ($product_img_size > 2000000) {
                    set_message("<h3><span class='text-danger'>Image size must be less than 2mb</span></h3>");
                    redirect("index.php?update_product");
                } else {
                    if (!in_array($ext, $allowable_img_ext)) {
                        set_message("<h3><span class='text-danger'>Allowable extensions are jpg, png, and jpeg</span></h3>");
                        redirect("index.php?update_product");
                    } else {

                        $destination_path = UPLOADS . DS . $new_product_image;
                        $source_path = $_FILES['product_image']['tmp_name'];

                        $uploads = move_uploaded_file($source_path, $destination_path);

                        // $current_image_path = UPLOADS . DS . $current_image;
                        // unlink($current_image_path);

                        if ($uploads == false) {
                            set_message("<h3><span class='text-danger'>Failed to Upload Image</span></h3>");
                            redirect("index.php?update_product");
                            die();
                        }
                    }
                }
            } else {
                $new_product_image = $current_image;
            }
        }

        $query = $conn->prepare("UPDATE tbl_products SET product_cat_id=?, product_brand_id=?, product_name=?, product_price=?, product_image=?, product_qty=?, product_desc=?, product_keywords=?, trending_product=? WHERE id='$id'");

        $query->bind_param("sssssssss", $product_cat_id, $product_brand_id, $product_name, $product_price, $new_product_image, $product_qty, $product_desc, $product_keywords, $trending);
        $query->execute();

        if (!$query) {
            set_message("<h3><span class='text-danger'>Query Failed to Execute</span></h3>");
            redirect("index.php?update_product");
        } else {
            set_message("<h3><span class='text-success'>Product Updated Successfully</span></h3>");
            redirect("index.php?manage_product");
        }
    }
}


function shopProduct()
{
    global $user_id;
    global $conn;
    $query = mysqli_query($conn, "SELECT * FROM tbl_products");
    confirm($query);
    while ($items = fetch_assoc($query)) {

        $shopItems = <<<DELIMETER
        <li class="product vertical-item padding-small content-padding">
        <div class="product-inner bordered">
            <a class="link-scale" href="shop-product.php?pro_id={$items['id']}">
                <img src="../resources/uploads/{$items['product_image']}" alt="product_image">
            </a>
            <div class="item-content">
                <h2>{$items['product_name']}</h2>
                <span class="price">
                    <span>&#8358; </span>{$items['product_price']}
                </span>
                <form action="" method="post" style="margin: 0px;">
                    <input type="hidden" id="user_id" value="{$user_id}">
                    <input type="submit" value="Add to Cart" p_id="{$items['id']}" class="btn btn-warning btn-sm addToCart">
                </form>
            </div>
        </div>
        </li>
        DELIMETER;
        echo $shopItems;
    }
}


function review()
{
    global $conn;
    if (isset($_POST['review'])) {

        $p_id = $_POST['pro_id'];
        $comment = $_POST['comment'];
        $email = $_POST['email'];
        $fullname = $_POST['author'];

        if (!$comment or !$email or !$fullname) {

            set_message("<h3><span class='text-danger'>All Fields are Required</span></h3>");
            redirect("shop-product.php");
        } else {

            $query = $conn->prepare("INSERT INTO review(pro_id, fullname, email, text) VALUES(?,?,?,?)");
            $query->bind_param("isss", $p_id, $fullname, $email, $comment);
            $query->execute();

            if (!$query) {
                die("QUERY FAILED" . mysqli_error($conn));
            }
            redirect("shop-product.php?pro_id={$p_id}");
        }
    }
}

function reviewVeh()
{
    global $conn;
    if (isset($_POST['reviewVeh'])) {
        $car_ids = $_POST['car_ids'];
        $comment = $_POST['comment'];
        $email = $_POST['email'];
        $fullname = $_POST['author'];

        if (!$comment or !$email or !$fullname) {
            set_message("<h3><span class='text-danger'>All Fields are Required</span></h3>");
            redirect("shop-car.php");
        } else {
            $query = $conn->prepare("INSERT INTO review(veh_id, fullname, email, text) VALUES(?,?,?,?)");
            $query->bind_param("isss", $car_ids, $fullname, $email, $comment);
            $query->execute();
            if (!$query) {
                die("QUERY FAILED" . mysqli_error($conn));
            }
            redirect("shop-car.php?car_ids={$car_ids}");
        }
    }
}


// vehicle towing function;
towing();
function towing()
{
    global $conn;
    if (isset($_POST['vehicletowing'])) {

        $year = $_POST['year'];
        $model_name = $_POST['model_name'];
        $make = $_POST['make'];
        $color = $_POST['color'];
        $contact_name = $_POST['contact_name'];
        $contact_number = $_POST['contact_number'];
        $address = $_POST['address'];
        $city = $_POST['city'];
        $state = $_POST['state'];
        $zipcode = $_POST['zipcode'];


        if (!$year or !$model_name or !$make or !$color or !$contact_name or !$contact_number or !$address or !$city or !$state or !$zipcode) {
            echo "All fields are Required";
        } else {
            $query = $conn->prepare("INSERT INTO tbl_tow(model_year, model_name, make, color, address, city, state, zipcode, contact_name, contact_number) VALUES(?,?,?,?,?,?,?,?,?,?)");
            $query->bind_param("ssssssssss", $year, $model_name, $make, $color, $address, $city, $state, $zipcode, $contact_name, $contact_number);
            $query->execute();
            if (!$query) {
                die("QUERY FAILED" . mysqli_error($conn));
            } else {
                echo "Request Submitted Successfully";
            }
        }
    }
}


function registerTowingCompany()
{
    global $conn;
    if (isset($_POST['register_company'])) {

        $logo = $_FILES['company_logo']['name'];
        $company_name = $_POST['company_name'];
        $contact_number = $_POST['company_contact_number'];
        $contact_email = $_POST['contact_email'];
        $address = $_POST['address'];
        $city = $_POST['city'];
        $state = $_POST['state'];
        $zipcode = $_POST['zipcode'];



        if (isset($logo)) {
            if ($logo !== "") {
                $image_size = $_FILES['company_logo']['size'];
                $allowable_img_ext = array("jpg", "jpeg", "png");
                $ext = pathinfo($logo, PATHINFO_EXTENSION);

                if ($image_size > 2000000) {
                    set_message("<h3><span class='text-danger'>Image should be less than 2mb</span></h3>");
                    redirect("index.php?add_vehicle");
                    die();
                } else {
                    if (!in_array($ext, $allowable_img_ext)) {
                        set_message("<h4><span class='text-danger'> Allowable image types are jpg, png, jpeg</span></h4>");
                        redirect("index.php?add_vehicle");
                        die();
                    } else {
                        $source_path = $_FILES['company_logo']['tmp_name'];
                        $uploads = move_uploaded_file($source_path, UPLOADS . DS . $logo);
                        if (!$uploads) {
                            set_message("<h4 class='text-center'>Failed To Upload Image</h4>");
                            redirect('index.php?add_vehicle');
                            die();
                        }
                    }
                }
            } else {
                set_message("<h4 class='text-center text-danger'>Image shouldn't be empty</h4>");
                redirect("index.php?add_vehicle");
            }
        }


        if (!$logo or !$company_name or !$contact_number or !$contact_email or !$address or !$city or !$state or !$zipcode) {
            echo "All Fields are Required";
        } else {
            $query = $conn->prepare("INSERT INTO registeredcompany(company_name, contact_number, contact_email, address, city, state, zipcode, logo) VALUES(?,?,?,?,?,?,?,?)");
            $query->bind_param("ssssssss",  $company_name, $contact_number, $contact_email, $address, $city, $state, $zipcode, $logo);
            $query->execute();
            if (!$query) {
                die("QUERY FAILED " . mysqli_error($conn));
            } else {
                echo "Company Registered Successfully";
            }
        }
    }
}

function vehicleLease()
{
    global $conn;
    if (isset($_POST['vehicleLease'])) {

        $image1 = $_FILES['image1']['name'];
        $image2 = $_FILES['image2']['name'];
        $image3 = $_FILES['image3']['name'];
        $model_year = $_POST['model_year'];
        $model_name = $_POST['model_name'];
        $make = $_POST['make'];
        $color = $_POST['color'];
        $contact_name = $_POST['contact_name'];
        $contact_number = $_POST['contact_number'];
        $address = $_POST['address'];
        $city = $_POST['city'];
        $state = $_POST['state'];
        $zipcode = $_POST['zipcode'];


        if (isset($image1)) {
            if ($image1 !== "") {
                $image_size = $_FILES['image1']['size'];
                $allowable_img_ext = array("jpg", "jpeg", "png");
                $ext = pathinfo($image1, PATHINFO_EXTENSION);

                if ($image_size > 2000000) {
                    set_message("<h3><span class='text-danger'>Image should be less than 2mb</span></h3>");
                    redirect("index.php?add_vehicle");
                    die();
                } else {
                    if (!in_array($ext, $allowable_img_ext)) {
                        set_message("<h4><span class='text-danger'> Allowable image types are jpg, png, jpeg</span></h4>");
                        redirect("index.php?add_vehicle");
                        die();
                    } else {
                        $source_path = $_FILES['image1']['tmp_name'];
                        $uploads = move_uploaded_file($source_path, UPLOADS . DS . $image1);
                        if (!$uploads) {
                            set_message("<h4 class='text-center'>Failed To Upload Image</h4>");
                            redirect('index.php?add_vehicle');
                            die();
                        }
                    }
                }
            } else {
                set_message("<h4 class='text-center text-danger'>Image shouldn't be empty</h4>");
                redirect("index.php?add_vehicle");
            }
        }

        if (isset($image2)) {
            if ($image2 !== "") {
                $image_size = $_FILES['image2']['size'];
                $allowable_img_ext = array("jpg", "jpeg", "png");
                $ext = pathinfo($image2, PATHINFO_EXTENSION);

                if ($image_size > 2000000) {
                    set_message("<h3><span class='text-danger'>Image should be less than 2mb</span></h3>");
                    redirect("index.php?add_vehicle");
                    die();
                } else {
                    if (!in_array($ext, $allowable_img_ext)) {
                        set_message("<h4><span class='text-danger'> Allowable image types are jpg, png, jpeg</span></h4>");
                        redirect("index.php?add_vehicle");
                        die();
                    } else {
                        $source_path = $_FILES['image2']['tmp_name'];
                        $uploads = move_uploaded_file($source_path, UPLOADS . DS . $image2);
                        if (!$uploads) {
                            set_message("<h4 class='text-center'>Failed To Upload Image</h4>");
                            redirect('index.php?add_vehicle');
                            die();
                        }
                    }
                }
            } else {
                set_message("<h4 class='text-center text-danger'>Image shouldn't be empty</h4>");
                redirect("index.php?add_vehicle");
            }
        }

        if (isset($image3)) {
            if ($image3 !== "") {
                $image_size = $_FILES['image3']['size'];
                $allowable_img_ext = array("jpg", "jpeg", "png");
                $ext = pathinfo($image3, PATHINFO_EXTENSION);

                if ($image_size > 2000000) {
                    set_message("<h3><span class='text-danger'>Image should be less than 2mb</span></h3>");
                    redirect("index.php?add_vehicle");
                    die();
                } else {
                    if (!in_array($ext, $allowable_img_ext)) {
                        set_message("<h4><span class='text-danger'> Allowable image types are jpg, png, jpeg</span></h4>");
                        redirect("index.php?add_vehicle");
                        die();
                    } else {
                        $source_path = $_FILES['image3']['tmp_name'];
                        $uploads = move_uploaded_file($source_path, UPLOADS . DS . $image3);
                        if (!$uploads) {
                            set_message("<h4 class='text-center'>Failed To Upload Image</h4>");
                            redirect('index.php?add_vehicle');
                            die();
                        }
                    }
                }
            } else {
                set_message("<h4 class='text-center text-danger'>Image shouldn't be empty</h4>");
                redirect("index.php?add_vehicle");
            }
        }

        if (!$image1 or !$image2 or !$image3 or !$model_year or !$model_name or !$make or !$color or !$contact_name or !$contact_number or !$address or !$city or !$state or !$zipcode) {
            echo "All Fields are Required";
        } else {

            $query = $conn->prepare("INSERT INTO tbl_lease(model_year, model_name, make, color, address, city, state, zipcode, contact_name, contact_number, image1, image2, image3) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)");
            $query->bind_param("sssssssssssss", $model_year, $model_name, $make, $color, $address, $city, $state, $zipcode, $contact_name, $contact_number, $image1, $image2, $image3);
            $query->execute();
            if (!$query) {
                die("QUERY FAILED " . mysqli_error($conn));
            } else {
                echo "Vehicle Registered Successfully";
            }
        }
    }
}

function registerDriver()
{
    global $conn;

    if (isset($_POST['register_driver'])) {
        $user_image = $_FILES['user_image']['name'];
        $licenseimage1 = $_FILES['licenseimage1']['name'];
        $licenseimage2 = $_FILES['licenseimage2']['name'];
        $fullname = $_POST['fullname'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];
        $city = $_POST['city'];
        $state = $_POST['state'];
        $blood_group = $_POST['blood_group'];
        $dob = $_POST['dob'];
        $email = $_POST['email'];
        $licenseno = $_POST['licenseno'];
        $driver_class = $_POST['driver_class'];
        $years_experience = $_POST['years_experience'];
        $worklocation = $_POST['worklocation'];


        if (strlen($licenseno) <= 10 or strlen($licenseno) > 11) {
            echo "invalid License Number";
        } else {
            if (isset($user_image)) {
                if ($user_image !== "") {
                    $image_size = $_FILES['user_image']['size'];
                    $allowable_img_ext = array("jpg", "jpeg", "png");
                    $ext = pathinfo($user_image, PATHINFO_EXTENSION);

                    if ($image_size > 2000000) {
                        set_message("<h3><span class='text-danger'>Image should be less than 2mb</span></h3>");
                        redirect("index.php");
                        die();
                    } else {
                        if (!in_array($ext, $allowable_img_ext)) {
                            set_message("<h4><span class='text-danger'> Allowable image types are jpg, png, jpeg</span></h4>");
                            redirect("index.php");
                            die();
                        } else {
                            $source_path = $_FILES['user_image']['tmp_name'];
                            $uploads = move_uploaded_file($source_path, UPLOADS . DS . $user_image);
                            if (!$uploads) {
                                set_message("<h4 class='text-center'>Failed To Upload Image</h4>");
                                redirect('index.php');
                                die();
                            }
                        }
                    }
                } else {
                    set_message("<h4 class='text-center text-danger'>Image shouldn't be empty</h4>");
                    redirect("index.php");
                }
            }

            if (isset($licenseimage1)) {
                if ($licenseimage1 !== "") {
                    $image_size = $_FILES['licenseimage1']['size'];
                    $allowable_img_ext = array("jpg", "jpeg", "png");
                    $ext = pathinfo($licenseimage1, PATHINFO_EXTENSION);

                    if ($image_size > 2000000) {
                        set_message("<h3><span class='text-danger'>Image should be less than 2mb</span></h3>");
                        redirect("index.php");
                        die();
                    } else {
                        if (!in_array($ext, $allowable_img_ext)) {
                            set_message("<h4><span class='text-danger'> Allowable image types are jpg, png, jpeg</span></h4>");
                            redirect("index.php");
                            die();
                        } else {
                            $source_path = $_FILES['licenseimage1']['tmp_name'];
                            $uploads = move_uploaded_file($source_path, UPLOADS . DS . $licenseimage1);
                            if (!$uploads) {
                                set_message("<h4 class='text-center'>Failed To Upload Image</h4>");
                                redirect('index.php');
                                die();
                            }
                        }
                    }
                } else {
                    set_message("<h4 class='text-center text-danger'>Image shouldn't be empty</h4>");
                    redirect("index.php");
                }
            }

            if (isset($licenseimage2)) {
                if ($licenseimage2 !== "") {
                    $image_size = $_FILES['licenseimage2']['size'];
                    $allowable_img_ext = array("jpg", "jpeg", "png");
                    $ext = pathinfo($licenseimage2, PATHINFO_EXTENSION);

                    if ($image_size > 2000000) {
                        set_message("<h3><span class='text-danger'>Image should be less than 2mb</span></h3>");
                        redirect("index.php");
                        die();
                    } else {
                        if (!in_array($ext, $allowable_img_ext)) {
                            set_message("<h4><span class='text-danger'> Allowable image types are jpg, png, jpeg</span></h4>");
                            redirect("index.php");
                            die();
                        } else {
                            $source_path = $_FILES['licenseimage2']['tmp_name'];
                            $uploads = move_uploaded_file($source_path, UPLOADS . DS . $licenseimage2);
                            if (!$uploads) {
                                set_message("<h4 class='text-center'>Failed To Upload Image</h4>");
                                redirect('index.php');
                                die();
                            }
                        }
                    }
                } else {
                    set_message("<h4 class='text-center text-danger'>Image shouldn't be empty</h4>");
                    redirect("index.php");
                }
            }

            if (!$user_image or !$licenseimage1 or !$licenseimage2 or !$fullname or !$phone or !$address or !$city or !$state or !$blood_group or !$dob or !$email or !$licenseno or !$driver_class or !$years_experience or !$worklocation) {
                echo "All fields are Required";
            } else {
                $query = $conn->prepare("INSERT INTO tbl_driver(driver_fullname, driver_mobile, driver_address, driver_city, driver_state, driver_blood_group, driver_birthday, driver_email,driver_license_number, driver_license_front, driver_license_back, driver_image, driver_class, driver_experience, preffered_location) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

                $query->bind_param("sssssssssssssss", $fullname, $phone, $address, $city, $state, $blood_group, $dob, $email, $licenseno, $licenseimage1, $licenseimage2, $user_image, $driver_class, $years_experience, $worklocation);
                $query->execute();

                if (!$query) {
                    die("QUERY FAILED " . mysqli_error($conn));
                } else {
                    echo "Registered Successfully, Wait for 2 days for you to be verified. Thanks!";
                }
            }
        }
    }
}

function registerMechanic()
{
    global $conn;
    if (isset($_POST['register_mechanic'])) {

        $image1 = $_FILES['image1']['name'];
        $image2 = $_FILES['image2']['name'];
        $image3 = $_FILES['image3']['name'];
        $fullname = $_POST['fullname'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        $city = $_POST['city'];
        $state = $_POST['state'];
        $experience = $_POST['experience'];
        $hoursperweek = $_POST['hoursperweek'];
        $certification = $_POST['certification'];
        $duration = $_POST['duration'] ?? "";
        $repair = $_POST['repair'] ?? "";
        $diagnostic = $_POST['diagnostic'] ?? "";
        $pre_purchase = $_POST['pre_purchase'] ?? "";
        $oilchange = $_POST['oilchange'] ?? "";
        $services = $repair . " " . $diagnostic . " " . $pre_purchase . " " . $oilchange;

        if (isset($image1)) {
            if ($image1 !== "") {
                $image_size = $_FILES['image1']['size'];
                $allowable_img_ext = array("jpg", "jpeg", "png");
                $ext = pathinfo($image1, PATHINFO_EXTENSION);

                if ($image_size > 2000000) {
                    set_message("<h3><span class='text-danger'>Image should be less than 2mb</span></h3>");
                    redirect("index.php");
                    die();
                } else {
                    if (!in_array($ext, $allowable_img_ext)) {
                        set_message("<h4><span class='text-danger'> Allowable image types are jpg, png, jpeg</span></h4>");
                        redirect("index.php");
                        die();
                    } else {
                        $source_path = $_FILES['image1']['tmp_name'];
                        $uploads = move_uploaded_file($source_path, UPLOADS . DS . $image1);
                        if (!$uploads) {
                            set_message("<h4 class='text-center'>Failed To Upload Image</h4>");
                            redirect('index.php');
                            die();
                        }
                    }
                }
            } else {
                set_message("<h4 class='text-center text-danger'>Image shouldn't be empty</h4>");
                redirect("index.php");
            }
        }

        if (isset($image2)) {
            if ($image2 !== "") {
                $image_size = $_FILES['image2']['size'];
                $allowable_img_ext = array("jpg", "jpeg", "png");
                $ext = pathinfo($image2, PATHINFO_EXTENSION);

                if ($image_size > 2000000) {
                    set_message("<h3><span class='text-danger'>Image should be less than 2mb</span></h3>");
                    redirect("index.php");
                    die();
                } else {
                    if (!in_array($ext, $allowable_img_ext)) {
                        set_message("<h4><span class='text-danger'> Allowable image types are jpg, png, jpeg</span></h4>");
                        redirect("index.php");
                        die();
                    } else {
                        $source_path = $_FILES['image2']['tmp_name'];
                        $uploads = move_uploaded_file($source_path, UPLOADS . DS . $image2);
                        if (!$uploads) {
                            set_message("<h4 class='text-center'>Failed To Upload Image</h4>");
                            redirect('index.php');
                            die();
                        }
                    }
                }
            } else {
                set_message("<h4 class='text-center text-danger'>Image shouldn't be empty</h4>");
                redirect("index.php");
            }
        }

        if (isset($image3)) {
            if ($image3 !== "") {
                $image_size = $_FILES['image3']['size'];
                $allowable_img_ext = array("jpg", "jpeg", "png");
                $ext = pathinfo($image3, PATHINFO_EXTENSION);

                if ($image_size > 2000000) {
                    set_message("<h3><span class='text-danger'>Image should be less than 2mb</span></h3>");
                    redirect("index.php");
                    die();
                } else {
                    if (!in_array($ext, $allowable_img_ext)) {
                        set_message("<h4><span class='text-danger'> Allowable image types are jpg, png, jpeg</span></h4>");
                        redirect("index.php");
                        die();
                    } else {
                        $source_path = $_FILES['image3']['tmp_name'];
                        $uploads = move_uploaded_file($source_path, UPLOADS . DS . $image3);
                        if (!$uploads) {
                            set_message("<h4 class='text-center'>Failed To Upload Image</h4>");
                            redirect('index.php');
                            die();
                        }
                    }
                }
            } else {
                set_message("<h4 class='text-center text-danger'>Image shouldn't be empty</h4>");
                redirect("index.php?add_vehicle");
            }
        }

        if (!$fullname or !$address or !$duration or !$email or !$phone or !$city or !$state or !$experience or !$hoursperweek or !$duration or !$image1 or !$image2 or !$image3 or !$services) {
            echo "All fields are Required";
        } else {
            $query = $conn->prepare("INSERT INTO tbl_mechanic(mech_fullname, mech_contact, mech_email, mech_address, mech_city, mech_state, mech_experience, mech_work_type, mech_certification, mech_image1, mech_image2, mech_image3, mech_services, mech_hourly_work) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
            $query->bind_param("ssssssssssssss", $fullname, $phone, $email, $address, $city, $state, $experience, $duration, $certification, $image1, $image2, $image3, $services, $hoursperweek);
            $query->execute();

            if (!$query) {
                die("QUERY FAILED " . mysqli_error($conn));
            } else {
                echo "You have been Registered, after verification we will notify you. Thanks!!";
            }
        }
    }
}


if (isset($_POST['towing_search'])) {
    $towing_search = $_POST['search'];

    if ($towing_search == "") {
        redirect("towing.php");
    }
    redirect("ts.php?q=$towing_search");
}

if (isset($_POST['driver_search'])) {
    $search_driver = $_POST['search'];

    if ($search_driver == "") {
        redirect("drivers.php");
    } else {
        redirect("ds.php?q=$search_driver");
    }
}

if (isset($_POST['mechanic_search'])) {
    $search_mechanic = $_POST['search'];
    if ($search_mechanic == "") {
        redirect("mechanic.php");
    } else {
        redirect("ms.php?q=$search_mechanic");
    }
}

if (isset($_POST['vehicle_search'])) {
    $search_vehicle = $_POST['search'];
    if ($search_vehicle == "") {
        redirect("vehiclelease.php");
    } else {
        redirect("vs.php?q=$search_vehicle");
    }
}

if (isset($_POST['search_product'])) {
    $search_product = $_POST['product_search'];
    if ($search_product == "") {
        redirect("shop.php");
    } else {
        redirect("shop.php?s=$search_product");
    }
}
?>

<?php
if (isset($_POST["xavi"])) {
    echo "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis obcaecati
    esse, nihil consectetur ab excepturi quidem quia, vitae veniam nisi
    deleniti pariatur quae necessitatibus iusto placeat amet animi recusandae voluptatem!";
}
?>