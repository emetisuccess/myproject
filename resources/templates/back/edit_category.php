<?php include("includes/header.php"); ?>
<?php include("includes/accessControl.php"); ?>
<?php
if (isset($_GET['edit_cat'])) {

    $edit_cat_id = $_GET['edit_cat'];

    $query = "SELECT * FROM category WHERE cat_id = {$edit_cat_id}";
    $select_query = mysqli_query($conn, $query);

    while ($row = $select_query->fetch_assoc()) {
        $id = $row['cat_id'];
        $name = $row['cat_name'];
    }
}
?>
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
                            <h2>Edit Vehicle Category</h2>
                        </div>
                        <div class="card-body">
                            <form action="edit_category.php" method="post">
                                <div class="form-group">
                                    <label for="title">Vehicle Category Name</label>
                                    <input type="text" value="<?php echo $name; ?>" name="cat_name" id="cat_name"
                                        class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="hidden" name="cat_id" value="<?php echo $id; ?>">
                                    <input type="submit" name="submit" value="Update Category" id="cat"
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
if (isset($_POST['submit'])) {

    $cat_id = $_POST['cat_id'];
    $cat_name = $_POST['cat_name'];

    $query = "UPDATE category SET cat_name='{$cat_name}' WHERE cat_id={$cat_id}";
    $update_query = mysqli_query($conn, $query);

    if (!$update_query) {

        die("QUERY FAILED " . mysqli_error($conn));

        header("location: manage_category.php");
    } else {

        echo "Category Updated Successfully";

        header("location: manage_category.php");
    }
}
?>