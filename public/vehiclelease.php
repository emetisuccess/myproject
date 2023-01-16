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
                <h1 class="bold text-center text-lg-left">Vehicle Lease/Hire</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Vehicle Lease/Hire
                    </li>
                </ol>
            </div>
        </div>
    </div>
</section>
</div>

<section class="s-pt-60 s-pb-15 s-py-lg-90 ls ms w-100 mx-auto">
    <div class="container">
        <div class="row justify-content-center c-mb-40 c-mb-lg-0">
            <div class="col-md-6 col-lg-6">
                <h3 class="text-left mb-2">Looking to
                    Hire/lease a Vehicle</h3>
                <p class="text-left p-2">Vehicar is always available to give you top notch services, hire a car of your
                    choice today</p>

                <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#modalRegisterForm"
                    style="background-color: #ff4e3c; border-color: #ff4e3c; border-radius: 10px; margin-top: 30px">Lease
                    Your Vehicle</a>
            </div>
            <div class="col-md-6 col-lg-6">
                <div class="d-flex flex-column  contact-icon">
                    <img src="./assets/images/2015_Toyota_Fortuner_(New_Zealand).jpg" alt="car">
                </div>
            </div>

            <!-- <a href="" class="btn btn-primary" data-toggle="modal" data-target="#modalRegisterForm" style="background-color: #ff4e3c; border-color: #ff4e3c; border-radius: 10px; margin-top: 30px">Lease Your Car</a> -->
        </div>

    </div>
</section>

<section class="s-pt-60 s-pb-15 s-py-lg-90 ms w-100 mx-auto"
    style="background-color: #ff4e3c; border-color: #ff4e3c; color: white;">
    <div class="container">
        <h3 class="text-center mb-5">Hire with These Easy Steps</h3>
        <div class="row justify-content-center c-mb-40 c-mb-lg-0">
            <div class="col-md-6 col-lg-4">
                <div class="d-flex flex-column contact-icon">
                    <div class="icon-styled color-main fs-40">
                        <i class="ico-map"></i>
                    </div>

                    <div class=" text-center mt-3 p-2">
                        <h6>
                            Choose A Location
                        </h6>
                        <p>
                            All Our Cars Are In Good Working Condition
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="d-flex flex-column  contact-icon">
                    <div class="icon-styled color-main fs-40">
                        <i class="ico-call"></i>
                    </div>

                    <div class=" text-center mt-3 p-2">
                        <h6>
                            Pick-Up Date
                        </h6>
                        <p>
                            All Our Cars Are In Good Working Condition
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="d-flex flex-column  contact-icon">
                    <div class="icon-styled color-main fs-40">
                        <i class="ico-email"></i>
                    </div>

                    <div class=" text-center mt-3 p-2">
                        <h6>
                            Book A Car
                        </h6>
                        <p>
                            All Our Cars Are In Good Working Condition
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mb-5">
                <h3 class="text-center mt-5 mb-2">Find nice Vehicles to Hire Near You Instantly</h3>
                <p class=" text-center mt-3 p-2">Stranded on arrival to the city? With one click you can instantly hire
                    a vehicle near your location. No clubs to join or apps to download. Just direct access to
                    thousands of trusted services.
                </p>
            </div>
            <div class="mt-3 py-50 px-50 cs cs2 mx-auto" style="width:100%; background-color: #ff4e3c;">
                <div class="widget widget_search">
                    <!-- <h5 class="widget-title">Search Widget</h5> -->
                    <form role="search" method="Post" action="">
                        <label for="search-form-widget">
                            <span class="screen-reader-text">Search for:</span>
                        </label>
                        <input type="search" id="search-form-widget" class="search-field"
                            placeholder="Input Your Location To Search Mechanics Around" style="padding-left: 5px;"
                            name="search">
                        <button type="submit" name="vehicle_search" class="search-submit">
                            <span class="screen-reader-text">Input Your Location To Search Vehicle Around </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="my-5">
    <div class="container">
        <div class="row">
            <?php
            $query = mysqli_query($conn, "SELECT * FROM tbl_lease");
            while ($data = fetch_assoc($query)) {
            ?>
            <div class="col-xl-3 col-md-6 col-lg-3 col-sm-6 col-6 my-1">
                <div class="card">
                    <a href="vehicledetails.php?vehicle_id=<?php echo $data['lease_id']; ?>">
                        <img class="card-img-top"
                            src="/myproject-development/resources/uploads/<?php echo $data['image1'] ?>"
                            alt="Card image" style="height:200px;">
                    </a>
                    <div class="card-body text-center">
                        <p class="my-0"><?php echo $data['model_year'] . " " . $data['model_name']; ?></h6>
                        <p class="m-0">&#8358;<?php echo $data['charge_per_day']; ?>/Day</p>
                        <p class="m-0"><?php echo $data['contact_number']; ?></p>
                        <p class="card-text m-0"><?php echo $data['city'] ?>,
                            <?php echo $data['state']; ?></p>
                        </a>
                    </div>
                </div>
            </div>
            <?php   } ?>
        </div>
    </div>
</section>

<div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <form action="" method="POST" enctype="multipart/form-data">
            <div class="modal-content p-3">
                <div class="modal-header text-center">
                    <h4 class="modal-title w-100 font-weight-bold">Lease Your Vehicle</h4>
                </div>
                <!-- <p class="text-center" id="demo"></p> -->
                <div class="modal-body mx-3">
                    <h6 class="modal-title w-100 font-weight-bold">Tell us a little about your car</h6>

                    <div class="md-form mt-3">
                        <input type="file" id="image1" name="image1" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-name">Front</label>
                    </div>
                    <div class="md-form">
                        <input type="file" id="image2" name="image2" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-name">Back</label>
                    </div>
                    <div class="md-form">
                        <input type="file" id="image3" name="image3" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-name">Inside</label>
                    </div>
                    <div class="md-form">
                        <input type="year" id="year" name="model_year" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-name">Model Year, e.g,
                            2005</label>
                    </div>
                    <div class="md-form">
                        <input type="text" id="model_name" name="model_name" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-name">Model Name, e.g,
                            Toyota XLE</label>
                    </div>
                    <div class="md-form">
                        <input type="text" id="make" name="make" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-email">Make, e.g,
                            Japanese</label>
                    </div>

                    <div class="md-form mb-3">
                        <input type="text" id="color" name="color" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-pass">Vehicle color, e.g,
                            Red</label>
                    </div>

                    <div class="md-form mb-3">
                        <input type="text" id="seats" name="seats" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-pass">Number of seats</label>
                    </div>

                    <h6 class="modal-title w-100 font-weight-bold">Contact Details</h6>
                    <div class="md-form">
                        <input type="text" id="contact_name" name="contact_name" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-name">Contact Name</label>
                    </div>
                    <div class="md-form mb-3">
                        <input type="text" id="contact_number" name="contact_number" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-name">Contact Number</label>
                    </div>

                    <h6 class="modal-title w-100 font-weight-bold">Where is the vehicle located?</h6>
                    <div class="md-form">
                        <input type="text" id="address" name="address" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-name">Address</label>
                    </div>
                    <div class="md-form ">
                        <input type="text" id="city" name="city" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-email">City</label>
                    </div>

                    <div class="md-form">
                        <input type="text" id="state" name="state" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-pass">State</label>
                    </div>

                    <div class="md-form">
                        <input type="text" id="zipcode" name="zipcode" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-pass">Zip code</label>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <input class="btn text-white" type="submit" name="vehicleLease" value="Post Vehicle"
                        style="background-color: #ff4e3c; border-color: #ff4e3c; border-radius: 10px;">
                </div>
            </div>
        </form>
    </div>
</div>
<?php vehicleLease(); ?>
<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>