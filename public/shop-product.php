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
                <h1 class="bold text-center text-lg-left">Shop Product</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">Shop</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Shop Product
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
                    if (isset($_GET['pro_id'])) {
                        $pro_id = escape_string($_GET['pro_id']);


                        $query = "SELECT * FROM tbl_products WHERE id='$pro_id'";
                        $result = mysqli_query($conn, $query);

                        while ($rows = mysqli_fetch_array($result)) {
                            $p_title = $rows['product_name'];
                            $p_price = $rows['product_price'];
                            $p_image = $rows['product_image'];
                            $desc = $rows['product_desc'];
                    ?>

                            <div class="images" data-columns="4">
                                <div data-thumb="/myproject/resources/uploads/<?php echo $p_image ?? ""; ?>">
                                    <a href="/myproject/resources/uploads/<?php echo $p_image ?? ""; ?>">
                                        <img src="/myproject/resources/uploads/<?php echo $p_image ?? "";  ?>" alt="" data-caption="" data-src="/myproject/resources/uploads/<?php echo $p_image ?? ""; ?>" data-large_image="/myproject/resources/uploads/<?php echo $p_image ?? ""; ?>" data-large_image_width="1000" data-large_image_height="1000">
                                    </a>
                                </div>
                            </div>

                            <div class="summary entry-summary text-center text-md-left">
                                <h6 class="product_title mb-0"><?php echo $p_title ?? "Unknown"; ?></h6>
                                <!-- <div class="woocommerce-product-rating">
                            <div class="star-rating">
                                <span style="width:72.6%">Rated <strong class="rating">4.33</strong> out of 5 based on
                                    <span class="rating">3</span> customer ratings</span>
                            </div>
                        </div> -->
                                <div class="divider-20 d-none d-lg-block"></div>
                                <div>
                                    <ul class="list3 my-0">
                                        <?php echo substr($desc, 0, 60) . ".."; ?>
                                    </ul>
                                    <span class="text-warning my-0">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </span>
                                </div>
                                <hr class="my-1">
                                <p class="price color-main fw-500">
                                    <span>
                                        <h5 class="mt-0 mb-0"> Price:&nbsp;<span class="">&#8358;</span><?php echo $p_price; ?>
                                        </h5>
                                    </span>
                                </p>
                                <div class="d-flex">
                                    <div class="return text-center mr-5">
                                        <div class="font-size-20 my-2">
                                            <span class="fa fa-retweet border p-3 rounded-pill fa-2x text-info"></span>
                                        </div>
                                        <a href="#" class="font-rale font-size-12 text-info">10 Days <br> Replacement</a>
                                    </div>
                                    <div class="return text-center mr-5">
                                        <div class="font-size-20 my-2">
                                            <span class="fa fa-truck border p-3 rounded-pill fa-2x text-info"></span>
                                        </div>
                                        <a href="#" class="font-rale font-size-12 text-info">Daily Product<br> Delivery</a>
                                    </div>
                                    <div class="return text-center mr-5">
                                        <div class="font-size-20 my-2">
                                            <span class="fa fa-check border p-3 rounded-pill fa-2x text-info"></span>
                                        </div>
                                        <a href="#" class="font-rale font-size-12 text-info">Quality <br> Product</a>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <form class="mr-2 mt-0" method="POST">
                                        <div class="single_variation_wrap">
                                            <div class="d-flex align-items-center">
                                                <div class="quantity single">
                                                    <input type="hidden" id="user_id" value="<?php echo $_SESSION['user_id'] ?? -1; ?>">
                                                </div>
                                            </div>
                                            <button class="btn alt btn-small btn-maincolor text-dark addToCart" p_id="<?php echo $pro_id; ?>">
                                                <span>Add to Cart</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <!-- .summary -->
                    <?php
                        }
                    }
                    ?>
                    <!-- description and reviews -->
                    <div class="woocommerce-tabs wc-tabs-wrapper">
                        <ul class="tabs wc-tabs" role="tablist">
                            <li class="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
                                <a href="#tab-reviews">Reviews</a>
                            </li>
                            <li class="description_tab" id="tab-title-description" role="tab" aria-controls="tab-description">
                                <a href="#tab-description">Description</a>
                            </li>
                        </ul>

                        <div class="panel wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
                            <div id="reviews">
                                <?php
                                $query = mysqli_query($conn, "SELECT * FROM review WHERE pro_id='$pro_id'");
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
                                                                <time datetime="2013-06-07T11:43:13+00:00"><?php echo $date; ?></time>
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
                                                    <a rel="nofollow" id="cancel-comment-reply-link" href="#respond" style="display:none;">Cancel reply</a>
                                                </small>
                                            </span>


                                            <form action="" method="post" id="commentform" class="comment-form" novalidate="">
                                                <p class="comment-notes">
                                                    <span id="email-notes">Your email address will not be
                                                        published.</span>
                                                </p>
                                                <p class="comment-form-comment">
                                                    <label for="comment">Your review <span class="required">*</span>
                                                    </label>
                                                    <textarea aria-required="true" rows="6" cols="45" name="comment" id="comment" class="form-control" placeholder="Your review "></textarea>
                                                </p>
                                                <p class="comment-form-author">
                                                    <label for="author">Name <span class="required">*</span>
                                                    </label>
                                                    <input class="form-control" id="author" name="author" type="text" value="" size="30" aria-required="true" required="" placeholder="Full Name">
                                                </p>
                                                <p class="comment-form-email">
                                                    <label for="email">Email <span class="required">*</span>
                                                    </label> <input class="form-control" id="email" name="email" type="email" value="" size="30" aria-required="true" required="" placeholder="e-mail address">
                                                </p>
                                                <p class="form-submit">
                                                    <input type="hidden" name="pro_id" value="<?php echo $pro_id; ?>">
                                                    <button type="submit" name="review" class="btn btn-maincolor"><span>Submit</span></button>
                                                </p>
                                            </form>
                                            <?php review(); ?>
                                        </div>
                                        <!-- #respond -->
                                    </div>
                                </div>
                                <div class="clear">
                                </div>
                            </div>
                        </div>
                        <div class="panel wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
                            <p></p>
                            <?php echo $desc; ?>
                        </div>
                    </div>
                </div>
            </main>
            <?php require(TEMPLATE_FRONT . DS . "viewedpro.php"); ?>
        </div>
    </div>
</section>
<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>