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


    if (isset($_GET['pro_id']) && $_GET['pro_id'] <> "") {
        $_SESSION['viewedproduct'] = $_GET['pro_id'];

        if (isset($_SESSION['viewedproduct'])) {

            $_SESSION['viewedproduct'] = array();


            $myarray = array_push($_SESSION['viewedproduct'], $_GET['pro_id']);


            print_r($myarray);

            // $maxitems = 5;

            // if (count($_SESSION['viewedproduct']) >= $maxitems) {
            //     // $_SESSION['viewedproduct'] = array_slice($_SESSION['viewedproduct'], 1);
            //     array_push($_SESSION['viewedproduct'], $_GET['pro_id']);
            // } else {
            //     array_push($_SESSION['viewedproduct'], $_GET['pro_id']);
            // }

            // print_r($_SESSION['viewedproduct']);
        }
    }


    // foreach ($_SESSION['viewedproduct'] as $push) {
    //     echo $push;
    // }

    ?>


    <div class="widget woocommerce widget_recently_viewed_products">
        <h5 class="widget-title">Viewed Products</h5>
        <ul class="product_list_widget">



            <li>
                <a href="shop-product-right.php">
                    <img src="images/shop/05.jpg" alt="">
                    <span class="product-title">Propane Regulator</span>
                </a>
                <div class="d-flex justify-content-between rating-product">
                    <span class="text-warning my-0">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </span>
                    <a href="#" class="remove" aria-label="Remove this item" data-product_id="73" data-product_sku=""><i
                            class="fs-14 ico-trash color-main"></i></a>
                </div>
                <span class="woocommerce-Price-amount amount">
                    <span class="woocommerce-Price-currencySymbol">$</span>55.00
                </span>
            </li>



        </ul>
    </div>
</aside>