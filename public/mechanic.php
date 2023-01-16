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
                <h1 class="bold text-center text-lg-left">Vehicle Maintenace</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Vehicle Maintenace
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
                <h3 class="text-left mb-2 p-2">Vehicle Maintenance</h3>
                <p class="text-left p-2">Times are changing, cars are changing. One of the biggest changes in today’s
                    automotive industry is the perception of a “tune-up.” Ask 10 vehicle owners their definition of a
                    tune-up and chances are there’ll be 10 different answers.

                    <br> As part of the 21st Century Tune-up on today’s modern vehicles, the following systems should be
                    inspected:
                </p>
                <ul>
                    <li>Be a registered mechanic on this platform</li>
                    <li>Get a mechanic closest to you</li>
                    <li>Your vehicles are in trusted hands</li>
                    <li>Our mechanics are qualified professionals</li>
                </ul>

                <a href="" class="btn btn-primary" data-toggle="modal" data-target="#modalRegisterForm"
                    style="background-color: #ff4e3c; border-color: #ff4e3c; border-radius: 10px; margin: 0px 10px 0px 5px; ">Register
                    as a Mechanic</a>
            </div>
            <div class="col-md-6 col-lg-6">
                <div class="d-flex flex-column  contact-icon">
                    <img src="./images/mechanic.jpg" style="height: 500px;" alt="car">
                </div>
            </div>
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
                            Search For Mechanic
                        </h6>
                        <p>
                            Search for a nearby mechanic in your location
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
                            See All Mechanics Around
                        </h6>
                        <p>
                            Find all the mechanics around you
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
                            Book A Mechanic
                        </h6>
                        <p>
                            Book a mechanic by call/text or through our website
                        </p>
                    </div>
                </div>
            </div>
        </div>
</section>

<section>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mb-1">
                <h3 class="text-center mt-5 mb-2">Find A Mechanic Near You Instantly</h3>
                <p class=" text-center mt-3 p-2">Stranded on the side of the road? With one click you can instantly call
                    mechanics near your location. No clubs to join or apps to download. Just direct access to thousands
                    of trusted mechanics.</p>
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
                            value="" name="search">
                        <button type="submit" name="mechanic_search" class="search-submit">
                            <span class="screen-reader-text">Input Your Location To Search Mechanics Around </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
</section>
<section class="my-4">
    <div class="container">
        <div class="row">
            <?php
            $query = mysqli_query($conn, "SELECT * FROM tbl_mechanic");
            while ($data = fetch_assoc($query)) {
            ?>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 my-2">
                <div class="card">
                    <a href="mechanicdetails.php?mechanic_id=<?php echo $data['mech_id']; ?>">
                        <img class="card-img-top"
                            src="/myproject-development/resources/uploads/<?php echo $data['mech_image1']; ?>"
                            alt="Card image" style='height:200px'>
                    </a>
                    <div class="card-body text-center">
                        <p class="m-0"><?php echo $data['mech_fullname']; ?></p>
                        <p class="m-0"><?php echo $data['mech_contact']; ?></p>
                        <p class="m-0">
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star-o"></i>
                        </p>
                        <p class="card-text m-0"><?php echo $data['mech_city'] ?>,
                            <?php echo $data['mech_state']; ?></p>
                    </div>
                </div>
            </div>
            <?php } ?>
        </div>
    </div>
</section>



<form action="" method="POST" enctype="multipart/form-data">
    <div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">

            <div class="modal-content py-3">
                <div class="modal-header text-center">
                    <h4 class="modal-title w-100 font-weight-bold">Register As A Mechanic</h4>
                </div>
                <div class="modal-body mx-3">
                    <h6 class="modal-title w-100 font-weight-bold mb-4">Tell us a little about yourself</h6>
                    <div class="md-form mb-4">
                        <input type="file" name="image1" class="form-control-file">
                        <label for="exampleFormControlFile1">Upload your picture. Not more than 2mb, accepted format
                            jpg, png, jpeg</label>
                    </div>
                    <div class="md-form mb-4">
                        <input type="file" name="image2" class="form-control-file">
                        <label for="exampleFormControlFile1">Upload your ID card Front. Not more than 2mb accepted
                            format
                            jpg, png, jpeg </label>
                    </div>
                    <div class="md-form mb-4">
                        <input type="file" name="image3" class="form-control-file">
                        <label for="exampleFormControlFile1">Upload your ID card Back. Not more than 2mb, accepted
                            format
                            jpg, png, jpeg</label>
                    </div>
                    <div class="md-form mb-4">
                        <input type="text" name="fullname" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-name">Your name</label>
                    </div>
                    <div class="md-form mb-4">
                        <input type="tel" name="phone" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-email">Your phone number</label>
                    </div>

                    <div class="md-form mb-4">
                        <input type="email" name="email" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-email">Your Email address</label>
                    </div>

                    <div class="md-form mb-4">
                        <input type="text" name="address" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-pass">Your address</label>
                    </div>

                    <div class="md-form mb-4">
                        <input type="text" name="city" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-pass">Your City</label>
                    </div>

                    <div class="md-form mb-4">
                        <input type="text" name="state" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-pass">Your State</label>
                    </div>
                    <div class="md-form mb-4">
                        <input type="text" name="experience" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-pass">How many years of
                            professional
                            auto repair experience do you have? <span>We consider professional experience to be full
                                time in
                                a shop under supervision</span></label>
                    </div>
                    <!-- <div class="md-form mb-5">
                        <input type="text" id="orangeForm-name" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-name">How many full-time jobs
                            have
                            you had in the past five years?</label>
                    </div> -->
                    <div class="md-form mb-5">
                        <input type="text" name="hoursperweek" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-name">How many hours per week are
                            you
                            willing to work?</label>
                    </div>
                    <div class="md-form mb-5">
                        <input type="text" name="certification" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="orangeForm-email">Certifications I have
                            obtained:</label>
                    </div>
                    <label for="">I want to work:</label>
                    <div class="checkbox mb-4">
                        <label>
                            <input type="radio" id="chkbox1" name="duration" value="full-time" runat="server">
                            Full-time
                        </label><br>
                        <label>
                            <input type="radio" id="chkbox1" name="duration" value="part-time" runat="server">Part-time
                        </label>
                    </div>

                    <label for="">Type of services I can perform:</label>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" id="chkbox1" name="repair" value="Repair and Replace" runat="server">
                            Repair And
                            Replace Services
                        </label><br>
                        <label>
                            <input type="checkbox" id="chkbox1" name="diagnostic" value="Diagnostic" runat="server">
                            Diagnostic Services
                        </label><br>
                        <label>
                            <input type="checkbox" id="chkbox1" name="pre_purchase" value="Pre-purchase Inspection"
                                runat="server">
                            Pre-purchase
                            Inspection Services
                        </label><br>
                        <label>
                            <input type="checkbox" id="chkbox1" name="oilchange" value="Services and Oil Changes"
                                runat="server">
                            Services
                            and Oil Change Services
                        </label>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button class="btn text-white" type="submit" name="register_mechanic"
                        style="background-color: #ff4e3c; border-color:#ff4e3c; border-radius: 10px;">Register
                    </button>
                </div>
            </div>
        </div>
    </div>
</form>
<?php registerMechanic(); ?>
<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>