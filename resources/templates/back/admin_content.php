<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">
            Welcome to admin
            <span class="page-title"><?php echo  $_SESSION['email'] ?? ""; ?></span>
        </h1>
    </div>
</div>
<div class="row">
    <div class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body bk-primary text-light">
                <div class="stat-panel text-center">
                    <div class="stat-panel-number h1">
                        <?php
                        $result = $conn->query("SELECT * FROM tbl_vehicle");
                        $count = mysqli_num_rows($result);
                        echo $count;
                        ?>
                    </div>
                    <div class="stat-panel-title text-uppercase">Listed Vehicles
                    </div>
                </div>
            </div>
            <a href="manage_car.php" class="block-anchor panel-footer">Full Detail <i class="fa fa-arrow-right"></i></a>
        </div>
    </div>
    <div class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body bk-primary text-light">
                <div class="stat-panel text-center">
                    <div class="stat-panel-number h1">
                        <?php
                        $result = $conn->query("SELECT * FROM tbl_products");
                        $count = mysqli_num_rows($result);
                        echo $count;
                        ?>
                    </div>
                    <div class="stat-panel-title text-uppercase">Listed Products
                    </div>
                </div>
            </div>
            <a href="manage_sparepart.php" class="block-anchor panel-footer">Full Detail <i
                    class="fa fa-arrow-right"></i></a>
        </div>
    </div>

    <div class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body bk-primary text-light">
                <div class="stat-panel text-center">
                    <div class="stat-panel-number h1">5</div>
                    <div class="stat-panel-title text-uppercase">Registered Users
                    </div>
                </div>
            </div>
            <a href="reg-users.php" class="block-anchor panel-footer">Full Detail <i class="fa fa-arrow-right"></i></a>
        </div>
    </div>

    <div class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body bk-success text-light">
                <div class="stat-panel text-center">
                    <div class="stat-panel-number h1 ">5</div>
                    <div class="stat-panel-title text-uppercase">Listed Drivers
                    </div>
                </div>
            </div>
            <a href="../admin/services/driver_services/add_driver.php"
                class="block-anchor panel-footer text-center">Full Detail &nbsp; <i class="fa fa-arrow-right"></i></a>
        </div>
    </div>
    <div class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body bk-info text-light">
                <div class="stat-panel text-center">

                    <div class="stat-panel-number h1">5</div>
                    <div class="stat-panel-title text-uppercase">Total Bookings
                    </div>
                </div>
            </div>
            <a href="manage-bookings.php" class="block-anchor panel-footer text-center">Full
                Detail &nbsp; <i class="fa fa-arrow-right"></i></a>
        </div>
    </div>
    <div class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body bk-warning text-light">
                <div class="stat-panel text-center">
                    <div class="stat-panel-number h1">5</div>
                    <div class="stat-panel-title text-uppercase">Listed Brands</div>
                </div>
            </div>
            <a href="manage-brands.php" class="block-anchor panel-footer text-center">Full
                Detail &nbsp; <i class="fa fa-arrow-right"></i></a>
        </div>
    </div>
    <div class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body bk-info text-light">
                <div class="stat-panel text-center">
                    <div class="stat-panel-number h1 ">
                        5</div>
                    <div class="stat-panel-title text-uppercase">Listed Mechanics
                    </div>
                </div>
            </div>
            <a href="manage-mechanics.php" class="block-anchor panel-footer text-center">Full Detail &nbsp;<i
                    class="fa fa-arrow-right"></i>
            </a>
        </div>
    </div>
    <div class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body bk-warning text-light">
                <div class="stat-panel text-center">
                    <div class="stat-panel-number h1 ">
                        5</div>
                    <div class="stat-panel-title text-uppercase">Listed Towing
                        Trucks
                    </div>
                </div>
            </div>
            <a href="manage-towing-truck.php" class="block-anchor panel-footer text-center">Full Detail &nbsp;
                <i class="fa fa-arrow-right"></i></a>
        </div>
    </div>
</div>