<?php require_once("../../config.php"); ?>
<?php
if (isset($_GET['del_brand'])) {

    $del_brand_id = $_GET['del_brand'];

    $query = "DELETE FROM brands WHERE brand_id = {$del_brand_id}";

    $delet_query = mysqli_query($conn, $query);

    if (!$delet_query) {
        die("QUERY FAILED" . mysqli_error($conn));
    } else {
        echo "Brand Deleted Successfully";
        header("location: /myproject-development/public/admin/index.php?manage_brand");
    }
}