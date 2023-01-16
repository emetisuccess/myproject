<?php include("../includes/db.php"); ?>
<?php
if (isset($_GET['del_cat'])) {

    $del_cat_id = $_GET['del_cat'];

    $query = "DELETE FROM category WHERE cat_id = {$del_cat_id}";

    $delet_query = mysqli_query($conn, $query);

    if (!$delet_query) {

        die("QUERY FAILED" . mysqli_error($conn));

        header("location: manage_category.php");
    } else {

        echo "Category Deleted Successfully";

        header("location: manage_category.php");
    }
}