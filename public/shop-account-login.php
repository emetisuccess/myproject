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
                <h1 class="bold text-center text-lg-left">Account - Login</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">Shop</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Account - Login
                    </li>
                </ol>
            </div>

        </div>
    </div>
</section>


</div>


<section class="ls s-pt-60 s-pb-50 s-pt-lg-100 s-pb-lg-90 s-pt-xl-150 s-pb-xl-140">
    <div class="container">
        <div class="row">
            <main class="col-lg-12">
                <article>
                    <!-- .entry-header -->
                    <div class="entry-content">
                        <div class="woocommerce">

                            <form class="woocomerce-form woocommerce-form-login login" method="post">
                                <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label for="username">Username or email address <span class="required">*</span>
                                    </label>
                                    <input type="text"
                                        class="form-control text-center woocommerce-Input woocommerce-Input--text input-text"
                                        name="username" id="username" value="" placeholder="Username or email address">
                                </p>
                                <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label for="password">Password <span class="required">*</span>
                                    </label>
                                    <input
                                        class="form-control text-center woocommerce-Input woocommerce-Input--text input-text"
                                        type="password" name="password" id="password" placeholder="Password">
                                </p>
                                <div class="divider-40"></div>
                                <p class="form-row text-center">
                                    <button type="submit" class="woocommerce-Button btn btn-maincolor"
                                        name="login">Reset password</button>
                                    <label class="woocommerce-form__label woocommerce-form__label-for-checkbox inline">
                                        <input class="woocommerce-form__input woocommerce-form__input-checkbox"
                                            name="rememberme" type="checkbox" id="rememberme" value="forever">
                                        <span>Remember me</span>
                                    </label>
                                </p>
                                <p class="woocommerce-LostPassword lost_password text-center">
                                    <a href="shop-account-password-reset.php">Lost your password?</a>
                                </p>

                            </form>
                        </div>
                    </div>
                    <!-- .entry-content -->
                </article>
            </main>
        </div>
    </div>
    <div class="divider-3"></div>
</section>

<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>