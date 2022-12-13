<?php include("../resources/config.php"); ?>
<?php
if (isset($_SESSION['email'])) {
    session_destroy();
    redirect("index.php");
}
?>