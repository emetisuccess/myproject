<?php
require_once("../../config.php");

//  get the target link that is to be deleted
if (isset($_GET['delete_sparepart'])) {

    // get the target id and the image name; 
    $id = $_GET['delete_sparepart'];

    // target the image and remove it;
    $query = mysqli_query($conn, "SELECT * FROM tbl_products WHERE id='$id'");
    while ($item = fetch_assoc($query)) {

        $image = $item['product_image'];

        if (!$image == "") {
            $path = UPLOADS . DS . $image;
            $remove = unlink($path);
            if (!$remove) {
                set_message("<h5 class='text-danger'>Failed to remove the vehicle image</h5>");
                redirect("/myproject/public/admin/index.php?manage_product");
            }
        }
    }

    // query database;
    $res = $conn->query("DELETE FROM tbl_products WHERE id=$id");

    // check if the sparepart has been removed or not;
    if ($res == true) {

        //if condition is true display this message
        set_message("<h5 class='text-success'>Product Deleted Successfully!!</h5>");

        // redirect to manage machinery page;
        redirect("/myproject/public/admin/index.php?manage_product");
    } else {

        //if condition is true display this message
        set_message("<h5 class='text-danger'>Failed to Delete Product!!</h5>");

        //redirect to manage machinery
        redirect("/myproject/public/admin/index.php?manage_product");
    }
}