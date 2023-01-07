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
                <h1 class="bold text-center text-lg-left">About Driver</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Driver Details
                    </li>
                </ol>
            </div>
        </div>
    </div>
</section>
</div>

<section class="ls s-pt-60 s-pt-lg-100 s-pt-xl-150 team-single">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="row align-items-center text-center text-lg-left c-gutter-70">
                    <?php
                    if (isset($_GET['driver_id'])) {

                        $driver_id = $_GET['driver_id'];

                        $query = mysqli_query($conn, "SELECT * FROM tbl_driver WHERE driver_id='$driver_id'");
                        while ($data = fetch_assoc($query)) {
                    ?>
                    <div class="col-lg-6">
                        <img src="/myproject-development/resources/uploads/<?php echo $data['driver_image']; ?>"
                            alt="driver image" style="height:500px;">
                        <div class="divider-30 d-block d-lg-none"></div>
                    </div>
                    <div class="left-content col-lg-6 text-center text-lg-left">
                        <h4><span class="text-gradient m-0"><?php echo $data['driver_fullname']; ?></span></h4>
                        <div class="mb-3">
                            <label for="" class='m-0'>Driver Email:</label>
                            <p class="fs-20 color-dark position m-0"><?php echo $data['driver_email']; ?></p>
                        </div>
                        <div class="mb-3">
                            <label for="" class='m-0'>Driver Mobile:</label>
                            <p class="fs-20 color-dark position m-0"><?php echo $data['driver_mobile']; ?></p>
                        </div>
                        <div class="mb-3">
                            <label for="" class='m-0'>Driver Class:</label>
                            <p class="fs-20 color-dark position m-0"><?php echo $data['driver_class']; ?></p>
                        </div>
                        <div class="mb-3">
                            <label for="" class='m-0'>Driver Preffered Location:</label>
                            <p class="fs-20 color-dark position m-0"><?php echo $data['preffered_location']; ?></p>
                        </div>
                        <div class="mb-3">
                            <label for="" class='m-0'>Driver Years of Experience:</label>
                            <p class="fs-20 color-dark position m-0"><?php echo $data['driver_experience']; ?> Years</p>
                        </div>
                        <div class="mb-3">
                            <label for="" class='m-0'>Driver Current Address:</label>
                            <p class="fs-20 color-dark position m-0">
                                <?php echo $data['driver_address']; ?>,<?php echo $data['driver_city']; ?></p>
                            <p class="fs-20 color-dark position m-0"><?php echo $data['driver_state']; ?> State</p>
                        </div>
                        <div class="divider-90 d-none d-xl-block"></div>
                        <p class="social-icons text-center with-border overflow-hidden">
                            <span><a href="#" class="fa fa-facebook border-icon rounded-icon"
                                    title="facebook"></a></span>
                            <span><a href="#" class="fa fa-paper-plane border-icon rounded-icon"
                                    title="telegram"></a></span>
                            <span><a href="#" class="fa fa-instagram border-icon rounded-icon"
                                    title="instagram"></a></span>
                        </p>
                    </div>
                    <?php     }
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="ls s-py-80 s-py-lg-120 s-py-xl-160 c-gutter-30">
    <div class="container">
        <div class="row justify-content-center">
            <main class="col-lg-7 col-xl-9 order-lg-2">
                <div class="product">
                    <section class="up-sells upsells products">
                        <div class="cross-sells mt-5">
                            <h3 class="special-heading text-center">Checkout other<span
                                    class="text-gradient">Drivers</span></h3>
                            <p class="fs-20 color-dark">The Vehicle Driver Appointment</p>
                            <div class="divider-55 d-none d-lg-block"></div>
                            <ul class="products">
                                <?php
                                $relatedQuery = mysqli_query($conn, "SELECT * FROM tbl_driver WHERE driver_id != '$driver_id'");
                                while ($items = fetch_assoc($relatedQuery)) {
                                ?>
                                <li class="product vertical-item padding-small content-padding">
                                    <div class="product-inner bordered">
                                        <a class="link-scale"
                                            href="/myproject-development/public/driverdetails.php?driver_id=<?php echo $items['driver_id']; ?>">
                                            <img src="/myproject-development/resources/uploads/<?php echo $items['driver_image']; ?>"
                                                alt="Product Image" style="height:200px; width:350px">
                                        </a>
                                        <div class="my-3">
                                            <h6 class="my-0"><?php echo $items['driver_fullname']; ?></h6>
                                            <p class="m-0"><?php echo $items['driver_email']; ?></p>
                                            <p class="m-0"><?php echo $items['driver_mobile']; ?></p>
                                            <span class="text-warning my-0">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </span>
                                            <p class="card-text m-0"><?php echo $items['driver_city'] ?>,
                                                <?php echo $items['driver_state']; ?></p>
                                        </div>
                                    </div>
                                </li>
                                <?php } ?>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    </div>
</section>

<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>