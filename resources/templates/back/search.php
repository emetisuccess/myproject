<?php include("includes/header.php"); ?>
<?php include("includes/accessControl.php"); ?>
<div class="ts-main-content">
    <?php include("includes/menu.php"); ?>
    <?php include('includes/leftbar.php'); ?>
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <form action="" method="post">
                        <div class="form-group">
                            <input type="search" class="form-control" name="search" placeholder="Search for items...."
                                id="search">
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btn btn-info" name="searchbtn">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- include the footer here -->
<?php include("./includes/footer.php"); ?>