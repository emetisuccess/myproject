<?php require_once("../resources/config.php"); ?>

<?php require_once(TEMPLATE_FRONT . DS . "indexheader.php"); ?>

<?php //require(TEMPLATE_FRONT . DS . "loader.php"); 
?>

<?php require(TEMPLATE_FRONT . DS . "modal.php"); ?>

<?php require(TEMPLATE_FRONT . DS . "addressmenu1.php"); ?>

<?php require(TEMPLATE_FRONT . DS . "header1.php"); ?>

<section class="page_title ds s-pt-105 s-pb-50 s-pt-lg-115 s-pb-lg-60">
    <div class="divider-3 d-none d-lg-block"></div>
    <div class="container">
        <div class="row">

            <div class="col-md-12">
                <h1 class="bold text-center text-lg-left">Shop</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Shop
                    </li>
                </ol>
            </div>

        </div>
    </div>
</section>
</div>


<section class="ls s-pt-60 s-pb-70 s-py-lg-100 s-py-xl-150">
    <div class="container">
        <div class="row justify-content-center">
            <main class="col-lg-8 col-xl-9 col-md-8 col-sm-12 order-lg-2">
                <div class="columns-3">
                    <form class="form-inline shop-form bordered mb-30">
                        <p class="woocommerce-result-count fs-14 fw-400">
                            <span class="color-dark fw-500 product-found fs-16">1505
                            </span>Products
                            Found
                        </p>
                        <div class="form-group">
                            <label class="fw-500" for="orderby">Sort By</label>
                            <select name="orderby" id="#orderby" class="form-control">
                                <option value="menu_order">Name</option>
                                <option value="popularity" selected>Popularity</option>
                                <option value="rating">Rating</option>
                                <option value="date">Newness</option>
                                <option value="price">Low To High</option>
                                <option value="price-desc">High To Low</option>
                            </select>
                        </div>
                    </form>

                    <div class="row">
                        <?php
                        $query = mysqli_query($conn, "SELECT * FROM tbl_products");
                        confirm($query);
                        $count = mysqli_num_rows($query);

                        $result_per_page = 5;
                        $number_of_pages = ceil($count / $result_per_page);

                        if (!isset($_GET['page'])) {
                            $page = 1;
                        } else {
                            $page = $_GET['page'];
                        }

                        $first_page_result = ($page - 1) * $result_per_page;


                        $product_query = query("SELECT * FROM tbl_products ORDER BY id DESC LIMIT " . $first_page_result . ", " . $result_per_page . "");
                        confirm($product_query);

                        while ($items = fetch_assoc($product_query)) {
                        ?>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                            <div class="card mb-3">
                                <a class="link-scale" href="shop-product.php?pro_id=<?php echo $items['id']; ?>">
                                    <img src="/myproject/resources/uploads/<?php echo $items['product_image']; ?>"
                                        class='img-fluid' alt="">
                                </a>
                                <div class="card-body text-center">
                                    <p class="mb-0"><?php echo $items['product_name']; ?></p>
                                    <span class="price">
                                        <span>&#8358;</span><?php echo $items['product_price']; ?>
                                    </span>
                                    <form action="" method="post" class="text-center">
                                        <input type="hidden" id="user_id"
                                            value="<?php echo $_SESSION['user_id'] ?? -1; ?>">
                                        <input type="submit" value="Add to Cart" p_id="<?php echo $items['id']; ?>"
                                            class="btn btn-warning rounded btn-sm p-2 addToCart">
                                    </form>
                                </div>
                            </div>
                        </div>
                        <?php
                        }
                        ?>
                    </div>
                </div>


                <!-- pagination for shop page -->
                <!-- columns 3 -->
                <nav class="woocommerce-pagination">
                    <ul class="page-numbers pager">
                        <?php for ($i = 1; $i <= $number_of_pages; $i++) {
                            if ($i == $page) : ?>
                        <li>
                            <a href="/myproject/public/shop.php?products&page=<?php echo $i; ?>"
                                style="background-color:#ff4e3c">
                                <?php echo $i; ?>
                            </a>
                        </li>
                        <?php else : ?>
                        <li>
                            <a href="/myproject/public/shop.php?products&page=<?php echo $i; ?>">
                                <?php echo $i; ?>
                            </a>
                        </li>
                        <?php
                            endif;
                        }
                        ?>
                    </ul>
                </nav>
            </main>

            <aside class="col-lg-4 col-xl-3 order-lg-1">
                <div class="widget woocommerce widget_product_categories">
                    <h5 class="widget-title">Categories</h5>
                    <ul class="product-categories">
                        <li class="cat-item cat-parent">
                            <a href="shop.php">Car Towing</a>
                        </li>
                        <li class="cat-item">
                            <a href="shop.php">Hail Damage</a>
                        </li>
                        <li class="cat-item">
                            <a href="shop.php">Flood Insurance Coverage</a>
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
                        <option class="level-0" value="cartowing">Car Towing</option>
                        <option class="level-1" value="hail-damage">Hail Damage</option>
                        <option class="level-1" value="flood-insurance-coverage">Flood Insurance
                            Coverage</option>
                        <option class="level-0" value="accident-insurance">Accident Insurance
                        </option>
                        <option class="level-1" value="fire-insurance">Fire Insurance</option>
                        <option class="level-1" value="motorcycle-towing">Motorcycle Towing</option>
                        <option class="level-0" value="break-repair">Break repair</option>
                        <option class="level-1" value="ingnition-test">Ingnition test</option>
                    </select>
                </div> -->

                <div class="widget woocommerce widget_recently_viewed_products">
                    <h5 class="widget-title">Viewed Products</h5>
                    <ul class="product_list_widget">
                        <li>
                            <a href="shop-product-right.php">
                                <img src="images/shop/05.jpg" alt="">
                                <span class="product-title">Propane Regulator</span>
                            </a>
                            <div class="d-flex justify-content-between rating-product">
                                <!-- <div class="star-rating">
                                    <span style="width:80%">Rated
                                        <strong class="rating">5.00 </strong>
                                        out of 5
                                    </span>
                                </div> -->
                                <a href="#" class="remove" aria-label="Remove this item" data-product_id="73"
                                    data-product_sku=""><i class="fs-14 ico-trash color-main"></i></a>
                            </div>
                            <span class="woocommerce-Price-amount amount">
                                <span class="woocommerce-Price-currencySymbol">$</span>55.00
                            </span>
                        </li>
                    </ul>
                </div>

            </aside>
        </div>
    </div>
</section>
<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>