<?php
if (isset($_GET['edit_brand'])) {

    $edit_brand_id = $_GET['edit_brand'];
    $query = "SELECT * FROM brands WHERE brand_id={$edit_brand_id}";
    $select_query = mysqli_query($conn, $query);
    while ($row = $select_query->fetch_assoc()) {
        $id = $row['brand_id'];
        $name = $row['brand_name'];
    }
}
?>
<h2 class="page-title p-4">Vehicle Brand</h2>
<div class="row justify-content-center">
    <div class="col-md-9">
        <div class="card  mt-5">
            <div class="mb-4 pl-3 pt-4">
                <h2>Edit Vehicle Brand</h2>
            </div>
            <div class="card-body">
                <form action="" method="POST">
                    <div class="form-group">
                        <label for="title">Vehicle Brand Name</label>
                        <input type="text" value="<?php echo $name; ?>" name="brand_name" class="form-control">
                    </div>
                    <div class="form-group">
                        <input type="hidden" name="brand_id" value="<?php echo $id; ?>">
                        <input type="submit" name="submit" value="Update Brand" class="btn btn-info">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<?php
if (isset($_POST['submit'])) {
    $brand_id = mysqli_real_escape_string($conn, $_POST['brand_id']);
    $brand_name = mysqli_real_escape_string($conn, $_POST['brand_name']);
    $query = "UPDATE brands SET brand_name='{$brand_name}' WHERE brand_id={$brand_id}";
    $update_query = mysqli_query($conn, $query);

    if (!$update_query) {
        die("QUERY FAILED " . mysqli_error($conn));
    } else {
        echo "Brand Updated Successfully";
        header("location: /myproject-development/public/admin/index.php?manage_brand");
    }
}
?>