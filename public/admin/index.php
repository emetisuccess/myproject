<?php require_once("../../resources/config.php"); ?>
<?php require_once(TEMPLATE_BACK . DS . "header.php"); ?>
<?php require_once(TEMPLATE_BACK . DS . "accesscontrol.php"); ?>
<div class="ts-main-content">
    <?php require_once(TEMPLATE_BACK . DS . "menu.php"); ?>
    <?php require_once(TEMPLATE_BACK . DS . "leftbar.php"); ?>
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <?php
                    if (
                        $_SERVER['REQUEST_URI'] == "/myproject/public/admin/" or
                        $_SERVER['REQUEST_URI'] == "/myproject/public/admin/index.php"
                    ) {
                        include(TEMPLATE_BACK . DS . "admin_content.php");
                    }
                    if (isset($_GET['add_user'])) {
                        echo "add user";
                    }
                    if (isset($_GET['manage_user'])) {
                        echo "manage users";
                    }
                    if (isset($_GET['add_category'])) {
                        echo "categories";
                    }
                    if (isset($_GET['manage_category'])) {
                        echo "manage categories";
                    }
                    if (isset($_GET['add_product'])) {
                        require(TEMPLATE_BACK . DS . "add_product.php");
                    }
                    if (isset($_GET['manage_product'])) {
                        require(TEMPLATE_BACK . DS . "manage_product.php");
                    }
                    if (isset($_GET['update_sparepart_product'])) {
                        require(TEMPLATE_BACK . DS . "update_product.php");
                    }
                    if (isset($_GET['add_vehicle'])) {
                        require(TEMPLATE_BACK . DS . "add_vehicle.php");
                    }
                    if (isset($_GET['manage_vehicle'])) {
                        require(TEMPLATE_BACK . DS . "manage_vehicle.php");
                    }
                    if (isset($_GET['add_accessory'])) {
                        require(TEMPLATE_BACK . DS . "add_accessory.php");
                    }
                    if (isset($_GET['manage_accessory'])) {
                        require(TEMPLATE_BACK . DS . "manage_accessory.php");
                    }
                    if (isset($_GET['add_comment'])) {
                        echo "add_comment";
                    }
                    if (isset($_GET['manage_comments'])) {
                        echo "manage_comment";
                    }
                    if (isset($_GET['add_mechanic'])) {
                        echo "add_mechanic";
                    }
                    if (isset($_GET['manage_mechanic'])) {
                        echo "manage_mechanic";
                    }
                    if (isset($_GET['edit_vehicle'])) {
                        require(TEMPLATE_BACK . DS . "update_vehicle.php");
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- include the footer here -->
<?php require_once(TEMPLATE_BACK . DS . "footer.php"); ?>