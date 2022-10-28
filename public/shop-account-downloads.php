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
                <h1 class="bold text-center text-lg-left">Downloads</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">Shop</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Downloads
                    </li>
                </ol>
            </div>

        </div>
    </div>
</section>


</div>


<section class="ls s-pt-50 s-pb-30 s-pb-md-60 s-pt-lg-90 s-pb-lg-100 s-pt-xl-140 s-pb-xl-150">
    <div class="divider-3"></div>
    <div class="container">
        <div class="row">
            <main class="col-lg-12">
                <article>
                    <header class="entry-header mb-30">
                        <h1 class="entry-title">Downloads</h1>
                        <span class="edit-link">
                            <a class="post-edit-link" href="#">Edit<span class="screen-reader-text"> "My account"</span>
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
                                    <li class="is-active">
                                        <a href="shop-account-downloads.php">Downloads</a>
                                    </li>
                                    <li>
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

                                <div class="woocommerce-Message woocommerce-Message--info woocommerce-info">
                                    <a class="woocommerce-Button btn btn-maincolor btn-small"
                                        href="shop-right.php"><span>Go shop</span></a>
                                    No downloads available yet.
                                </div>

                                <table class="woocommerce-MyAccount-downloads shop_table shop_table_responsive">
                                    <thead>
                                        <tr>
                                            <th class="download-product">
                                                <span class="nobr">Product</span>
                                            </th>
                                            <th class="download-remaining">
                                                <span class="nobr">Downloads remaining</span>
                                            </th>
                                            <th class="download-expires">
                                                <span class="nobr">Expires</span>
                                            </th>
                                            <th class="download-file">
                                                <span class="nobr">File</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="download-product" data-title="Product">
                                                <a href="#">
                                                    Downloadable Product #1
                                                </a>
                                            </td>
                                            <td class="download-remaining" data-title="Downloads remaining">
                                                ∞
                                            </td>
                                            <td class="download-expires" data-title="Expires">
                                                Never
                                            </td>
                                            <td class="download-file" data-title="File">
                                                <a href="#" class="woocommerce-MyAccount-downloads-file">
                                                    File
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="download-product" data-title="Product">
                                                <a href="#">
                                                    Product Downloadable #2
                                                </a>
                                            </td>
                                            <td class="download-remaining" data-title="Downloads remaining">
                                                ∞
                                            </td>
                                            <td class="download-expires" data-title="Expires">
                                                Never
                                            </td>
                                            <td class="download-file" data-title="File">
                                                <a href="#" class="woocommerce-MyAccount-downloads-file">
                                                    File
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="download-product" data-title="Product">
                                                <a href="#">
                                                    Downloadable Product #3
                                                </a>
                                            </td>
                                            <td class="download-remaining" data-title="Downloads remaining">
                                                ∞
                                            </td>
                                            <td class="download-expires" data-title="Expires">
                                                Never
                                            </td>
                                            <td class="download-file" data-title="File">
                                                <a href="#" class="woocommerce-MyAccount-downloads-file">
                                                    File
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

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