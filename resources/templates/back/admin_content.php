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
            <a href="index.php?manage_vehicle" class="block-anchor panel-footer">Full Detail <i
                    class="fa fa-arrow-right"></i></a>
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
            <a href="index.php?manage_product" class="block-anchor panel-footer">Full Detail <i
                    class="fa fa-arrow-right"></i></a>
        </div>
    </div>

    <div class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body bk-primary text-light">
                <div class="stat-panel text-center">
                    <div class="stat-panel-number h1">
                        <?php
                        $result = $conn->query("SELECT * FROM tbl_driver");
                        $count = mysqli_num_rows($result);
                        echo $count;
                        ?>
                    </div>
                    <div class="stat-panel-title text-uppercase">Registered Users
                    </div>
                </div>
            </div>
            <a href="index.php?manage_user" class="block-anchor panel-footer">Full Detail <i
                    class="fa fa-arrow-right"></i></a>
        </div>
    </div>

    <div class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body bk-success text-light">
                <div class="stat-panel text-center">
                    <div class="stat-panel-number h1 ">
                        <?php
                        $result = $conn->query("SELECT * FROM tbl_driver");
                        $count = mysqli_num_rows($result);
                        echo $count;
                        ?>
                    </div>
                    <div class="stat-panel-title text-uppercase">Listed Drivers
                    </div>
                </div>
            </div>
            <a href="index.php?manage_driver" class="block-anchor panel-footer text-center">Full Detail &nbsp; <i
                    class="fa fa-arrow-right"></i></a>
        </div>
    </div>
    <div class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body bk-info text-light">
                <div class="stat-panel text-center">
                    <div class="stat-panel-number h1">
                        <?php
                        $result = $conn->query("SELECT * FROM tbl_vehicle_rent");
                        $count = mysqli_num_rows($result);
                        echo $count;
                        ?>
                    </div>
                    <div class="stat-panel-title text-uppercase">Total Bookings
                    </div>
                </div>
            </div>
            <a href="index.php?manage_booking" class="block-anchor panel-footer text-center">Full
                Detail &nbsp; <i class="fa fa-arrow-right"></i></a>
        </div>
    </div>
    <div class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body bk-warning text-light">
                <div class="stat-panel text-center">
                    <div class="stat-panel-number h1">
                        <?php
                        $result = $conn->query("SELECT * FROM brands");
                        $count = mysqli_num_rows($result);
                        echo $count;
                        ?>
                    </div>
                    <div class="stat-panel-title text-uppercase">Listed Brands</div>
                </div>
            </div>
            <a href="index.php?manage_brands" class="block-anchor panel-footer text-center">Full
                Detail &nbsp; <i class="fa fa-arrow-right"></i></a>
        </div>
    </div>
    <div class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body bk-info text-light">
                <div class="stat-panel text-center">
                    <div class="stat-panel-number h1">
                        <?php
                        $result = $conn->query("SELECT * FROM tbl_mechanic");
                        $count = mysqli_num_rows($result);
                        echo $count;
                        ?>
                    </div>
                    <div class="stat-panel-title text-uppercase">Listed Mechanics
                    </div>
                </div>
            </div>
            <a href="index.php?manage_mechanic" class="block-anchor panel-footer text-center">Full Detail &nbsp;<i
                    class="fa fa-arrow-right"></i>
            </a>
        </div>
    </div>
    <div class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body bk-warning text-light">
                <div class="stat-panel text-center">
                    <div class="stat-panel-number h1 ">
                        <?php
                        $result = $conn->query("SELECT * FROM tbl_tow");
                        $count = mysqli_num_rows($result);
                        echo $count;
                        ?>
                    </div>
                    <div class="stat-panel-title text-uppercase">Listed Towing
                        Trucks
                    </div>
                </div>
            </div>
            <a href="index.php?manage_towing" class="block-anchor panel-footer text-center">Full Detail &nbsp;
                <i class="fa fa-arrow-right"></i></a>
        </div>
    </div>
</div>