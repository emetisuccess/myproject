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
            <main class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                <?php
                if (isset($_SESSION['user_id'])) {
                    $query = query("SELECT p.id, p.product_name, p.product_image, p.product_price, 
                                 c.qty FROM tbl_products AS p INNER JOIN cart AS c ON p.id=c.p_id AND c.user_id=" . $_SESSION['user_id'] . "");
                } else {
                    $query = query("SELECT p.id, p.product_name, p.product_image, p.product_price, 
                                c.qty FROM tbl_products AS p INNER JOIN cart AS c ON p.id=c.p_id AND c.user_id='-1'");
                }

                $total = 0;
                $item_quantity = 0;

                $count = mysqli_num_rows($query);
                if ($count > 0) {
                ?>
                <form action="" method="POST">
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
                            <?php
                                while ($row = fetch_assoc($query)) {

                                    $product_id = $row['id'];
                                    $product_name = $row['product_name'];
                                    $product_image = $row['product_image'];
                                    $product_price = $row['product_price'];
                                    $cart_qty = $row['qty'];

                                    $subtotal = $cart_qty * $product_price;
                                    $total  = $total + $subtotal;
                                    $item_quantity += $row['qty'];
                                ?>
                            <tr class="cart_item">
                                <td class="product-remove">
                                    <a href="/myproject/public/cart.php?del=<?php echo $product_id; ?>" class="remove"
                                        aria-label="Remove this item" data-product_id="<?php echo $product_id; ?>">×</a>
                                </td>
                                <td class="product-thumbnail">
                                    <a href="shop-product.php?pro_id=<?php echo $product_id; ?>">
                                        <img width="180" height="180"
                                            src="/myproject/resources/uploads/<?php echo $product_image; ?>"
                                            class="img-fluid" alt="">
                                    </a>
                                </td>
                                <td class="product-name" data-title="<?php echo $product_name; ?>">
                                    <a
                                        href="shop-product.php?pro_id=<?php echo $product_id; ?>"><?php echo $product_name; ?></a>
                                </td>
                                <td class="product-price" data-title="<?php echo $product_price; ?>">
                                    <span class="amount">
                                        <span>&#8358;</span><?php echo  $product_price; ?>
                                    </span>
                                </td>
                                <td class="product-quantity product" data-title="Quantity">
                                    <div class="quantity">
                                        <input type='hidden' name="product_id[]" value="<?php echo $product_id; ?>">

                                        <input type="number" class="py-0" step="1" min="1" max="10" name="quantity[]"
                                            value="<?php echo $cart_qty; ?>" title="Qty" size="5">

                                    </div>
                                </td>
                                <td class="product-subtotal" data-title="Total">
                                    <span class="amount">
                                        <span>&#8358;</span><?php echo $subtotal; ?>
                                    </span>
                                </td>
                            </tr>
                            <?php }
                            } else {
                                echo "<div class='text-center mt-0'>
                                    <img src='images/empty-cart.png' alt='image product' width='400px' height='500px'>
                                    <h5 class='mt-0 mb-5'>Your Cart is Empty!!</h5>
                                    </div>";
                            }
                            ?>
                            <?php if ($count > 0) { ?>
                            <tr>
                                <td colspan="6" class="actions">
                                    <button type="submit" class="btn btn-small btn-outline-maincolor"
                                        name="update_cart">Update
                                        cart</button>
                                </td>
                            </tr>
                            <?php } ?>
                        </tbody>
                    </table>
                </form>

                <div class="cart-collaterals">
                    <?php if ($count > 0) { ?>
                    <div class="cart_totals ">
                        <h5>Cart totals</h5>
                        <table class="shop_table shop_table_responsive">
                            <tbody>
                                <tr class="cart-subtotal">
                                    <th>Subtotal</th>
                                    <td data-title="Subtotal">
                                        <span class="amount">
                                            <span>&#8358;</span><?php echo isset($total) ? $total : 0.00; ?>
                                        </span>
                                    </td>
                                </tr>
                                <tr class="order-total">
                                    <th>Total</th>
                                    <td data-title="Total">
                                        <strong>
                                            <span class="amount">
                                                <span>&#8358;</span><?php echo isset($total) ? $total : 0.00; ?>
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
                    <?php } ?>

                    <div class="cross-sells mt-5">
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
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    </div>
</section>
<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>