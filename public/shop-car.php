<?php require_once("../resources/config.php"); ?>

<?php require_once(TEMPLATE_FRONT . DS . "indexheader.php"); ?>

<?php require(TEMPLATE_FRONT . DS . "loader.php"); ?>

<?php require(TEMPLATE_FRONT . DS . "modal.php"); ?>

<?php require(TEMPLATE_FRONT . DS . "addressmenu1.php"); ?>

<?php require(TEMPLATE_FRONT . DS . "header1.php"); ?>

<section class="page_title ds s-pt-105 s-pb-50 s-pt-lg-115 s-pb-lg-60">
    <div class="divider-3 d-none d-lg-block"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="bold text-center text-lg-left">Cars</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">Shop</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Cars
                    </li>
                </ol>
            </div>
        </div>
    </div>
</section>
</div>

<section class="ls s-py-80 s-py-lg-120 s-py-xl-160 c-gutter-30">
    <div class="container">
        <div class="row">
            <main class="col-lg-7 col-xl-9 order-lg-2">
                <div class="product">
                    <?php
                    if (isset($_GET['car_ids'])) {
                        $car_ids = escape_string($_GET['car_ids'] ?? "");

                        $query = "SELECT * FROM tbl_vehicle WHERE id='$car_ids'";
                        $result = mysqli_query($conn, $query);

                        while ($rows = mysqli_fetch_array($result)) {
                            $v_model = $rows['model'];
                            $v_price = $rows['price'];
                            $v_image = $rows['vehicle_image'];
                            $desc = $rows['description'];
                    ?>
                    <div class="images" data-columns="4">
                        <div data-thumb="/myproject/resources/uploads/<?php echo $v_image ?? ""; ?>">
                            <a href="/myproject/resources/uploads/<?php echo $v_image ?? ""; ?>">
                                <img src="/myproject/resources/uploads/<?php echo $v_image ?? ""; ?>" alt=""
                                    data-src="/myproject/resources/uploads/<?php echo $v_image ?? ""; ?>"
                                    data-large_image="/myproject/resources/uploads/<?php echo $v_image ?? ""; ?>"
                                    data-large_image_width="1000" data-large_image_height="1000">
                            </a>
                        </div>
                    </div>
                    <div class="summary entry-summary text-center text-md-left">
                        <h5 class="product_title mb-0"><?php echo $v_model; ?></h5>
                        <h6 class="product_title mb-0 mt-0"><?php echo "Toyota"; ?></h6>
                        <div class="divider-20 d-none d-lg-block"></div>
                        <div>
                            <?php echo substr($desc, 0, 60) . ".."; ?>
                        </div>
                        <hr>
                        <p class="price color-main fw-500">
                            <span>
                                <h5 class="mt-0 mb-0"> Price:&nbsp;<span class="">&#8358;</span><?php echo $v_price; ?>
                                </h5>
                            </span>
                        </p>
                        <div class="form-row">
                            <form class="mr-2 mt-0" method="POST">
                                <div class="single_variation_wrap">
                                    <div class="d-flex align-items-center">
                                        <div class="quantity single">
                                            <input type="hidden" id="user_id" value="10">
                                        </div>
                                    </div>
                                    <button name="make_payment" class="btn alt btn-small btn-maincolor text-dark">
                                        <span>Pay Now!</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- .summary -->
                    <?php  }
                    }
                    ?>
                    <!-- description and reviews -->
                    <div class="woocommerce-tabs wc-tabs-wrapper">
                        <ul class="tabs wc-tabs" role="tablist">
                            <li class="description_tab" id="tab-title-description" role="tab"
                                aria-controls="tab-description">
                                <a href="#tab-description">Description</a>
                            </li>
                            <li class="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
                                <a href="#tab-reviews">Reviews</a>
                            </li>
                        </ul>
                        <div class="panel wc-tab" id="tab-description" role="tabpanel"
                            aria-labelledby="tab-title-description">
                            <p></p>
                            <p><?php echo $desc; ?></p>
                        </div>
                        <div class="panel wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
                            <div id="reviews">
                                <div id="comments">
                                    <ol class="commentlist">
                                        <li class="comment even thread-even depth-1" id="li-comment-34">
                                            <div id="comment-34" class="comment_container">
                                                <img alt="" src="images/team/comments-01.png">
                                                <div class="comment-text">
                                                    <!-- <div class="star-rating">
                                                        <span style="width:80%">Rated <strong class="rating">4</strong>
                                                            out of 5</span>
                                                    </div> -->
                                                    <p class="meta">
                                                        <strong>James
                                                            Koster</strong> <span>–</span>
                                                        <time datetime="2013-06-07T11:43:13+00:00">June 7, 2013</time>
                                                    </p>
                                                    <div class="description">
                                                        <p>Nice T-shirt, I got one in black. Goes with
                                                            anything!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </div>


                                <div id="review_form_wrapper">
                                    <div id="review_form">
                                        <div id="respond" class="comment-respond">
                                            <span id="reply-title" class="comment-reply-title">Add a review <small>
                                                    <a rel="nofollow" id="cancel-comment-reply-link" href="#respond"
                                                        style="display:none;">Cancel reply</a>
                                                </small>
                                            </span>
                                            <form action="" method="post" id="commentform" class="comment-form"
                                                novalidate="">
                                                <p class="comment-notes">
                                                    <span id="email-notes">Your email address will not be
                                                        published.</span>
                                                    Required fields are marked <span class="required">*</span>
                                                </p>
                                                <!-- <div class="comment-form-rating">
                                                    <label>Your rating</label>
                                                    <p class="stars">
                                                        <span>
                                                            <a class="star-1" href="#">1</a>
                                                            <a class="star-2" href="#">2</a>
                                                            <a class="star-3" href="#">3</a>
                                                            <a class="star-4" href="#">4</a>
                                                            <a class="star-5" href="#">5</a>
                                                        </span>
                                                    </p>
                                                </div> -->
                                                <p class="comment-form-comment">
                                                    <label for="comment">Your review <span class="required">*</span>
                                                    </label>
                                                    <textarea aria-required="true" rows="6" cols="45" name="comment"
                                                        id="comment" class="form-control"
                                                        placeholder="Your review "></textarea>
                                                </p>
                                                <p class="comment-form-author">
                                                    <label for="author">Name <span class="required">*</span>
                                                    </label>
                                                    <input class="form-control" id="author" name="author" type="text"
                                                        value="" size="30" aria-required="true" required=""
                                                        placeholder="Full Name">
                                                </p>
                                                <p class="comment-form-email">
                                                    <label for="email">Email <span class="required">*</span>
                                                    </label> <input class="form-control" id="email" name="email"
                                                        type="email" value="" size="30" aria-required="true" required=""
                                                        placeholder="e-mail address">
                                                </p>
                                                <p class="form-submit">
                                                    <button type="submit" id="submit" name="submit"
                                                        class="btn btn-maincolor"><span>Submit</span></button>
                                                </p>
                                            </form>
                                        </div>
                                        <!-- #respond -->
                                    </div>
                                </div>
                                <div class="clear">
                                </div>
                            </div>
                        </div>
                    </div>


                    <section class="up-sells upsells products">
                        <div class="col-12 mb-60">
                            <h3 class="special-heading text-center">Best<span class="text-gradient">Sellers</span></h3>
                            <p class="fs-20 color-dark">The Car Repair Spareparts</p>
                        </div>
                        <ul class="products">
                            <li class="product vertical-item padding-small content-padding">
                                <div class="product-inner bordered">
                                    <a class="link-scale" href="shop-product.php">
                                        <img src="images/shop/01.jpg" alt="">
                                    </a>
                                    <div class="item-content">
                                        <h2>Motor car candles</h2>
                                        <div class="star-rating">
                                            <span style="width:80%">Rated <strong class="rating">4.00</strong> out of
                                                5</span>
                                        </div>
                                        <span class="price">
                                            <del>
                                                <span>
                                                    <span class="fw-500">&#8358; </span>70.00
                                                </span>
                                            </del>
                                            <span>&#8358; </span>55.00
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>

                </div>
                <!-- #product-22 -->
            </main>

            <aside class="col-lg-5 col-xl-3 order-lg-1">
                <div class="widget woocommerce widget_product_categories">
                    <h5 class="widget-title">Categories</h5>
                    <ul class="product-categories">
                        <li class="cat-item">
                            <a href="shop.php" class="active">Car Towing</a>
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


                <div class="widget woocommerce widget_recently_viewed_products">
                    <h5 class="widget-title">Viewed Products</h5>
                    <ul class="product_list_widget">
                        <li>
                            <a href="shop-product-right.php">
                                <img src="images/shop/05.jpg" alt="">
                                <span class="product-title">Propane Regulator</span>
                            </a>
                            <div class="d-flex justify-content-between rating-product">
                                <div class="star-rating">
                                    <span style="width:80%">Rated
                                        <strong class="rating">5.00 </strong>
                                        out of 5
                                    </span>
                                </div>
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