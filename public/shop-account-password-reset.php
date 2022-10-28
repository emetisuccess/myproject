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
                <h1 class="bold text-center text-lg-left">Password Reset</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">Shop</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Password Reset
                    </li>
                </ol>
            </div>

        </div>
    </div>
</section>


</div>


<section class="ls s-pt-50 s-pb-40 s-pt-lg-90 s-pb-lg-80 s-pt-xl-140 s-pb-xl-130">
    <div class="divider-3"></div>
    <div class="container">
        <div class="row">
            <main class="col-lg-12">
                <form method="post" class="woocommerce-ResetPassword lost_reset_password text-center">

                    <p>Lost your password? Please enter your username or email address. You will receive a link to
                        create a new password
                        via email.</p>

                    <p class="woocommerce-form-row woocommerce-form-row--first form-row form-row-first mt-20">
                        <label for="user_login">Username or email</label>
                        <input class="form-control text-center woocommerce-Input woocommerce-Input--text input-text"
                            type="text" name="user_login" id="user_login" placeholder="Username or email">
                    </p>

                    <div class="clear"></div>

                    <div class="divider-20"></div>
                    <p class="woocommerce-form-row form-row">
                        <button type="submit" class="woocommerce-Button btn btn-maincolor"
                            name="save_account_details">Reset password</button>
                    </p>

                </form>


            </main>
        </div>
    </div>
</section>
<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>