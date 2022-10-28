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
                <h1 class="bold text-center text-lg-left">Shop</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Shop
                    </li>
                </ol>
            </div>

        </div>
    </div>
</section>
</div>


<section class="ls s-pt-60 s-pb-70 s-py-lg-100 s-py-xl-150">
    <div class="container">
        <div class="row">
            <main class="col-lg-8 col-xl-9 order-lg-2">
                <div class="columns-3">
                    <form class="form-inline shop-form bordered mb-30">
                        <p class="woocommerce-result-count fs-14 fw-400">
                            <span class="color-dark fw-500 product-found fs-16">1 505
                            </span>Products
                            Found
                        </p>
                        <div class="form-group sort-form">
                            <label class="fw-500" for="orderby">Sort By</label>
                            <select class="form-control orderby" name="orderby" id="orderby">
                                <option value="menu_order" selected="">Name</option>
                                <option value="popularity">Popularity</option>
                                <option value="rating">Rating</option>
                                <option value="date">Newness</option>
                                <option value="price">Low To High</option>
                                <option value="price-desc">High To Low</option>
                            </select>
                        </div>
                        <div class="form-group view-product">
                            <p class="fw-500">View</p>
                            <a href="#" id="toggle_shop_view" class=""></a>
                        </div>
                    </form>
                    <ul id="products" class="products list-unstyled grid-view">
                        <li class="product vertical-item padding-small content-padding">
                            <div class="product-inner bordered">
                                <a class="link-scale" href="shop-product-left.php">
                                    <img src="images/shop/01.jpg" alt="">
                                </a>
                                <div class="item-content">
                                    <h2>Motor car candles</h2>
                                    <div class="star-rating">
                                        <span style="width:80%">Rated <strong class="rating">4.00</strong> out
                                            of 5</span>
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
                                <a class="link-scale" href="shop-product-left.php">
                                    <img src="images/shop/05.jpg" alt="">
                                </a>
                                <div class="item-content">
                                    <h2>DOZYANT 12 Feet Universal</h2>
                                    <div class="star-rating">
                                        <span style="width:80%">Rated <strong class="rating">4.00</strong> out
                                            of 5</span>
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
                                <a class="link-scale" href="shop-product-left.php">
                                    <img src="images/shop/08.jpg" alt="">
                                </a>
                                <div class="item-content">
                                    <h2>WarmGuard WG55F Insulated</h2>
                                    <div class="star-rating">
                                        <span style="width:80%">Rated <strong class="rating">4.00</strong> out
                                            of 5</span>
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
                                <a class="link-scale" href="shop-product-left.php">
                                    <img src="images/shop/02.jpg" alt="">
                                </a>
                                <div class="item-content">
                                    <h2>MTcisa 12V DC Portable Air</h2>
                                    <div class="star-rating">
                                        <span style="width:80%">Rated <strong class="rating">4.00</strong> out
                                            of 5</span>
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
                                <a class="link-scale" href="shop-product-left.php">
                                    <img src="images/shop/03.jpg" alt="">
                                </a>
                                <div class="item-content">
                                    <h2>Tire inflator, 20V Cordless Air </h2>
                                    <div class="star-rating">
                                        <span style="width:80%">Rated <strong class="rating">4.00</strong> out
                                            of 5</span>
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
                                <a class="link-scale" href="shop-product-left.php">
                                    <img src="images/shop/04.jpg" alt="">
                                </a>
                                <div class="item-content">
                                    <h2>hisWorx for TWC-01 Vacuum</h2>
                                    <div class="star-rating">
                                        <span style="width:80%">Rated <strong class="rating">4.00</strong> out
                                            of 5</span>
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
                                <a class="link-scale" href="shop-product-left.php">
                                    <img src="images/shop/06.jpg" alt="">
                                </a>
                                <div class="item-content">
                                    <h2>Beam Electronics Universal</h2>
                                    <div class="star-rating">
                                        <span style="width:80%">Rated <strong class="rating">4.00</strong> out
                                            of 5</span>
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
                                <a class="link-scale" href="shop-product-left.php">
                                    <img src="images/shop/09.jpg" alt="">
                                </a>
                                <div class="item-content">
                                    <h2>12V Tire Pump Unique</h2>
                                    <div class="star-rating">
                                        <span style="width:80%">Rated <strong class="rating">4.00</strong> out
                                            of 5</span>
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
                                <a class="link-scale" href="shop-product-left.php">
                                    <img src="images/shop/07.jpg" alt="">
                                </a>
                                <div class="item-content">
                                    <h2>Motor car candles </h2>
                                    <div class="star-rating">
                                        <span style="width:80%">Rated <strong class="rating">4.00</strong> out
                                            of 5</span>
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
                <!-- columns 3 -->

                <nav class="woocommerce-pagination">
                    <ul class="page-numbers">
                        <li>
                            <a class="next page-numbers" href="shop-left.php">
                                <i class="fa fa-angle-left"></i>
                            </a>
                        </li>
                        <li>
                            <span class="page-numbers current">1</span>
                        </li>
                        <li>
                            <a class="page-numbers" href="shop-left.php">2</a>
                        </li>
                        <li>
                            <a class="page-numbers dots" href="shop-left.php">...</a>
                        </li>
                        <li>
                            <a class="page-numbers" href="shop-left.php">4</a>
                        </li>
                        <li>
                            <a class="next page-numbers" href="shop-left.php">
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>


            </main>
            <aside class="col-lg-4 col-xl-3 order-lg-1">
                <div class="widget woocommerce widget_product_categories">
                    <h5 class="widget-title">Categories</h5>
                    <ul class="product-categories">
                        <li class="cat-item cat-parent">
                            <a href="shop.php">Car Towing</a>
                        </li>
                        <li class="cat-item">
                            <a href="shop.php">Hail Damage</a>
                        </li>
                        <li class="cat-item">
                            <a href="shop.php">Flood Insurance Coverage</a>
                        </li>
                        <li class="cat-item cat-parent">
                            <a href="shop.php">Accident Insurance</a>
                        </li>
                        <li class="cat-item">
                            <a href="shop.php">Fire Insurance</a>
                        </li>
                        <li class="cat-item cat-parent">
                            <a href="shop.php">Motorcycle Towing</a>
                        </li>
                        <li class="cat-item">
                            <a href="shop.php">Break repair</a>
                        </li>
                        <li class="cat-item cat-parent">
                            <a href="shop.php">Ingnition test</a>
                        </li>
                    </ul>
                </div>

                <!-- <div class="widget woocommerce widget_product_categories">
                    <h5 class="widget-title">Categories Dropdown</h5>
                    <select name="product_cat" class="dropdown_product_cat">
                        <option value="" selected="selected">Select a category</option>
                        <option class="level-0" value="cartowing">Car Towing</option>
                        <option class="level-1" value="hail-damage">Hail Damage</option>
                        <option class="level-1" value="flood-insurance-coverage">Flood Insurance
                            Coverage</option>
                        <option class="level-0" value="accident-insurance">Accident Insurance
                        </option>
                        <option class="level-1" value="fire-insurance">Fire Insurance</option>
                        <option class="level-1" value="motorcycle-towing">Motorcycle Towing</option>
                        <option class="level-0" value="break-repair">Break repair</option>
                        <option class="level-1" value="ingnition-test">Ingnition test</option>
                    </select>
                </div> -->

                <div class="widget woocommerce widget_recently_viewed_products">
                    <h5 class="widget-title">Viewed Products</h5>
                    <ul class="product_list_widget">

                        <li>
                            <a href="shop-product-right.php">
                                <img src="images/shop/05.jpg" alt="">
                                <span class="product-title">Propane Regulator</span>
                            </a>
                            <div class="d-flex justify-content-between rating-product">
                                <div class="star-rating">
                                    <span style="width:80%">Rated
                                        <strong class="rating">5.00 </strong>
                                        out of 5
                                    </span>
                                </div>
                                <a href="#" class="remove" aria-label="Remove this item" data-product_id="73"
                                    data-product_sku=""><i class="fs-14 ico-trash color-main"></i></a>
                            </div>
                            <span class="woocommerce-Price-amount amount">
                                <span class="woocommerce-Price-currencySymbol">$</span>55.00
                            </span>
                        </li>

                        <li>
                            <a href="shop-product-right.php">
                                <img src="images/shop/08.jpg" alt="">
                                <span class="product-title">Motor car candles</span>
                            </a>
                            <div class="d-flex justify-content-between rating-product">
                                <div class="star-rating">
                                    <span style="width:80%">Rated
                                        <strong class="rating">5.00 </strong>
                                        out of 5
                                    </span>
                                </div>
                                <a href="#" class="remove" aria-label="Remove this item" data-product_id="73"
                                    data-product_sku=""><i class="fs-14 ico-trash color-main"></i></a>
                            </div>
                            <del>
                                <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">$</span>
                                    70.00
                                </span>
                            </del>
                            <span class="woocommerce-Price-amount amount">
                                <span class="woocommerce-Price-currencySymbol">$</span>
                                55.00
                            </span>
                        </li>

                        <li>
                            <a href="shop-product-right.php">
                                <img src="images/shop/01.jpg" alt="">
                                <span class="product-title">Oil filter car</span>
                            </a>
                            <div class="d-flex justify-content-between rating-product">
                                <div class="star-rating">
                                    <span style="width:80%">Rated
                                        <strong class="rating">5.00 </strong>
                                        out of 5
                                    </span>
                                </div>
                                <a href="#" class="remove" aria-label="Remove this item" data-product_id="73"
                                    data-product_sku=""><i class="fs-14 ico-trash color-main"></i></a>
                            </div>
                            <del>
                                <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">$</span>
                                    70.00
                                </span>
                            </del>
                            <span class="woocommerce-Price-amount amount">
                                <span class="woocommerce-Price-currencySymbol">$</span>
                                55.00
                            </span>
                        </li>
                    </ul>
                </div>


                <div class="widget woocommerce widget_price_filter">
                    <h5 class="widget-title">Price Filter</h5>
                    <form method="get" action="">
                        <div class="price_slider_wrapper">
                            <div
                                class="price_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                <span class="from">$20.00</span>
                                <div class="ui-slider-range ui-widget-header ui-corner-all"
                                    style="left: 14%; width: 65%;">
                                </div>
                                <span class="to">$700.00</span>
                                <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"
                                    style="left: 12%;">
                                </span>
                                <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"
                                    style="left: 80%;">
                                </span>
                            </div>
                            <div class="price_slider_amount">
                                <input type="text" id="min_price" name="min_price" value="" data-min="20"
                                    placeholder="Min price" style="display: none;">
                                <input type="text" id="max_price" name="max_price" value="" data-max="30"
                                    placeholder="Max price" style="display: none;">
                                <div class="clear"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </aside>
        </div>
    </div>
</section>
<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>