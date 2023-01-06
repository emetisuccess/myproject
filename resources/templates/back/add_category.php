<?php include("includes/header.php"); ?>
<?php include("includes/accessControl.php"); ?>
<div class="ts-main-content">
    <?php include("includes/menu.php"); ?>
    <?php include('includes/leftbar.php'); ?>
    <div class="content-wrapper">
        <div class="container-fluid">
            <h2 class="page-title p-4">Vehicle Category</h2>
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <div class="card  mt-5">
                        <div class="mb-4 pl-3 pt-4">
                            <h2>Add Vehicle Category</h2>
                        </div>
                        <div class="card-body">
                            <form action="add_category.php" method="post">
                                <div class="form-group">
                                    <label for="title">Vehicle Category Name</label>
                                    <input type="text" name="cat_name" id="cat_name" class="form-control"
                                        placeholder="Enter Vehicle Category">
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="add_cat" value="Add Category" id="cat"
                                        class="btn btn-info">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- include the footer here -->
<?php include("includes/footer.php"); ?>

<?php

if (isset($_POST['add_cat'])) {

    $cat_name = $_POST['cat_name'];

    if (empty($cat_name)) {

        echo "Fill in the field";
    } else {

        $stmt = $conn->prepare("INSERT INTO category(cat_name) VALUES(?)");
        $stmt->bind_param("s", $cat_name);
        $stmt->execute();

        if (!$stmt) {
            die("QUERY FAILED " . mysqli_error($conn));
            header("location: manage_category.php");
        } else {

            echo "Vehicle Category Successfully Added";
            header("location: manage_category.php");
        }

        $stmt->close();
        $conn->close();
    }
}

?>