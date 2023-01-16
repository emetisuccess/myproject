<section class="s-pt-55 s-pb-0 s-pt-md-50 s-pt-lg-140  ls ms
					text-center steps-section" id="steps">
    <div class="container">
        <div class="col-12 text-center">
            <h4>Cars<span class="text-gradient">Section</span></h4>
            <p class="fs-20 color-dark">Available Cars</p>
            <div class="divider-60 d-none d-xl-block"></div>
        </div>
        <div class="row ">
            <?php getVehicles('tbl_vehicle', 'vehicle_cat_id', 7); ?>
        </div>
    </div>
</section>