<?php require_once("../../config.php"); ?>
<?php

if (isset($_GET['del_driver'])) {

    $id = $_GET['del_driver'];

    $query = mysqli_query($conn, "SELECT * FROM tbl_mechanic WHERE mech_id='$id'");
    while ($item = fetch_assoc($query)) {
        $image = $item['driver_image'];
        $image2 = $item['driver_license_front'];
        $image3 = $item['driver_license_back'];

        if (!$image == "") {
            $path = UPLOADS . DS . $image;
            $remove = unlink($path);
            if (!$remove) {
                set_message("<h5 class='text-danger'>Failed to remove the vehicle image</h5>");
                redirect("/myproject-development/public/admin/index.php?manage_driver");
            }
        }
        if (!$image2 == "") {
            $path = UPLOADS . DS . $image2;
            $remove = unlink($path);
            if (!$remove) {
                set_message("<h5 class='text-danger'>Failed to remove the vehicle image</h5>");
                redirect("/myproject-development/public/admin/index.php?manage_driver");
            }
        }
        if (!$imag3 == "") {
            $path = UPLOADS . DS . $image3;
            $remove = unlink($path);
            if (!$remove) {
                set_message("<h5 class='text-danger'>Failed to remove the vehicle image</h5>");
                redirect("/myproject-development/public/admin/index.php?manage_driver");
            }
        }
    }

    $res = $conn->query("DELETE FROM tbl_mechanic WHERE mech_id=$id");
    if ($res == true) {
        set_message("<h5 class='text-success'>Mechanic Deleted Successfully</h5>");
        redirect("/myproject-development/public/admin/index.php?manage_driver");
    } else {
        set_message("Mechanic Failed to Delete");
        redirect("/myproject-development/public/admin/index.php?manage_driver");
    }
} else {
    redirect("/myproject-development/public/admin/index.php?manage_driver");
}