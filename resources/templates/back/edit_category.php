<?php
if (isset($_GET['edit_cat'])) {

    $edit_cat_id = $_GET['edit_cat'];
    $query = "SELECT * FROM categories WHERE cat_id = {$edit_cat_id}";
    $select_query = mysqli_query($conn, $query);
    while ($row = $select_query->fetch_assoc()) {
        $id = $row['cat_id'];
        $name = $row['cat_title'];
    }
}
?>
<h2 class="page-title p-4">Vehicle Category</h2>
<div class="row justify-content-center">
    <div class="col-md-9">
        <div class="card  mt-5">
            <div class="mb-4 pl-3 pt-4">
                <h2>Edit Vehicle Category</h2>
            </div>
            <div class="card-body">
                <form action="" method="post">
                    <div class="form-group">
                        <label for="title">Vehicle Category Name</label>
                        <input type="text" value="<?php echo $name; ?>" name="cat_name" id="cat_name"
                            class="form-control">
                    </div>
                    <div class="form-group">
                        <input type="hidden" name="cat_id" value="<?php echo $id; ?>">
                        <input type="submit" name="submit" value="Update Category" id="cat" class="btn btn-info">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<?php
if (isset($_POST['submit'])) {
    $cat_id = mysqli_real_escape_string($conn, $_POST['cat_id']);
    $cat_name = mysqli_real_escape_string($conn, $_POST['cat_name']);
    $query = "UPDATE categories SET cat_title='{$cat_name}' WHERE cat_id={$cat_id}";
    $update_query = mysqli_query($conn, $query);

    if (!$update_query) {
        die("QUERY FAILED " . mysqli_error($conn));
    } else {
        echo "Category Updated Successfully";
        header("location: /myproject-development/public/admin/index.php?manage_category");
    }
}
?>