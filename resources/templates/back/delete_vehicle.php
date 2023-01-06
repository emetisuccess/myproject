<?php require_once("../../config.php"); ?>
<?php
// check if the del_car button is clicked if click remove the and the image of the car;
if (isset($_GET['del_car'])) {

    $id = $_GET['del_car'];


    $query = mysqli_query($conn, "SELECT * FROM tbl_vehicle WHERE id='$id'");
    while ($item = fetch_assoc($query)) {

        $image = $item['vehicle_image'];

        if (!$image == "") {
            $path = UPLOADS . DS . $image;
            $remove = unlink($path);
            if (!$remove) {
                set_message("<h5 class='text-danger'>Failed to remove the vehicle image</h5>");
                redirect("/myproject/public/admin/index.php?manage_vehicle");
            }
        }
    }


    // delete the car from database;
    $res = $conn->query("DELETE FROM tbl_vehicle WHERE id=$id");
    if ($res == true) {
        set_message("<h5 class='text-success'>Vehicle Deleted Successfully</h5>");
        redirect("/myproject/public/admin/index.php?manage_vehicle");
    } else {
        set_message("Vehicle Failed to Delete");
        redirect("/myproject/public/admin/index.php?manage_vehicle");
    }
} else {
    // redirect to manage_car.php;
    redirect("/myproject/public/admin/index.php?manage_vehicle");
}