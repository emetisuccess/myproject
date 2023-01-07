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
                <h1 class="bold text-center text-lg-left">Driver Services</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Drivers
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
                <div class="d-flex flex-column  contact-icon">
                    <img src="./images/drive.jpeg" alt="car">
                </div>
            </div>
            <div class="col-md-6 col-lg-6">
                <h3 class="text-left my-5">Beome a driver / Need a driver?</h3>
                <!-- <form role="form" method="POST" action="">
                    <input type="hidden" name="_token" value="">
                    <div class="form-group">
                        <label class="control-label">Fullname</label>
                        <div>
                            <input type="text" class="form-control input-lg" name="name" value="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">E-Mail Address</label>
                        <div>
                            <input type="email" class="form-control input-lg" name="email" value="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Password</label>
                        <div>
                            <input type="password" class="form-control input-lg" name="password">
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="remember"> Remember Me
                                </label>
                            </div>
                        </div>
                    </div> -->
                <!-- <div class="form-group">
                        <div> -->
                <!-- <a class="btn btn-link" href="">Forgot Your Password?</a> -->
                <!-- <button type="submit" class="btn btn-info btn-block"
                                style="background-color: #ff4e3c; color: #ffffff; border: none; margin-top:20px;">Sign
                                Up</button> -->
                <!-- </div>
                    </div>
                </form> -->
            </div>
        </div>
    </div>
</section>


<section class="s-pt-60 s-pb-15 s-py-lg-90 ms w-100 mx-auto"
    style="background-color: #ff4e3c; border-color: #ff4e3c; color: white;">
    <div class="container">
        <h3 class="text-center mb-5">How It Works</h3>
        <div class="row justify-content-center c-mb-40 c-mb-lg-0">
            <div class="col-md-6 col-lg-4">
                <div class="d-flex flex-column contact-icon">
                    <div class="icon-styled color-main text-white fs-40">
                        <i class="ico-map"></i>
                    </div>

                    <div class=" text-center">
                        <h6>
                            Work From Your Location
                        </h6>
                        <p>
                            Sign Up as a driver, and work where you are.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="d-flex flex-column  contact-icon">
                    <div class="icon-styled text-white fs-40">
                        <i class="fa fa-money"></i>
                    </div>
                    <div class="text-center">
                        <h6>
                            Earn Money
                        </h6>
                        <p>
                            Use your vehicle for extra source of income.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="d-flex flex-column  contact-icon">
                    <div class="icon-styled text-white color-main fs-40">
                        <i class="ico-email"></i>
                    </div>

                    <div class="text-center">
                        <h6>
                            Drive Time
                        </h6>
                        <p>
                            Ease to drive whenever you want.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<section class="s-pt-60 s-pb-15 s-py-lg-90 ls ms w-100 mx-auto">
    <div class="container">
        <h3 class="text-center mb-5">Hire A Driver?</h3>
        <div class="row justify-content-center c-mb-40 c-mb-lg-0">
            <div class="col-md-6 col-lg-6">
                <div class="d-flex flex-column contact-icon">
                    <div class=" text-left mt-3 p-2">
                        <h6>
                            FULL TERM DRIVERS EMPLOYMENT
                        </h6>
                        <p>
                            Are you a private vehicle owner or enterprise seeking to engage the services of a
                            professional and well-trained driver in 24hours? We are sure, you are in the right place.
                            Hire the right set of reliable vetted professional drivers.
                        </p>

                        <button class="btn" data-toggle="modal" data-target="#hireForm"
                            style="color: white; background-color: #ff4e3c; border-color: #ff4e3c; border-radius: 10px;">Hire
                            a Driver</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-6">
                <div class="d-flex flex-column  contact-icon">

                    <div class=" text-left mt-3 p-2">
                        <h6>
                            SHORT TERM DRIVERS EMPLOYMENT
                        </h6>
                        <p class="text-left">
                            Engage our drivers for a day service, a week service, a month scheduled times within the
                            month or within thr month or within the year. This service enables you to make use of a
                            driver's service for a handful period of time.
                        </p>

                        <button class="btn" data-toggle="modal" data-target="#hireForm"
                            style="color: white; background-color: #ff4e3c; border-color: #ff4e3c; border-radius: 10px;">Hire
                            A Driver</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>




<section class="s-pt-60 s-pb-15 s-py-lg-90 ls ms pb-2"
    style="background-color: #ff4e3c; border-color: #ff4e3c; color: white;">
    <div class="container">
        <h3 class="text-center mb-3" style="color: white;">Become a Driver</h3>
        <div class="text-center mt-3 p-2">
            <p>
                Are you an experienced driver with valid driver licence and ID seeking to offer the services of a
                professional and well-trained driver in 24hours? Sign up as a driver on vehicar and get access to
                professional clients seeking your services.
            </p>
            <a href="" class="btn btn-primary" data-toggle="modal" data-target="#driverForm"
                style="background-color: white; border-color: white; color: #ff4e3c; border-radius: 10px;">Beome A
                Driver</a>
            <!-- <div class="text-center">
  <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalRegisterForm" style="background-color: #ff4e3c; border-color: #ff4e3c; border-radius: 10px;">Launch
    Modal Register Form</a>
</div> -->
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mb-5">
                <h3 class="text-center mt-5 mb-2">Find a Professional Driver Near You Instantly</h3>
                <p class=" text-center mt-3 p-2">You don't feel like driving, want someone special and Professional to
                    handle your car here we are at your service. You can hire one of our professional drivers here with
                    just a click..</p>
            </div>
        </div>
    </div>
</section>
<section>
    <div class="container">
        <div class="row">
            <?php
            $query = mysqli_query($conn, "SELECT * FROM tbl_driver");
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
            <?php } ?>
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