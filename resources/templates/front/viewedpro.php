<aside class="col-lg-5 col-xl-3 order-lg-1">
    <div class="widget woocommerce widget_product_categories">
        <h5 class="widget-title">Categories</h5>
        <ul class="product-categories">
            <li class="cat-item">
                <a href="towing.php">Car Towing</a>
            </li>
            <li class="cat-item">
                <a href="shop.php">Flood Insurance Coverage</a>
            </li>
            <li class="cat-item">
                <a href="shop.php">Hail Damage</a>
            </li>
            <li class="cat-item cat-parent">
                <a href="shop.php">Accident Insurance</a>
            </li>
            <li class="cat-item">
                <a href="shop.php">Fire Insurance</a>
            </li>
            <li class="cat-item cat-parent">
                <a href="shop.php">Motorcycle Towing</a>
            </li>
            <li class="cat-item">
                <a href="shop.php">Break repair</a>
            </li>
            <li class="cat-item cat-parent">
                <a href="shop.php">Ingnition test</a>
            </li>
        </ul>
    </div>

    <!-- <div class="widget woocommerce widget_product_categories">
                    <h5 class="widget-title">Categories Dropdown</h5>
                    <select name="product_cat" class="dropdown_product_cat">
                        <option value="" selected="selected">Select a category</option>
                        <option class="level-0" value="cartowing">CarTowing</option>
                        <option class="level-1" value="hail-damage">Hail Damage</option>
                        <option class="level-1" value="flood-insurance-coverage">Flood Insurance Coverage</option>
                        <option class="level-0" value="accident-insurance">Accident Insurance</option>
                        <option class="level-1" value="fire-insurance">Fire Insurance</option>
                        <option class="level-1" value="motorcycle-towing">Motorcycle Towing</option>
                        <option class="level-0" value="break-repair">Break repair</option>
                        <option class="level-1" value="ingnition-test">Ingnition test</option>
                    </select>
                </div> -->


    <?php
    if (isset($_GET['pro_id'])) {

        if (isset($_SESSION['user_id'])) {
            $user_id = $_SESSION['user_id'];
            $ip_add = getenv("REMOTE_ADDR");
            $pro_id = $_GET['pro_id'];

            $check_query = mysqli_query($conn, "SELECT * FROM viewed_product WHERE pro_id='$pro_id' AND user_id='$user_id'");
            if (mysqli_num_rows($check_query) === 0) {
                $query = $conn->prepare("INSERT INTO viewed_product(pro_id, ip_add, user_id) VALUES(?,?,?)");
                $query->bind_param("sss", $pro_id, $ip_add, $user_id);
                $query->execute();
                confirm($query);
            }
        } else {
            $user_id = -1;
            $ip_add = getenv("REMOTE_ADDR");
            $pro_id = $_GET['pro_id'];

            $check_query = mysqli_query($conn, "SELECT * FROM viewed_product WHERE pro_id='$pro_id' AND user_id='$user_id'");
            if (mysqli_num_rows($check_query) === 0) {
                $query = $conn->prepare("INSERT INTO viewed_product(pro_id, ip_add, user_id) VALUES(?,?,?)");
                $query->bind_param("sss", $pro_id, $ip_add, $user_id);
                $query->execute();
                confirm($query);
            }
        }
    }

    if (isset($_SESSION['user_id'])) {

        $user_id = $_SESSION['user_id'];
        $query = mysqli_query($conn, "SELECT a.id, a.product_image, a.product_name, a.product_price, b.pro_id, b.user_id FROM tbl_products AS a INNER JOIN viewed_product AS b ON b.pro_id=a.id WHERE b.user_id='$user_id' LIMIT 0, 5");

    } else {
        $user_id = -1;
        $query = mysqli_query($conn, "SELECT a.id, a.product_image, a.product_name, a.product_price, b.pro_id, b.user_id FROM tbl_products AS a INNER JOIN viewed_product AS b ON b.pro_id=a.id WHERE b.user_id='$user_id' LIMIT 0, 5");
    }
    ?>
    <div class="widget woocommerce widget_recently_viewed_products">
        <h5 class="widget-title">Viewed Products</h5>
        <ul class="product_list_widget">
            <?php
            while ($items = fetch_assoc($query)) {
            ?>
            <li>
                <a href="shop-product-right.php">
                    <img src="/myproject/resources/uploads/<?php echo $items['product_image'] ?? "" ?>"
                        alt="Product Image">
                    <span class="product-title">
                        <?php echo $items['product_name'] ?? "Unknown"; ?>
                    </span>
                </a>
                <div class="d-flex justify-content-between rating-product">
                    <span class="text-warning my-0">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </span>
                    <!-- <a href="/myproject/public/shop.php?viewed=<?php echo $items['id']; ?>" class="remove"
                        aria-label="Remove this item" data-product_id="<?php echo $items['id']; ?>"
                        data-product_sku=""><i class="fs-14 ico-trash color-main"></i></a> -->
                </div>
                <span class="woocommerce-Price-amount amount">
                    <span class="woocommerce-Price-currencySymbol">&#8358;</span>
                    <?php echo $items['product_price'] ?? ""; ?>
                </span>
            </li>
            <?php } ?>
        </ul>
    </div>
</aside>