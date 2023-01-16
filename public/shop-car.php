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

                        // to be worked on 
                        $query = "SELECT * FROM tbl_vehicle WHERE id='$car_ids'";
                        $result = mysqli_query($conn, $query);

                        while ($rows = mysqli_fetch_array($result)) {
                            $v_model = $rows['model'];
                            $v_price = $rows['price'];
                            $v_image = $rows['vehicle_image'];
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
                                            <input type="hidden" id="user_id"
                                                value="<?php echo $_SESSION['user_id'] ?? -1;  ?>">
                                        </div>
                                    </div>
                                    <div class="wc-proceed-to-checkout">
                                        <a href="shop-checkout-car.php?car_ids=<?php echo  $car_ids; ?>"
                                            class="checkout-button alt wc-forward btn btn-maincolor">Proceed
                                            to checkout</a>
                                    </div>
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
                            <li class="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
                                <a href="#tab-reviews">Reviews</a>
                            </li>
                            <li class="description_tab" id="tab-title-description" role="tab"
                                aria-controls="tab-description">
                                <a href="#tab-description">Description</a>
                            </li>
                        </ul>
                        <div class="panel wc-tab" id="tab-description" role="tabpanel"
                            aria-labelledby="tab-title-description">
                            <p></p>
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>SPACIFICATIONS</th>
                                        <th>DESCRIPTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Model</td>

                                    </tr>
                                    <tr>
                                        <td>Make</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div class="panel wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
                            <div id="reviews">
                                <?php
                                $query = mysqli_query($conn, "SELECT * FROM review WHERE veh_id='$car_ids'");

                                $count = mysqli_num_rows($query);
                                if ($count > 0) {

                                    while ($items = fetch_assoc($query)) {
                                        $nameLogo =  strtoupper(substr($items['fullname'], 0, 1));
                                        $author = $items['fullname'];
                                        $date = $items['date'];
                                        $comment = $items['text'];

                                ?>
                                <div id="comments">
                                    <ol class="commentlist">
                                        <li class="comment even thread-even depth-1" id="li-comment-34">
                                            <div id="comment-34" class="comment_container">
                                                <h5 class="float-left mr-3 bg-dark text-white p-1 rounded">
                                                    <?php echo $nameLogo; ?></h5>
                                                <div class="comment-text">
                                                    <p class="meta">
                                                        <strong><?php echo $author; ?></strong> <span>–</span>
                                                        <time
                                                            datetime="2013-06-07T11:43:13+00:00"><?php echo $date; ?></time>
                                                    </p>
                                                    <div class="description">
                                                        <p><?php echo $comment; ?></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                                <?php }
                                } else {
                                    echo "<h5> No Review Yet </h5>";
                                } ?>


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
                                                    <input type="hidden" name="car_ids" value="<?php echo $car_ids; ?>">
                                                    <button type="submit" id="submit" name="reviewVeh"
                                                        class="btn btn-maincolor"><span>Submit</span></button>
                                                </p>
                                            </form>
                                            <?php reviewVeh(); ?>
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
                            <a href="towing.php" class="active">Towing</a>
                        </li>
                        <li class="cat-item">
                            <a href="drivers.php">Driver Service</a>
                        </li>
                        <li class="cat-item">
                            <a href="vehiclelease.php">Hire/Lease Vehicle</a>
                        </li>
                        <li class="cat-item cat-parent">
                            <a href="mechanic.php">Vehicle Repairs</a>
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