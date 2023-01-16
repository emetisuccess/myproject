<?php require_once("../../config.php"); ?>
<?php
// check if the del_car button is clicked if click remove the and the image of the car;
if (isset($_GET['del_booking'])) {

    $id = $_GET['del_booking'];

    $query = mysqli_query($conn, "SELECT * FROM tbl_vehicle_rent WHERE rent_id='$id'");
    while ($item = fetch_assoc($query)) {

        $image = $item['image1'];

        if (!$image == "") {
            $path = UPLOADS . DS . $image;
            $remove = unlink($path);
            if (!$remove) {
                set_message("<h5 class='text-danger'>Failed to remove the vehicle image</h5>");
                redirect("/myproject-development/public/admin/index.php?manage_booking");
            }
        }
    }

    $res = $conn->query("DELETE FROM tbl_vehicle_rent WHERE rent_id=$id");
    if ($res == true) {
        set_message("<h5 class='text-success'>Booked Vehicle Deleted Successfully</h5>");
        redirect("/myproject-development/public/admin/index.php?manage_booking");
    } else {
        set_message("Booking Failed to Delete");
        redirect("/myproject-development/public/admin/index.php?manage_booking");
    }
} else {
    redirect("/myproject-development/public/admin/index.php?manage_booking");
}