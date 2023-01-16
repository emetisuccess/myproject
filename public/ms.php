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
                <h1 class="bold text-center text-lg-left">Vehicle Maintenace</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item active">
                        Vehicle Maintenace
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
                <h5 class="text-center mt-5 mb-2">Find A Mechanic Near You Instantly</h5>
            </div>
            <?php
            if (isset($_GET['q'])) {
                $location = $_GET['q'];
                $query = mysqli_query($conn, "SELECT * FROM tbl_mechanic WHERE mech_city LIKE '%$location%' OR mech_state LIKE '%$location%'");
                if (mysqli_num_rows($query) > 0) {
                    while ($data = fetch_assoc($query)) {
            ?>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 my-2">
                <div class="card">
                    <a href="mechanicdetails.php?mechanic_id=<?php echo $data['mech_id']; ?>">
                        <img class="card-img-top"
                            src="/myproject-development/resources/uploads/<?php echo $data['mech_image1']; ?>"
                            alt="Card image" style='height:200px'>
                    </a>
                    <div class="card-body text-center">
                        <p class="m-0"><?php echo $data['mech_fullname']; ?></p>
                        <p class="m-0"><?php echo $data['mech_contact']; ?></p>
                        <p class="m-0">
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star-o"></i>
                        </p>
                        <p class="card-text m-0"><?php echo $data['mech_city'] ?>,
                            <?php echo $data['mech_state']; ?></p>
                    </div>
                </div>
            </div>
            <?php }
                } else {
                    echo "The Search Result $location is not Available";
                }
            } ?>
        </div>
</section>
<?php registerMechanic(); ?>
<?php require(TEMPLATE_FRONT . DS . "footer.php"); ?>