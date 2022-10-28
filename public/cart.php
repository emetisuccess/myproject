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


<section class="ls s-py-60 s-py-lg-100 s-py-xl-150">
    <div class="container">
        <div class="row">
            <main class="col-lg-12">
                <!-- <div class="woocommerce-message">
                    "Premium quality" removed. <a href="#">Undo?</a>
                </div> -->
                <form action="" method="post">
                    <table class="shop_table shop_table_responsive cart">
                        <thead>
                            <tr>
                                <th class="product-remove">&nbsp;</th>
                                <th class="product-thumbnail">&nbsp;</th>
                                <th class="product-name">Product</th>
                                <th class="product-price">Price</th>
                                <th class="product-quantity product">Quantity</th>
                                <th class="product-subtotal">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php getCartItems(); ?>
                            <tr>
                                <td colspan="6" class="actions">
                                    <button type="submit" class="btn btn-small btn-outline-maincolor"
                                        name="update_cart">Update cart</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>


                <div class="cart-collaterals">
                    <div class="cross-sells">
                        <h3 class="special-heading text-center">Best<span class="text-gradient">Sellers</span></h3>
                        <p class="fs-20 color-dark">The Car Repair Appointment</p>
                        <div class="divider-55 d-none d-lg-block"></div>

                        <ul class="products">
                            <li class="product vertical-item padding-small content-padding">
                                <div class="product-inner bordered">
                                    <a class="link-scale" href="shop-product.php">
                                        <img src="images/shop/01.jpg" alt="">
                                    </a>
                                    <div class="item-content">
                                        <h2>Motor car candles</h2>
                                        <div class="star-rating">
                                            <span style="width:80%">Rated <strong class="rating">4.00</strong> out of
                                                5</span>
                                        </div>
                                        <span class="price">
                                            <del>
                                                <span>
                                                    <span class="fw-500">$ </span>70.00
                                                </span>
                                            </del>
                                            <span>$ </span>55.00
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li class="product vertical-item padding-small content-padding">
                                <div class="product-inner bordered">
                                    <a class="link-scale" href="shop-product.php">
                                        <img src="images/shop/05.jpg" alt="">
                                    </a>
                                    <div class="item-content">
                                        <h2>DOZYANT 12 Feet Universal</h2>
                                        <div class="star-rating">
                                            <span style="width:80%">Rated <strong class="rating">4.00</strong> out of
                                                5</span>
                                        </div>
                                        <span class="price">
                                            <del>
                                                <span>
                                                    <span class="fw-500">$ </span>70.00
                                                </span>
                                            </del>
                                            <span>$ </span>55.00
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li class="product vertical-item padding-small content-padding">
                                <div class="product-inner bordered">
                                    <a class="link-scale" href="shop-product.php">
                                        <img src="images/shop/08.jpg" alt="">
                                    </a>
                                    <div class="item-content">
                                        <h2>WarmGuard WG55F Insulated</h2>
                                        <div class="star-rating">
                                            <span style="width:80%">Rated <strong class="rating">4.00</strong> out of
                                                5</span>
                                        </div>
                                        <span class="price">
                                            <del>
                                                <span>
                                                    <span class="fw-500">$ </span>70.00
                                                </span>
                                            </del>
                                            <span>$ </span>55.00
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li class="product vertical-item padding-small content-padding">
                                <div class="product-inner bordered">
                                    <a class="link-scale" href="shop-product.php">
                                        <img src="images/shop/02.jpg" alt="">
                                    </a>
                                    <div class="item-content">
                                        <h2>MTcisa 12V DC Portable Air</h2>
                                        <div class="star-rating">
                                            <span style="width:80%">Rated <strong class="rating">4.00</strong> out of
                                                5</span>
                                        </div>
                                        <span class="price">
                                            <del>
                                                <span>
                                                    <span class="fw-500">$ </span>70.00
                                                </span>
                                            </del>
                                            <span>$ </span>55.00
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li class="product vertical-item padding-small content-padding">
                                <div class="product-inner bordered">
                                    <a class="link-scale" href="shop-product.php">
                                        <img src="images/shop/03.jpg" alt="">
                                    </a>
                                    <div class="item-content">
                                        <h2>Tire inflator, 20V Cordless Air </h2>
                                        <div class="star-rating">
                                            <span style="width:80%">Rated <strong class="rating">4.00</strong> out of
                                                5</span>
                                        </div>
                                        <span class="price">
                                            <del>
                                                <span>
                                                    <span class="fw-500">$ </span>70.00
                                                </span>
                                            </del>
                                            <span>$ </span>55.00
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li class="product vertical-item padding-small content-padding">
                                <div class="product-inner bordered">
                                    <a class="link-scale" href="shop-product.php">
                                        <img src="images/shop/04.jpg" alt="">
                                    </a>
                                    <div class="item-content">
                                        <h2>hisWorx for TWC-01 Vacuum</h2>
                                        <div class="star-rating">
                                            <span style="width:80%">Rated <strong class="rating">4.00</strong> out of
                                                5</span>
                                        </div>
                                        <span class="price">
                                            <del>
                                                <span>
                                                    <span class="fw-500">$ </span>70.00
                                                </span>
                                            </del>
                                            <span>$ </span>55.00
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li class="product vertical-item padding-small content-padding">
                                <div class="product-inner bordered">
                                    <a class="link-scale" href="shop-product.php">
                                        <img src="images/shop/06.jpg" alt="">
                                    </a>
                                    <div class="item-content">
                                        <h2>Beam Electronics Universal</h2>
                                        <div class="star-rating">
                                            <span style="width:80%">Rated <strong class="rating">4.00</strong> out of
                                                5</span>
                                        </div>
                                        <span class="price">
                                            <del>
                                                <span>
                                                    <span class="fw-500">$ </span>70.00
                                                </span>
                                            </del>
                                            <span>$ </span>55.00
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li class="product vertical-item padding-small content-padding">
                                <div class="product-inner bordered">
                                    <a class="link-scale" href="shop-product.php">
                                        <img src="images/shop/09.jpg" alt="">
                                    </a>
                                    <div class="item-content">
                                        <h2>12V Tire Pump Unique</h2>
                                        <div class="star-rating">
                                            <span style="width:80%">Rated <strong class="rating">4.00</strong> out of
                                                5</span>
                                        </div>
                                        <span class="price">
                                            <del>
                                                <span>
                                                    <span class="fw-500">$ </span>70.00
                                                </span>
                                            </del>
                                            <span>$ </span>55.00
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li class="product vertical-item padding-small content-padding">
                                <div class="product-inner bordered">
                                    <a class="link-scale" href="shop-product.php">
                                        <img src="images/shop/07.jpg" alt="">
                                    </a>
                                    <div class="item-content">
                                        <h2>Motor car candles </h2>
                                        <div class="star-rating">
                                            <span style="width:80%">Rated <strong class="rating">4.00</strong> out of
                                                5</span>
                                        </div>
                                        <span class="price">
                                            <del>
                                                <span>
                                                    <span class="fw-500">$ </span>70.00
                                                </span>
                                            </del>
                                            <span>$ </span>55.00
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="cart_totals ">
                        <h5>Cart totals</h5>
                        <table class="shop_table shop_table_responsive">
                            <tbody>
                                <tr class="cart-subtotal">
                                    <th>Subtotal</th>
                                    <td data-title="Subtotal">
                                        <span class="amount">
                                            <span>&#8358;</span><?php echo $_SESSION['total']; ?>
                                        </span>
                                    </td>
                                </tr>
                                <tr class="order-total">
                                    <th>Total</th>
                                    <td data-title="Total">
                                        <strong>
                                            <span class="amount">
                                                <span>&#8358;</span><?php echo $_SESSION['total']; ?>
                                            </span>
                                        </strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="wc-proceed-to-checkout">
                            <a href="shop-checkout.php" class="checkout-button alt wc-forward btn btn-maincolor">Proceed
                                to checkout</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</section>
<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>