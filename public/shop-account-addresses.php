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
                <h1 class="bold text-center text-lg-left">Shop - Addresses</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">Shop</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Shop - Addresses
                    </li>
                </ol>
            </div>

        </div>
    </div>
</section>


</div>


<section class="ls s-pt-50 s-pb-35 s-pb-md-60 s-pt-lg-90 s-pb-lg-100 s-pt-xl-140 s-pb-xl-150">
    <div class="divider-3"></div>
    <div class="container">
        <div class="row">
            <main class="col-lg-12">
                <article>
                    <header class="entry-header mb-30">
                        <h1 class="entry-title">Addresses</h1>
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
                            <nav class="woocommerce-MyAccount-navigation hero-bg p-60">
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
                                    <li class="is-active">
                                        <a href="shop-account-addresses.php">Addresses</a>
                                    </li>
                                    <li>
                                        <a href="shop-account-details.php">Account details</a>
                                    </li>
                                    <li>
                                        <a href="shop-account-login.php">Logout</a>
                                    </li>
                                </ul>
                            </nav>

                            <div class="woocommerce-MyAccount-content">
                                <p>The following addresses will be used on the checkout page by default.</p>

                                <div class="u-columns woocommerce-Addresses col2-set addresses">


                                    <div class="u-column1 col-1 woocommerce-Address">
                                        <header class="woocommerce-Address-title title">
                                            <h6>Billing address</h6>
                                            <a href="shop-account-address-edit.php" class="edit">Edit</a>
                                        </header>
                                        <address>
                                            John Doe
                                            <br>
                                            Baker Street, 231
                                            <br>
                                            London
                                            <br>
                                            Great Britain
                                            <br>
                                            12000
                                        </address>
                                    </div>

                                    <div class="u-column2 col-2 woocommerce-Address">
                                        <header class="woocommerce-Address-title title">
                                            <h6>Shipping address</h6>
                                            <a href="shop-account-address-edit.php" class="edit">Edit</a>
                                        </header>
                                        <address>
                                            You have not set up this type of address yet.
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- .entry-content -->
                </article>
            </main>
        </div>
    </div>
    <div class="divider-2 d-lg-none"></div>
</section>
<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>