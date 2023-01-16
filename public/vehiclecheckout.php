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
                <h1 class="bold text-center text-lg-left">Hire Vehicle </h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Vehicle Details
                    </li>
                </ol>
            </div>
        </div>
    </div>
</section>
</div>

<?php
// if (!isset($_SESSION['user_id'])) {
//     redirect("signin.php");
// }
?>
<form action="" method="post">
    <section class="ls s-py-60 s-py-lg-100 s-py-xl-150">
        <div class="container">
            <div class="row">
                <main class="col-lg-8 col-xl-8 col-md-8">
                    <?php
                    if (isset($_GET['vehicle_id'])) {

                        $veh_id = $_GET['vehicle_id'];

                        $relatedQuery = mysqli_query($conn, "SELECT * FROM tbl_lease WHERE lease_id = ' $veh_id'");
                        while ($items = fetch_assoc($relatedQuery)) {
                            $lease_id = $items['lease_id'];
                            $model_year = $items['model_year'];
                            $model_name = $items['model_name'];
                            $make = $items['make'];
                            $seats = $items['seats'];
                            $contact_name = $items['contact_name'];
                            $contact_number = $items['contact_number'];
                            $charge_per_day = $items['charge_per_day'];
                            $address = $items['address'];
                            $city = $items['city'];
                            $state = $items['state'];
                            $image1 = $items['image1'];
                            $image2 = $items['image2'];
                            $image3 = $items['image3'];
                    ?>
                    <div class="product">
                        <div class="images" data-columns="3" style="width:500px;">
                            <figure>
                                <div data-thumb="/myproject-development/resources/uploads/<?php echo $image1; ?>">
                                    <a href="/myproject-development/resources/uploads/<?php echo $image1; ?>">
                                        <img src="/myproject-development/resources/uploads/<?php echo $image1; ?>"
                                            alt="" data-caption=""
                                            data-src="/myproject-development/resources/uploads/<?php echo $image1; ?>"
                                            data-large_image="/myproject-development/resources/uploads/<?php echo $image1; ?>"
                                            data-large_image_width="1000" data-large_image_height="1000">
                                    </a>
                                    <input type="hidden" name="image1" value="<?php echo $image1; ?>">
                                </div>
                                <div data-thumb="/myproject-development/resources/uploads/<?php echo $image2; ?>">
                                    <a href="/myproject-development/resources/uploads/<?php echo $image2; ?>">
                                        <img src="/myproject-development/resources/uploads/<?php echo $image2; ?>"
                                            alt="" data-caption=""
                                            data-src="/myproject-development/resources/uploads/<?php echo $image2; ?>"
                                            data-large_image="/myproject-development/resources/uploads/<?php echo $image2; ?>"
                                            data-large_image_width="1000" data-large_image_height="1000">
                                    </a>
                                </div>
                                <div data-thumb="/myproject-development/resources/uploads/<?php echo $image3; ?>">
                                    <a href="/myproject-development/resources/uploads/<?php echo $image3; ?>">
                                        <img src="/myproject-development/resources/uploads/<?php echo $image3; ?>"
                                            alt="" data-caption=""
                                            data-src="/myproject-development/resources/uploads/<?php echo $image3; ?>"
                                            data-large_image="" data-large_image_width="1000"
                                            data-large_image_height="1000">
                                    </a>
                                </div>
                            </figure>
                        </div>
                    </div>
                </main>
                <div class="col-lg-4 summary entry-summary  text-md-left mx-0">
                    <input type="hidden" name='veh_id' value="<?php echo $veh_id ?? ""; ?>">
                    <h5 class="product_title mx-0"><?php echo $model_year; ?> <?php echo $model_name; ?></h5>
                    <input type="hidden" name="model_year" value="<?php echo $model_year . " " . $model_name; ?>">
                    <div class="left-content text-lg-left">
                        <div class="mb-3">
                            <label for="" class='m-0'>Make:</label>
                            <span class="fs-20 color-dark position m-0"><?php echo $make; ?></span>
                            <input type="hidden" name="make" value="<?php echo $make; ?>">
                        </div>
                        <div class="mb-3">
                            <label for="" class='m-0'>Number of Passengers:</label>
                            <span class="fs-20 color-dark position m-0"><?php echo $seats; ?></span>
                            <input type="hidden" name="seats" value="<?php echo $seats; ?>">
                        </div>
                        <div class="mb-3">
                            <label for="" class='m-0'>Charge Per Day:</label>
                            <span class="fs-20 color-dark position m-0">&#8358;<?php echo $charge_per_day; ?></span>
                            <input type="hidden" name="charge_per_day" value="<?php echo $charge_per_day; ?>">
                        </div>
                        <div class="mb-3">
                            <label for="" class='m-0'>Contact Name:</label>
                            <span class="fs-20 color-dark position m-0"><?php echo $contact_name; ?></span>
                            <input type="hidden" name="contact_name" value="<?php echo $contact_name; ?>">
                        </div>
                        <div class="mb-3">
                            <label for="" class='m-0'>Contact Number:</label>
                            <span class="fs-20 color-dark position m-0"><?php echo $contact_number; ?></span>
                            <input type="hidden" name="contact_number" value="<?php echo $contact_number; ?>">
                        </div>
                        <div class="mb-3">
                            <label for="" class='m-0'>Location of the Vehicle:</label>
                            <p class="fs-20 color-dark position m-0">
                                <?php echo $address . " , " . $city . " " . $state; ?>
                            </p>
                            <input type="hidden" name="location"
                                value="<?php echo $address . " " . $city . " " . $state; ?>">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-sm text-white btn-block" name="checkout_rent_vehicle"
                        style="background-color: #ff4e3c; border-color: #ff4e3c; border-radius: 10px; color: #ff4e3c;">
                        Checkout Now
                    </button>
                </div>
                <?php }
                    } ?>
                <!-- #product-22 -->
            </div>
        </div>
    </section>

    <section class="mb-3">
        <div class="container">
            <div class="row ">
                <main class="col-lg-7 col-xl-7 col-md-7 col-sm-12 col-12 order-lg-2">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-5">
                                <input type="time" name='pick_uptime' class="form-control" required>
                                <label for="" class='m-0'>Pick-up Time</label>
                            </div>
                            <div class="mb-5">
                                <input type="time" name='drop_offtime' class="form-control" required>
                                <label for="" class='m-0'>Drop-off Time</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-5">
                                <input type="date" name='pick_update' class="form-control" required>
                                <label for="" class='m-0'>Pick-up Date</label>
                            </div>
                            <div class="mb-5">
                                <input type="date" name='drop_offdate' class="form-control" required>
                                <label for="" class='m-0'>Drop-off Date</label>
                            </div>
                        </div>
                    </div>
                    <h6 class="modal-title w-100 font-weight-bold my-2">Driver Details as appear on Driver's Licence
                    </h6>
                    <div class="mb-5">
                        <input type="email" name='email' class="form-control" required>
                        <label for="" class='m-0'>Email</label>
                    </div>
                    <div class="mb-5">
                        <label for="" class='m-0'>Title</label>
                        <select name="title" class="form-control" required>
                            <option value="">Select Option</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                            <option value="Dr">Dr</option>
                            <option value="Ms">Ms</option>
                        </select>
                    </div>
                    <div class="mb-5">
                        <input type="text" name='firstname' class="form-control" required>
                        <label for="" class='m-0'>Firstname</label>
                    </div>
                    <div class="mb-5">
                        <input type="text" name='lastname' class="form-control" required>
                        <label for="" class='m-0'>Lastname</label>
                    </div>
                    <div class="mb-5">
                        <input type="text" name='licenceno' class="form-control" required>
                        <label for="" class='m-0'>Licence Number</label>
                    </div>
                    <div class="mb-5">
                        <input type="tel" name='cust_number' class="form-control" required>
                        <label for="" class='m-0'>Contact Number</label>
                    </div>
                    <div class="mb-5">
                        <input type="text" name='flightno' class="form-control" placeholder="e.g KL8923">
                        <label for="" class='m-0'>Flight Number (Optional)</label>
                    </div>
                </main>
            </div>
        </div>
    </section>
</form>

<section class="mb-3">
    <div class="container">
        <div class="row justify-content-center">
            <main class="col-lg-7 col-xl-9 order-lg-2">
                <div class="product">
                    <section class="up-sells upsells products">
                        <div class="cross-sells mt-5">
                            <h3 class="special-heading text-center">Other<span class="text-gradient">Vehicles</span>
                            </h3>
                            <p class="fs-20 color-dark">Choose your Prefered Vehicle Here</p>
                            <div class="divider-55 d-none d-lg-block"></div>
                            <ul class="products">
                                <?php
                                $relatedQuery = mysqli_query($conn, "SELECT * FROM tbl_lease WHERE lease_id != '$veh_id'");
                                while ($items = fetch_assoc($relatedQuery)) {
                                ?>
                                <li class="product vertical-item padding-small content-padding">
                                    <div class="product-inner bordered">
                                        <a class="link-scale"
                                            href="/myproject-development/public/vehicledetails.php?vehicle_id=<?php echo $items['lease_id']; ?>">
                                            <img src="/myproject-development/resources/uploads/<?php echo $items['image1']; ?>"
                                                alt="Product Image" style="height:200px; width:350px">
                                        </a>
                                        <div class="my-3 mx-2">
                                            <h6 class="my-0"><?php echo $items['model_year']; ?></h6>
                                            <p class="m-0"><?php echo $items['model_name']; ?></p>
                                            <p class="m-0"><?php echo $items['contact_number']; ?></p>
                                            <p class="card-text m-0"><?php echo $items['city'] ?>,
                                                <?php echo $items['state']; ?></p>
                                            </a>
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