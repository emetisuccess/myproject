<section class="up-sells upsells products">
    <div class="cross-sells mt-5">
        <h3 class="special-heading text-center">Best<span class="text-gradient">Sellers</span></h3>
        <p class="fs-20 color-dark">The Car Repair Appointment</p>
        <div class="divider-55 d-none d-lg-block"></div>

        <ul class="products">
            <?php
            $query =  mysqli_query($conn, "SELECT * FROM tbl_products WHERE trending_product='1'");
            while ($items = fetch_assoc($query)) {
            ?>
            <li class="product vertical-item padding-small content-padding">
                <div class="product-inner bordered">
                    <a class="link-scale" href="shop-product.php?pro_id=<?php echo $items['id'] ?? 1; ?>">
                        <img src="/myproject/resources/uploads/<?php echo $items['product_image'] ?? ""; ?>"
                            alt="Product Image">
                    </a>
                    <div class="my-3">
                        <h6 class="my-0"><?php echo $items['product_name'] ?? ""; ?></h6>
                        <span class="text-warning my-0">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </span>
                        <div>
                            <span>$</span><?php echo $items['product_price'] ?? ""; ?>
                        </div>
                    </div>
                </div>
            </li>
            <?php } ?>
        </ul>
    </div>
</section>