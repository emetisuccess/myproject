<?php require_once("../../config.php"); ?>
<?php
// check if the del_car button is clicked if click remove the and the image of the car;
if (isset($_GET['del_user'])) {

    $id = $_GET['del_user'];

    $res = $conn->query("DELETE FROM users WHERE user_id=$id");
    if ($res == true) {
        set_message("<h5 class='text-success'>Booked Vehicle Deleted Successfully</h5>");
        redirect("/myproject-development/public/admin/index.php?manage_user");
    } else {
        set_message("Booking Failed to Delete");
        redirect("/myproject-development/public/admin/index.php?manage_user");
    }
} else {
    redirect("/myproject-development/public/admin/index.php?manage_user");
}