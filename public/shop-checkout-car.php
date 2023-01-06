<?php require_once("../resources/config.php"); ?>

<?php require_once(TEMPLATE_FRONT . DS . "indexheader.php"); ?>

<?php //require(TEMPLATE_FRONT . DS . "loader.php"); 
?>

<?php require(TEMPLATE_FRONT . DS . "modal.php"); ?>

<?php require(TEMPLATE_FRONT . DS . "addressmenu1.php"); ?>

<?php require(TEMPLATE_FRONT . DS . "header1.php"); ?>

<section class="page_title ds s-pt-105 s-pb-50 s-pt-lg-115 s-pb-lg-60">
    <div class="divider-3 d-none d-lg-block"></div>
    <div class="container">
        <div class="row">

            <div class="col-md-12">
                <h1 class="bold text-center text-lg-left">Shopping Cart</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">Shop</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Shopping Cart
                    </li>
                </ol>
            </div>

        </div>
    </div>
</section>
</div>
<?php if (!isset($_SESSION['user_id'])) {
    redirect("signin.php");
} ?>

<section class="ls s-py-60 s-py-lg-100 s-pt-xl-150 s-pb-xl-140">
    <div class="container">
        <div class="row">
            <main class="col-lg-12">
                <?php if (!isset($_SESSION['user_id'])) { ?>
                <div class="woocommerce-info">Returning customer? <a href="#" class="showlogin">Click here to login</a>
                </div>

                <form class="woocomerce-form woocommerce-form-login login" method="post">
                    <p>If you have shopped with us before, please enter your details in the boxes below. If you are a
                        new customer,
                        please proceed to the Billing &amp; Shipping section.</p>

                    <p class="form-row form-row-first">
                        <label for="username">Username or email <span class="required">*</span>
                        </label>
                        <input type="text" class="input-text" name="username" id="username">
                    </p>
                    <p class="form-row form-row-last">
                        <label for="password">Password <span class="required">*</span>
                        </label>
                        <input class="input-text" type="password" name="password" id="password">
                    </p>
                    <div class="clear"></div>
                    <p class="form-row">
                        <input type="submit" class="button" name="login" value="Login">
                        <label>
                            <input name="rememberme" type="checkbox" id="rememberme" value="forever">
                            <span>Remember me</span>
                        </label>
                    </p>
                    <p class="lost_password">
                        <a href="shop-account-password-reset.php">Lost your password?</a>
                    </p>
                    <div class="clear"></div>
                </form>
                <?php } ?>

                <!-- <div class="woocommerce-info">Have a coupon? <a href="#" class="showcoupon">Click here to enter your
                        code</a>
                </div> 

                <form class="checkout_coupon" method="post" style="display: none;">

                    <p class="form-row form-row-first">
                        <input type="text" name="coupon_code" class="input-text" placeholder="Coupon code"
                            id="coupon_code" value="">
                    </p>

                    <p class="form-row form-row-last">
                        <input type="submit" class="button" name="apply_coupon" value="Apply coupon">
                    </p>

                    <div class="clear">

                    </div>
                </form> -->

                <?php
                $query = mysqli_query($conn, "SELECT * FROM users WHERE user_id=" . $_SESSION['user_id'] . "");
                confirm($query);
                $car_id = $_GET['car_ids'];
                while ($data = fetch_assoc($query)) {
                    $firstname = $data['firstname'];
                    $lastname = $data['lastname'];
                    $mobile = $data['mobile'];
                    $email = $data['email'];
                    $street = $data['street'];
                    $city = $data['city'];
                    $state = $data['state'];
                    $country = $data['country'];
                    $zipcode = $data['zip_code'];
                }
                ?>
                <form name="checkout" method="POST" action="" enctype="multipart/form-data" novalidate="novalidate">
                    <div class="col2-set" id="customer_details">
                        <div class="col-1">
                            <div class="woocommerce-billing-fields">
                                <h5>Billing details</h5>
                                <div class="woocommerce-billing-fields__field-wrapper">
                                    <p class="form-row form-row-first validate-required                     woocommerce-invalid woocommerce-invalid-required-field"
                                        id="billing_first_name_field" data-priority="10">
                                        <label for="billing_first_name" class="">First
                                            name <abbr class="required" title="required">*</abbr>
                                        </label>
                                        <input type="text" class="input-text form-control" name="billing_first_name"
                                            id="billing_first_name" placeholder="First name"
                                            value="<?php echo $firstname; ?>" autocomplete="given-name"
                                            autofocus="autofocus">
                                    </p>
                                    <p class="form-row form-row-last validate-required" id="billing_last_name_field"
                                        data-priority="20">
                                        <label for="billing_last_name" class="">Last name <abbr class="required"
                                                title="required">*</abbr>
                                        </label>
                                        <input type="text" class="input-text form-control" name="billing_last_name"
                                            id="billing_last_name" placeholder="Last name"
                                            value="<?php echo $lastname; ?>" autocomplete="family-name">
                                    </p>

                                    <p class="form-row form-row-wide address-field validate-required"
                                        id="billing_address_1_field" data-priority="50">
                                        <label for="billing_address_1" class="">Street
                                            address <abbr class="required" title="required">*</abbr>
                                        </label>
                                        <input type="text" class="input-text form-control" name="billing_address"
                                            id="billing_address_1" placeholder="House number and street name"
                                            value="<?php echo $street; ?>" autocomplete="address-line1">
                                    </p>
                                    <!-- <p class="form-row form-row-wide address-field" id="billing_address_2_field"
                                        data-priority="60">
                                        <input type="text" class="input-text form-control" name="billing_address_2"
                                            id="billing_address_2" placeholder="Apartment, suite, unit etc. (optional)"
                                            value="" autocomplete="address-line2">
                                    </p> -->
                                    <p class="form-row form-row-wide address-field validate-required"
                                        id="billing_city_field" data-priority="70"
                                        data-o_class="form-row form-row-wide address-field validate-required">
                                        <label for="billing_city" class="">Town / City <abbr class="required"
                                                title="required">*</abbr>
                                        </label>
                                        <input type="text" class="input-text form-control" name="billing_city"
                                            id="billing_city" placeholder="Town / City" value="<?php echo $city; ?>"
                                            autocomplete="address-level2">
                                    </p>
                                    <p class="form-row form-row-wide address-field validate-state validate-required"
                                        id="billing_state_field" data-priority="80"
                                        data-o_class="form-row form-row-wide address-field validate-required validate-state">
                                        <label for="billing_state" class="">State <abbr class="required"
                                                title="required">*</abbr>
                                        </label>
                                        <input type="text" class="input-text form-control" value="<?php echo $state; ?>"
                                            placeholder="State " name="billing_state" id="billing_state"
                                            autocomplete="address-level1">
                                    </p>
                                    <p class="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                                        id="billing_country_field" data-priority="40">
                                        <label for="billing_country" class="">Country
                                            <abbr class="required" title="required">*</abbr>
                                        </label>
                                        <input type="text" class="input-text form-control" name="billing_country"
                                            id="billing_country" placeholder="Country" value="<?php echo $country; ?>"
                                            autocomplete="address-country">
                                    </p>
                                    <p class="form-row form-row-wide address-field validate-postcode validate-required"
                                        id="billing_postcode_field" data-priority="90"
                                        data-o_class="form-row form-row-wide address-field validate-required validate-postcode">
                                        <label for="billing_postcode" class="">Postcode / ZIP <abbr class="required"
                                                title="required">*</abbr>
                                        </label>
                                        <input type="text" class="input-text form-control" name="billing_postcode"
                                            id="billing_postcode" placeholder="Postcode / ZIP"
                                            value="<?php echo $zipcode; ?>" autocomplete="postal-code">
                                    </p>
                                    <p class="form-row form-row-first validate-required validate-phone"
                                        id="billing_phone_field" data-priority="100">
                                        <label for="billing_phone" class="">Phone <abbr class="required"
                                                title="required">*</abbr>
                                        </label>
                                        <input type="tel" class="input-text form-control" name="billing_phone"
                                            id="billing_phone" placeholder="billing phone"
                                            value="<?php echo $mobile; ?>" autocomplete="tel">
                                    </p>
                                    <p class="form-row form-row-first validate-required validate-email"
                                        id="billing_email_field" data-priority="100">
                                        <label for="billing_email" class="">Email<abbr class="required"
                                                title="required">*</abbr>
                                        </label>
                                        <input type="email" class="input-text form-control" name="billing_email"
                                            id="billing_email" placeholder="admin@gmail.com"
                                            value="<?php echo $email; ?>" autocomplete="email" readonly>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <h5 id="order_review_heading">Your order</h5>
                    <div id="order_review" class="woocommerce-checkout-review-order">
                        <table class="shop_table woocommerce-checkout-review-order-table">
                            <thead>
                                <tr>
                                    <th class="product-name">Vehicle Type</th>
                                    <th class="product-total">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php getCheckoutCar(); ?>
                            </tbody>
                            <tfoot>
                                <tr class="cart-subtotal">
                                    <th>Subtotal</th>
                                    <td>
                                        <span class="woocommerce-Price-amount amount">
                                            <span class="woocommerce-Price-currencySymbol"></span>
                                            &#8358;<?php echo $_SESSION['total'] ?? 0; ?>
                                        </span>
                                    </td>
                                </tr>

                                <tr class="order-total">
                                    <th>Total</th>
                                    <td>
                                        <strong>
                                            <span class="woocommerce-Price-amount amount">
                                                <span class="woocommerce-Price-currencySymbol"></span>
                                                &#8358;<?php echo $_SESSION['total'] ?? 0; ?>
                                            </span>
                                        </strong>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>

                        <div id="payment" class="woocommerce-checkout-payment">
                            <ul class="wc_payment_methods payment_methods methods">
                                <li class="wc_payment_method payment_method_cheque">
                                    <input id="payment_method_cheque" type="radio" class="input-radio"
                                        name="payment_method" value="0" checked="checked" data-order_button_text="">

                                    <label for="payment_method_cheque">
                                        Pick in Car Stand </label>
                                </li>

                                <li class="wc_payment_method payment_method_cod">
                                    <input id="payment_method_cod" type="radio" class="input-radio"
                                        name="payment_method" value="10000" data-order_button_text="">

                                    <label for="payment_method_cod">
                                        Make payment online (+ &#8358;10000) </label>
                                </li>
                            </ul>
                            <div class="form-row place-order">
                                <noscript>
                                    Since your browser does not support JavaScript, or it is disabled, please ensure you
                                    click the
                                    &lt;em&gt;Update Totals&lt;/em&gt; button before placing your order. You may be
                                    charged more
                                    than the amount stated above if you fail to do so. &lt;br/&gt;&lt;input
                                    type="submit"
                                    class="button alt" name="woocommerce_checkout_update_totals" value="Update totals"
                                    /&gt;
                                </noscript>

                                <input type="hidden" name="amount_paid" value="<?php echo $_SESSION['total']; ?>">
                                <input type="hidden" name="pro_id" value="<?php echo $car_id; ?>">
                                <input type="hidden" name="user_id" value="<?php echo $_SESSION['user_id']; ?>">
                                <button type="submit" class="btn btn-outline-maincolor small-button"
                                    name="check_out_place_car_order">Place order</button>

                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    </div>
    <div class="divider-10 d-none d-xl-block"></div>
</section>

<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>