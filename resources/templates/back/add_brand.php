<h2 class="page-title p-4">Vehicle Brand</h2>
<div class="row justify-content-center">
    <div class="col-md-9">
        <div class="card  mt-5">
            <div class="mb-4 pl-3 pt-4">
                <h2>Add Vehicle Brand</h2>
            </div>
            <div class="card-body">
                <form action="" method="post">
                    <div class="form-group">
                        <label for="title">Vehicle Brand Name</label>
                        <input type="text" name="brand_name" class="form-control" placeholder="Enter Vehicle Brand">
                    </div>
                    <div class="form-group">
                        <input type="submit" name="add_brand" value="Add Brand" class="btn btn-info">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<?php
if (isset($_POST['add_brand'])) {

    $brand_name = $_POST['brand_name'];
    if (empty($brand_name)) {
        echo "Fill in the field";
    } else {

        $stmt = $conn->prepare("INSERT INTO brands(brand_name) VALUES(?)");
        $stmt->bind_param("s", $brand_name);
        $stmt->execute();

        if (!$stmt) {
            die("QUERY FAILED" . mysqli_error($conn));
            // header("location: index.php?manage_category");
        } else {
            echo "Vehicle Brand Successfully Added";
            header("location: index.php?manage_brand");
        }
        $stmt->close();
        $conn->close();
    }
}

?>