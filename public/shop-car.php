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
                        $query = "SELECT a.model, a.make, a.price, a.vehicle_image, a.engine_type, a.fuel_type, a.vehicle_mileage, a.fuel_economy, a.payload_capacity, a.engine_power, a.torque, a.vin, a.year_manufacture, b.brand_name FROM tbl_vehicle AS a INNER JOIN brands AS b ON b.brand_id=a.vehicle_brand_id INNER JOIN categories AS c ON c.cat_id=a.vehicle_cat_id WHERE a.id='$car_ids'";
                        $result = mysqli_query($conn, $query);

                        while ($rows = mysqli_fetch_array($result)) {
                            $v_model = $rows['model'];
                            $make = $rows['make'];
                            $v_price = $rows['price'];
                            $v_image = $rows['vehicle_image'];
                            $engine_type = $rows['engine_type'];
                            $fuel_type = $rows['fuel_type'];
                            $fuel_economy = $rows['fuel_economy'];
                            $vehicle_mileage = $rows['vehicle_mileage'];
                            $payload_capacity = $rows['payload_capacity'];
                            $engine_power = $rows['engine_power'];
                            $torque = $rows['torque'];
                            $vin = $rows['vin'];
                            $year_manufacture = $rows['year_manufacture'];
                            $brand_name = $rows['brand_name'];
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
                        <h6 class="product_title mb-0 mt-0"><?php echo  $brand_name; ?></h6>
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
                                        <th>Model</th>
                                        <td><?php echo $v_model; ?></td>
                                    </tr>
                                    <tr>
                                        <th>Make</th>
                                        <td><?php echo $make; ?></td>
                                    </tr>
                                    <tr>
                                        <th>Engine Type</th>
                                        <td><?php echo $engine_type; ?></td>
                                    </tr>
                                    <tr>
                                        <th>Fuel Type</th>
                                        <td><?php echo $fuel_type; ?></td>
                                    </tr>
                                    <tr>
                                        <th>Odometer</th>
                                        <td><?php echo $vehicle_mileage; ?></td>
                                    </tr>
                                    <tr>
                                        <th>Fuel Economy</th>
                                        <td><?php echo $fuel_economy; ?></td>
                                    </tr>
                                    <tr>
                                        <th>Payload Capacity</th>
                                        <td><?php echo $payload_capacity; ?></td>
                                    </tr>
                                    <tr>
                                        <th>Engine Power</th>
                                        <td><?php echo $engine_power; ?></td>
                                    </tr>
                                    <tr>
                                        <th>Torque</th>
                                        <td><?php echo $torque; ?></td>
                                    </tr>
                                    <tr>
                                        <th>VIN</th>
                                        <td><?php echo $vin; ?></td>
                                    </tr>
                                    <tr>
                                        <th>Year Manufactured</th>
                                        <td><?php echo $year_manufacture; ?></td>
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
                    <?php require(TEMPLATE_FRONT . DS . "bestselling.php"); ?>
                </div>
            </main>
            <?php require(TEMPLATE_FRONT . DS . "viewedpro.php"); ?>
        </div>
    </div>
</section>
<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>