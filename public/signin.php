<?php require_once("../resources/config.php"); ?>

<?php require_once(TEMPLATE_FRONT . DS . "indexheader.php"); ?>

<?php require(TEMPLATE_FRONT . DS . "loader.php"); ?>

<?php require(TEMPLATE_FRONT . DS . "modal.php"); ?>

<?php require(TEMPLATE_FRONT . DS . "addressmenu1.php"); ?>

<?php require(TEMPLATE_FRONT . DS . "header1.php"); ?>

<section class="page_title ds s-pt-105 s-pt-lg-115 s-pb-lg-60">
    <div class="divider-3 d-none d-lg-block"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="bold text-center text-lg-left">User Signin</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Sign
                    </li>
                </ol>
            </div>
        </div>
    </div>
</section>
</div>


<section class="s-pt-60 s-pb-15 s-py-lg-90 ls ms">
    <div class="container">
        <div class="row c-mb-40 c-mb-lg-0">
            <div class="col-md-6 col-lg-3">
                <div class="media contact-icon">
                    <div class="icon-styled color-main fs-40">
                        <i class="ico-map"></i>
                    </div>

                    <div class="media-body">
                        <h6>
                            Adress
                        </h6>
                        <p>
                            2688 Simpson Avenue Harrisburg, PA 17109
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="media contact-icon">
                    <div class="icon-styled color-main fs-40">
                        <i class="ico-call"></i>
                    </div>

                    <div class="media-body">
                        <h6>
                            Phone
                        </h6>
                        <p>
                            +1 234 56 78
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="media contact-icon">
                    <div class="icon-styled color-main fs-40">
                        <i class="ico-email"></i>
                    </div>

                    <div class="media-body">
                        <h6>
                            Email
                        </h6>
                        <p>
                            info@candycar.com
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="media contact-icon">
                    <div class="icon-styled color-main fs-40">
                        <i class="ico-clock"></i>
                    </div>

                    <div class="media-body">
                        <h6>
                            Opening time
                        </h6>
                        <p>
                            8.00am - 8.00pm
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<section class="ls map-left container-px-0">
    <div class="container-fluid">
        <div class="row align-items-center c-gutter-85">
            <div class="col-xl-6 col-lg-6 col-md-6 col-xs-12">
                <div class="animate page_map" data-animation="scaleAppear">
                    <div class="marker">
                        <div class="marker-address">sydney, australia, Liverpool street, 2</div>
                        <div class="marker-title">Fourth Marker</div>
                        <div class="marker-description">
                            <p><strong>Sydney, Australia, Liverpool Street, 2</strong>.<br>
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Aliquid cumque,
                                deserunt dolor.
                            </p>
                        </div>
                        <img class="marker-icon" src="images/map_marker_icon.png" alt="">
                    </div>
                    <!-- .marker -->
                </div>
                <!--.col-* -->
            </div>
            <div class="col-xl-4 col-lg-5 col-md-5 col-12 mt-0">
                <div class="contact-item animate" data-animation="scaleAppear">
                    <h3 class="special-heading">Sign<span class="text-gradient">in</span></h3>
                    <div class="divider-35"></div>
                    <p><?php display_message(); ?></p>
                    <form class="c-mb-30 c-gutter-20" method="post" action="">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group has-placeholder">
                                    <label for="email">Email</label>
                                    <input type="email" aria-required="true" size="30" value="" name="email" id="email"
                                        class="form-control" placeholder="Email">
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group has-placeholder">
                                    <label for="password">Password</label>
                                    <input type="password" aria-required="true" size="30" value="" name="password"
                                        id="password" class="form-control" placeholder="Password">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 mt-20">
                                <div class="form-group">
                                    <button type="submit" id="contact_form_submit" name="signin_submit"
                                        class="btn btn-small btn-outline-maincolor"><span>Signin</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!--.col-* -->
        </div>
    </div>
</section>
<?php user_signin(); ?>
<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>