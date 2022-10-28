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
                <h1 class="bold text-center text-lg-left">Shop Orders</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">Shop</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Shop Orders
                    </li>
                </ol>
            </div>
        </div>
    </div>
</section>
</div>

<section class="ls s-py-50 s-pt-lg-90 s-pb-lg-100 s-pt-xl-140 s-pb-xl-150">
    <div class="divider-3"></div>
    <div class="container">
        <div class="row">
            <main class="col-lg-12">
                <article id="post-1708" class="post-1708 page type-page status-publish hentry">
                    <header class="entry-header mb-30">
                        <h1 class="entry-title">Orders</h1> <span class="edit-link"><a class="post-edit-link"
                                href="#">Edit<span class="screen-reader-text"> "My account"</span></a></span>
                    </header><!-- .entry-header -->
                    <div class="entry-content">
                        <div class="woocommerce">
                            <nav class="woocommerce-MyAccount-navigation hero-bg p-60">
                                <ul>
                                    <li>
                                        <a href="shop-account-dashboard.php">Dashboard</a>
                                    </li>
                                    <li class="is-active">
                                        <a href="shop-account-orders.php">Orders</a>
                                    </li>
                                    <li>
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

                                <div
                                    class="woocommerce-message woocommerce-message--info woocommerce-Message woocommerce-Message--info woocommerce-info">
                                    <a class="woocommerce-Button btn btn-maincolor" href="shop-right.php">Go shop</a>
                                    No order has been made yet.
                                </div>

                                <table
                                    class="woocommerce-orders-table woocommerce-MyAccount-orders shop_table shop_table_responsive my_account_orders account-orders-table">
                                    <thead>
                                        <tr>
                                            <th
                                                class="woocommerce-orders-table__header woocommerce-orders-table__header-order-number">
                                                <span class="nobr">Order</span>
                                            </th>
                                            <th
                                                class="woocommerce-orders-table__header woocommerce-orders-table__header-order-date">
                                                <span class="nobr">Date</span>
                                            </th>
                                            <th
                                                class="woocommerce-orders-table__header woocommerce-orders-table__header-order-status">
                                                <span class="nobr">Status</span>
                                            </th>
                                            <th
                                                class="woocommerce-orders-table__header woocommerce-orders-table__header-order-total">
                                                <span class="nobr">Total</span>
                                            </th>
                                            <th
                                                class="woocommerce-orders-table__header woocommerce-orders-table__header-order-actions text-center">
                                                <span class="nobr">Actions</span>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr
                                            class="woocommerce-orders-table__row woocommerce-orders-table__row--status-processing order">
                                            <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number"
                                                data-title="Order">
                                                <a href="shop-account-order-single.php">#1719</a>

                                            </td>
                                            <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-date"
                                                data-title="Date">
                                                <time datetime="2018-03-06T08:55:39+00:00">March 6, 2018</time>

                                            </td>
                                            <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-status"
                                                data-title="Status">
                                                Processing
                                            </td>
                                            <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-total"
                                                data-title="Total">
                                                <span class="woocommerce-Price-amount amount"><span
                                                        class="woocommerce-Price-currencySymbol">$</span>45.00</span>
                                                for 4 items
                                            </td>
                                            <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-actions with-btn"
                                                data-title="Actions">
                                                <a href="shop-account-order-single.php"
                                                    class="woocommerce-button btn btn-maincolor view">View</a>
                                            </td>
                                        </tr>

                                        <tr
                                            class="woocommerce-orders-table__row woocommerce-orders-table__row--status-on-hold order">
                                            <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number"
                                                data-title="Order">
                                                <a href="shop-account-order-single.php">#106</a>

                                            </td>
                                            <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-date"
                                                data-title="Date">
                                                <time datetime="2018-03-22T13:34:43+00:00">March 22, 2018</time>

                                            </td>
                                            <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-status"
                                                data-title="Status">
                                                On hold
                                            </td>
                                            <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-total"
                                                data-title="Total">
                                                <span class="woocommerce-Price-amount amount"><span
                                                        class="woocommerce-Price-currencySymbol">$</span>100.00</span>
                                                for 4 items
                                            </td>
                                            <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-actions with-btn"
                                                data-title="Actions">
                                                <a href="shop-account-order-single.php"
                                                    class="woocommerce-button btn btn-maincolor view">View</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div><!-- .entry-content -->
                </article>
            </main>
        </div>
    </div>
</section>
<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>