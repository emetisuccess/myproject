<?php require_once("../../config.php"); ?>
<?php

if (isset($_GET['del_mech'])) {

    $id = $_GET['del_mech'];

    $query = mysqli_query($conn, "SELECT * FROM tbl_mechanic WHERE mech_id='$id'");
    while ($item = fetch_assoc($query)) {
        $image = $item['mech_image1'];
        $image2 = $item['mech_image2'];
        $image3 = $item['mech_image3'];

        if (!$image == "") {
            $path = UPLOADS . DS . $image;
            $remove = unlink($path);
            if (!$remove) {
                set_message("<h5 class='text-danger'>Failed to remove the vehicle image</h5>");
                redirect("/myproject-development/public/admin/index.php?manage_mechanic");
            }
        }
        if (!$image2 == "") {
            $path = UPLOADS . DS . $image2;
            $remove = unlink($path);
            if (!$remove) {
                set_message("<h5 class='text-danger'>Failed to remove the vehicle image</h5>");
                redirect("/myproject-development/public/admin/index.php?manage_mechanic");
            }
        }
        if (!$imag3 == "") {
            $path = UPLOADS . DS . $image3;
            $remove = unlink($path);
            if (!$remove) {
                set_message("<h5 class='text-danger'>Failed to remove the vehicle image</h5>");
                redirect("/myproject-development/public/admin/index.php?manage_mechanic");
            }
        }
    }

    $res = $conn->query("DELETE FROM tbl_mechanic WHERE mech_id=$id");
    if ($res == true) {
        set_message("<h5 class='text-success'>Mechanic Deleted Successfully</h5>");
        redirect("/myproject-development/public/admin/index.php?manage_mechanic");
    } else {
        set_message("Mechanic Failed to Delete");
        redirect("/myproject-development/public/admin/index.php?manage_machanic");
    }
} else {
    redirect("/myproject-development/public/admin/index.php?manage_machanic");
}