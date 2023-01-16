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
                        $_SERVER['REQUEST_URI'] == "/myproject-development/public/admin/" or
                        $_SERVER['REQUEST_URI'] == "/myproject-development/public/admin/index.php"
                    ) {
                        include(TEMPLATE_BACK . DS . "admin_content.php");
                    }
                    if (isset($_GET['manage_user'])) {
                        require(TEMPLATE_BACK . DS . "manage_user.php");
                    }
                    if (isset($_GET['add_brand'])) {
                        require(TEMPLATE_BACK . DS . "add_brand.php");
                    }
                    if (isset($_GET['manage_brand'])) {
                        require(TEMPLATE_BACK . DS . "manage_brand.php");
                    }
                    if (isset($_GET['add_category'])) {
                        require(TEMPLATE_BACK . DS . "add_category.php");
                    }
                    if (isset($_GET['manage_category'])) {
                        require(TEMPLATE_BACK . DS . "manage_category.php");
                    }
                    if (isset($_GET['manage_booking'])) {
                        require(TEMPLATE_BACK . DS . "manage_booking.php");
                    }
                    if (isset($_GET['add_product'])) {
                        require(TEMPLATE_BACK . DS . "add_product.php");
                    }
                    if (isset($_GET['manage_driver'])) {
                        require(TEMPLATE_BACK . DS . "manage_drivers.php");
                    }
                    if (isset($_GET['manage_product'])) {
                        require(TEMPLATE_BACK . DS . "manage_product.php");
                    }
                    if (isset($_GET['manage_towing'])) {
                        require(TEMPLATE_BACK . DS . "manage_towing.php");
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
                    if (isset($_GET['manage_mechanic'])) {
                        require(TEMPLATE_BACK . DS . "manage_mechanic.php");
                    }
                    if (isset($_GET['edit_vehicle'])) {
                        require(TEMPLATE_BACK . DS . "update_vehicle.php");
                    }
                    if (isset($_GET['edit_booking'])) {
                        require(TEMPLATE_BACK . DS . "edit_booking.php");
                    }
                    if (isset($_GET['edit_cat'])) {
                        require(TEMPLATE_BACK . DS . "edit_category.php");
                    }
                    if (isset($_GET['edit_brand'])) {
                        require(TEMPLATE_BACK . DS . "edit_brand.php");
                    }

                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- include the footer here -->
<?php require_once(TEMPLATE_BACK . DS . "footer.php"); ?>