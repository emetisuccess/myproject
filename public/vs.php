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
                <h1 class="bold text-center text-lg-left">Vehicle Lease/Hire</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Vehicle Lease/Hire
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
            <div class="col-md-12 mb-5">
                <h3 class="text-center mt-5 mb-2">Find nice Vehicles to Hire Near You Instantly</h3>
            </div>
            <?php
            if (isset($_GET['q'])) {
                $vehicle = $_GET['q'];
                $query = mysqli_query($conn, "SELECT * FROM tbl_lease WHERE city LIKE '%$vehicle%' OR state LIKE '%$vehicle%'");
                if (mysqli_num_rows($query) > 0) {
                    while ($data = fetch_assoc($query)) {
            ?>
            <div class="col-xl-3 col-md-6 col-lg-3 col-sm-6 col-6 my-1">
                <div class="card">
                    <a href="vehicledetails.php?vehicle_id=<?php echo $data['lease_id']; ?>">
                        <img class="card-img-top"
                            src="/myproject-development/resources/uploads/<?php echo $data['image1'] ?>"
                            alt="Card image" style="height:200px;">
                    </a>
                    <div class="card-body text-center">
                        <p class="my-0"><?php echo $data['model_year'] . " " . $data['model_name']; ?></h6>
                        <p class="m-0">&#8358;<?php echo $data['charge_per_day']; ?>/Day</p>
                        <p class="m-0"><?php echo $data['contact_number']; ?></p>
                        <p class="card-text m-0"><?php echo $data['city'] ?>,
                            <?php echo $data['state']; ?></p>
                        </a>
                    </div>
                </div>
            </div>
            <?php   }
                } else {
                    echo "The Search Result $vehicle is not Available";
                }
            } ?>
        </div>
    </div>
</section>
<?php vehicleLease(); ?>
<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>