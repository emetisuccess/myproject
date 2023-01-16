<?php require_once("../../config.php"); ?>
<?php
if (isset($_GET['del_cat'])) {

    $del_cat_id = $_GET['del_cat'];

    $query = "DELETE FROM categories WHERE cat_id = {$del_cat_id}";

    $delet_query = mysqli_query($conn, $query);

    if (!$delet_query) {
        die("QUERY FAILED" . mysqli_error($conn));
    } else {
        echo "Category Deleted Successfully";
        header("location: /myproject-development/public/admin/index.php?manage_category");
    }
}