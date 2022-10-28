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
                <h1 class="bold text-center text-lg-left">Account Details</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">Shop</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Account Details
                    </li>
                </ol>
            </div>

        </div>
    </div>
</section>


</div>


<section class="ls s-pt-50 s-pb-60 s-pt-lg-90 s-pb-lg-100 s-pt-xl-140 s-pb-xl-150">
    <div class="divider-3"></div>
    <div class="container">
        <div class="row">
            <main class="col-lg-12">
                <article>
                    <header class="entry-header mb-30">
                        <h1 class="entry-title">Account details</h1>
                        <span class="edit-link">
                            <a class="post-edit-link" href="#">Edit
                                <span class="screen-reader-text"> "My account"
                                </span>
                            </a>
                        </span>
                    </header>
                    <!-- .entry-header -->
                    <div class="entry-content">
                        <div class="woocommerce">
                            <nav class="woocommerce-MyAccount-navigation p-60 hero-bg">
                                <ul>
                                    <li>
                                        <a href="shop-account-dashboard.php">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="shop-account-orders.php">Orders</a>
                                    </li>
                                    <li>
                                        <a href="shop-account-downloads.php">Downloads</a>
                                    </li>
                                    <li>
                                        <a href="shop-account-addresses.php">Addresses</a>
                                    </li>
                                    <li class="is-active">
                                        <a href="shop-account-details.php">Account details</a>
                                    </li>
                                    <li>
                                        <a href="shop-account-login.php">Logout</a>
                                    </li>
                                </ul>
                            </nav>


                            <div class="woocommerce-MyAccount-content">

                                <form class="woocommerce-EditAccountForm edit-account" method="post">


                                    <p class="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                                        <label for="account_first_name">First name <span class="required">*</span>
                                        </label>
                                        <input type="text"
                                            class="form-control woocommerce-Input woocommerce-Input--text input-text"
                                            name="account_first_name" id="account_first_name" value=""
                                            placeholder="First name">
                                    </p>
                                    <p class="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
                                        <label for="account_last_name">Last name <span class="required">*</span>
                                        </label>
                                        <input type="text"
                                            class="form-control woocommerce-Input woocommerce-Input--text input-text"
                                            name="account_last_name" id="account_last_name" value=""
                                            placeholder="Last name">
                                    </p>
                                    <div class="clear">

                                    </div>

                                    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                        <label for="account_email">Email address <span class="required">*</span>
                                        </label>
                                        <input type="email"
                                            class="form-control woocommerce-Input woocommerce-Input--email input-text"
                                            name="account_email" id="account_email" value="admin@test.com">
                                    </p>

                                    <fieldset>
                                        <legend>Password change</legend>

                                        <p
                                            class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                            <label for="password_current">Current password</label>
                                            <input type="password"
                                                class="form-control woocommerce-Input woocommerce-Input--password input-text"
                                                name="password_current" id="password_current"
                                                placeholder="Current password">
                                        </p>
                                        <p
                                            class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                            <label for="password_1">New password</label>
                                            <input type="password"
                                                class="form-control woocommerce-Input woocommerce-Input--password input-text"
                                                name="password_1" id="password_1" placeholder="New password">
                                        </p>
                                        <p
                                            class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                            <label for="password_2">Confirm new password</label>
                                            <input type="password"
                                                class="form-control woocommerce-Input woocommerce-Input--password input-text"
                                                name="password_2" id="password_2" placeholder="Confirm new password">
                                        </p>
                                    </fieldset>
                                    <div class="clear"></div>
                                    <div class="divider-20"></div>
                                    <p>
                                        <button type="submit" class="woocommerce-Button btn btn-maincolor"
                                            name="save_account_details"><span>Save Changes</span></button>
                                    </p>
                                </form>

                            </div>
                        </div>
                    </div>
                    <!-- .entry-content -->
                </article>

            </main>
        </div>
    </div>
</section>
<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>