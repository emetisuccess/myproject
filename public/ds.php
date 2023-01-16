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
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h1 class="bold text-center text-lg-left">Driver Services</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Search Result for Drivers
                    </li>
                </ol>
            </div>
        </div>
    </div>
</section>
</div>
<section>
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h5 class="text-center mt-5 mb-2">Search Result for Drivers In <?php echo $_GET['q'] ?? ""; ?></h5>
            </div>
            <?php
            if (isset($_GET['q'])) {
                $driver = $_GET['q'];
                $query = mysqli_query($conn, "SELECT * FROM tbl_driver WHERE driver_city LIKE '%$driver%' OR driver_state LIKE '%$driver%'");
                if (mysqli_num_rows($query) > 0) {
                    while ($data = fetch_assoc($query)) {
            ?>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 my-2">
                <div class="card">
                    <a href="driverdetails.php?driver_id=<?php echo $data['driver_id']; ?>">
                        <img class="card-img-top"
                            src="/myproject-development/resources/uploads/<?php echo $data['driver_image']; ?>"
                            alt="Card image" style='height:200px'>
                    </a>
                    <div class="card-body text-center">
                        <p class="m-0"><?php echo $data['driver_fullname']; ?></p>
                        <p class="m-0"><?php echo $data['driver_mobile']; ?></p>
                        <p class="m-0">
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star-o"></i>
                        </p>
                        <p class="card-text m-0"><?php echo $data['driver_city'] ?>,
                            <?php echo $data['driver_state']; ?></p>
                    </div>
                </div>
            </div>
            <?php }
                } else {
                    echo "The Search Result $driver is not Available";
                }
            } ?>
        </div>
    </div>
</section>


<!-- <div class="modal fade" id="hireForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header text-center">
                <h4 class="modal-title w-100 font-weight-bold">Hire a Driver</h4>
            </div>
            <div class="modal-body mx-3">

                <h6 class="modal-title w-100 font-weight-bold text-center mb-5">Sign up to hire a driver</h6>
                <div class="md-form mb-5">
                    <label for="exampleFormControlFile1">Upload your picture</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1">
                </div>
                <div class="md-form mb-5">
                    <input type="text" id="fullname" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="orangeForm-name">Full Name</label>
                </div>
                <div class="md-form mb-5">
                    <input type="telephone" id="phone" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="telephone">Phone number</label>
                </div>

                <div class="md-form mb-4">
                    <input type="text" id="address" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="address">Address</label>
                </div>

                <div class="md-form mb-4">
                    <input type="text" id="bloodgroup" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="bloodgroup">Blood group</label>
                </div>

                <div class="md-form mb-4">
                    <input type="date" id="dob" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="dob">Birthday</label>
                </div>

                <div class="md-form mb-4">
                    <input type="email" id="email" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="email">Email</label>
                </div>

                <div class="md-form mb-5">
                    <input type="text" id="years" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="years">Duration of Operation</label>
                </div>

                <div class="md-form mb-5">
                    <input type="text" id="worklocation" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="worklocation">Preferred work location</label>
                </div>

            </div>
            <div class="modal-footer d-flex justify-content-center">
                <button class="btn" style="color: white; background-color: #ff4e3c; border-color: #ff4e3c; border-radius: 10px;">Submit</button>
            </div>
        </div>
    </div>
</div> -->


<form action="" method="POST" enctype="multipart/form-data">
    <div class="modal fade" id="driverForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content py-3">
                <div class="modal-header text-center">
                    <h4 class="modal-title w-100 font-weight-bold">Driver Signup</h4>
                </div>
                <div class="modal-body mx-3">
                    <h6 class="modal-title w-100 font-weight-bold mb-5 text-center">Sign up as a driver</h6>
                    <div class="md-form mb-5">
                        <input type="file" name="user_image" class="form-control-file" id="user_image">
                        <label for="exampleFormControlFile1">Upload your picture</label>
                    </div>
                    <div class="md-form mb-5">
                        <input type="text" id="fullname" name="fullname" class="form-control validate">
                        <label>Full Name</label>
                    </div>
                    <div class="md-form mb-5">
                        <input type="telephone" id="phone" name="phone" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="telephone">Phone number</label>
                    </div>

                    <div class="md-form mb-4">
                        <input type="text" id="address" name="address" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="address">Current Address</label>
                    </div>

                    <div class="md-form mb-4">
                        <input type="text" id="city" name="city" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="address">Current City</label>
                    </div>

                    <div class="md-form mb-4">
                        <input type="text" id="state" name="state" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="address">Current State</label>
                    </div>
                    <div class="md-form mb-4">
                        <input type="text" id="bloodgroup" name="blood_group" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="bloodgroup">Blood group</label>
                    </div>

                    <div class="md-form mb-4">
                        <input type="date" id="dob" name="dob" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="dob">Birthday</label>
                    </div>

                    <div class="md-form mb-4">
                        <input type="email" id="email" name="email" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="email">Email</label>
                    </div>

                    <div class="md-form mb-5">
                        <input type="text" id="LicenceNo" name="licenseno" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="licenceNo">Licence Number</label>
                    </div>

                    <div class="form-group">
                        <input type="file" class="form-control-file" name="licenseimage1" id="idBack">
                        <label for="exampleFormControlFile1">Licence For operation ID Card Front</label>
                    </div>

                    <div class="form-group">
                        <input type="file" class="form-control-file" name="licenseimage2" id="idFront">
                        <label for="exampleFormControlFile1">Licence For operation ID Card Back</label>
                    </div>
                    <div class="md-form mb-5">
                        <input type="text" id="driverClass" name="driver_class" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="driverClass">Driver Class</label>
                    </div>

                    <div class="md-form mb-5">
                        <input type="text" id="years_experience" name="years_experience" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="years">Years of Professional
                            Operation</label>
                    </div>

                    <div class="md-form mb-5">
                        <input type="text" id="worklocation" name="worklocation" class="form-control validate">
                        <label data-error="wrong" data-success="right" for="worklocation">Preferred work
                            location</label>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button class="btn text-white" type="submit" name="register_driver"
                        style="background-color: #ff4e3c; border-color: #ff4e3c; border-radius: 10px;">Register</button>
                </div>
            </div>
        </div>
    </div>
</form>
<?php registerDriver() ?>
<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>