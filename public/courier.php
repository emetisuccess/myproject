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
                <h1 class="bold text-center text-lg-left">Courier/Logistics</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <!-- <li class="breadcrumb-item">
										<a href="#">Pages</a>
									</li> -->
                    <li class="breadcrumb-item active">
                    Courier/Logistics
                    </li>
                </ol>
            </div>

        </div>
    </div>
</section>


</div>


<section>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mb-1">
              <h3 class="text-center mt-5 mb-2">Track shipment / Find and ship a product</h3>
              <p class=" text-center mt-3 p-2">Quality Drivers. Great Prices. Tracking. Stress-Free Deliveries.</p>
            </div>
            <div class="mt-3 py-50 px-50 cs cs2 mx-auto" style="width:100%; background-color: #ff4e3c;">
								<div class="widget widget_search">
									<h5 class="widget-title">Enter Your Tracking Number</h5>
									<form role="search" method="get" class="search-form" action="http://webdesign-finder.com/">
										<label for="search-form-widget">
											<span class="screen-reader-text">Search for:</span>
										</label>
										<input type="search" id="search-form-widget" class="search-field" placeholder=" Input Your Tracking Number" style="padding-left: 5px;" value="" name="search">
										<button type="submit" class="search-submit">
											<span class="screen-reader-text">Track your cargo</span>
										</button>
									</form>
						</div>
        </div>
        
    </div>
</section>


<section class="s-pt-60 s-pb-15 s-py-lg-90 ms w-100 mx-auto mt-5" style="background-color: #ff4e3c; border-color: #ff4e3c; color: white;">
    <div class="container">
      <h3 class="text-center mb-5">Explore, Order, Track</h3>
        <div class="row justify-content-center c-mb-40 c-mb-lg-0">
            <div class="col-md-6 col-lg-4">
                <div class="d-flex flex-column contact-icon">
                    <div class="icon-styled color-main fs-40">
                        <i class="ico-map"></i>
                    </div>

                    <div class=" text-center mt-3 p-2">
                        <h6>
                        On-Demand
                        </h6>
                        <p>
                        Round the clock pickup & drop-off as per your demand
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="d-flex flex-column  contact-icon">
                    <div class="icon-styled color-main fs-40">
                        <i class="ico-call"></i>
                    </div>

                    <div class=" text-center mt-3 p-2">
                        <h6>
                        Live Tracking
                        </h6>
                        <p>
                        Track your orders and deliveries in real-time with geolocation
                      </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="d-flex flex-column  contact-icon">
                    <div class="icon-styled color-main fs-40">
                        <i class="ico-email"></i>
                    </div>

                    <div class=" text-center mt-3 p-2">
                        <h6>
                        Multivehicle
                        </h6>
                        <p>Different sized vehicles based on your order size and delivery location for excellent courier service.
                      </p>
                    </div>
                </div>
            </div>

    </div>
</section>


<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>