<?php
//function for validation alert messages
// messageAlert();

if (isset($_GET["edit_vehicle"])) {

    $id = $_GET["edit_vehicle"];

    $result = $conn->query("SELECT a.id, a.vehicle_brand_id, a.vehicle_cat_id, a.model, a.make, a.engine_type, a.fuel_type, a.vehicle_mileage, a.fuel_economy, a.payload_capacity, a.engine_power, a.torque, a.vin, a.year_manufacture, a.price, a.vehicle_qty, a.vehicle_image, a.keywords, b.brand_name, b.brand_id, c.cat_title, c.cat_id FROM tbl_vehicle AS a INNER JOIN categories AS c ON c.cat_id = a.vehicle_cat_id INNER JOIN brands AS b ON b.brand_id = a.vehicle_brand_id WHERE a.id='$id'");

    // $row = $result->fetch_assoc();
    $count = mysqli_num_rows($result);

    if ($count > 0) {
        while ($row = $result->fetch_assoc()) {
            $id = $row['id'];
            $vehicle_brand = $row['vehicle_brand_id'];
            $brand_name = $row['brand_name'];

            $vehicle_cat = $row['vehicle_cat_id'];
            $cat_title = $row['cat_title'];
            $model = $row['model'];
            $make = $row['make'];
            $engine_type = $row['engine_type'];
            $fuel_type = $row['fuel_type'];
            $mileage = $row['vehicle_mileage'];
            $fuel_economy = $row['fuel_economy'];
            $payload_capacity = $row['payload_capacity'];
            $engine_power = $row['engine_power'];
            $torque = $row['torque'];
            $vin = $row['vin'];
            $year = $row['year_manufacture'];
            $price = $row['price'];
            $vehicle_qty = $row['vehicle_qty'];
            $current_image = $row['vehicle_image'];
            $keywords = $row['keywords'];
        }
    }
}
?>

<h2 class="page-title pt-5">Edit Vehicle</h2>
<div class="row mb-5">
    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <form action="" method="POST" enctype="multipart/form-data">
            <div class="row justify-content-center">
                <div class="col-md-12  text-center"><?php display_message(); ?></div>
                <input type="hidden" name="vehicle_id" value="<?php echo $id; ?>" class="form-control">
                <div class="col-md-8">
                    <div class="form-group">
                        <label for="vehicle_model">Vehicle Model</label>
                        <input type="text" name="vehicle_model" value="<?php echo isset($model) ? $model : ""; ?>"
                            class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="vehicle_make">Vehicle Make</label>
                        <input type="text" name="vehicle_make" class="form-control"
                            value="<?php echo isset($make) ? $make : ""; ?>">
                    </div>

                    <div class="row">
                        <div class="col-md-9">
                            <div class="form-group">
                                <label for="fuel_economy">Fuel Economy</label>
                                <input type="text" name="fuel_economy" class="form-control"
                                    value="<?php echo isset($fuel_economy) ? $fuel_economy : ""; ?>">
                            </div>
                            <div class="form-group">
                                <label for="payload_capacity">Payload Capacity</label>
                                <input type="text" name="payload_capacity" class="form-control"
                                    value="<?php echo isset($payload_capacity) ? $payload_capacity : ""; ?>">
                            </div>
                            <div class="form-group">
                                <label for="vehicle_price">Vehicle Price</label>
                                <input type="number" name="vehicle_price" class="form-control"
                                    value="<?php echo isset($price) ? $price : ""; ?>">
                            </div>
                            <div class="form-group">
                                <label for="year_manufactured">Year Manufactured</label>
                                <input type="date" name="year_manufactured" class="form-control"
                                    value="<?php echo isset($year) ? $year : ""; ?>">
                            </div>
                            <div class="form-group">
                                <label for="vehicle_mileage">Vehicle Mileage</label>
                                <input type="number" name="vehicle_mileage" class="form-control"
                                    value="<?php echo isset($mileage) ? $mileage : ""; ?>">
                            </div>
                            <div class="form-group">
                                <label for="vehicle_quantity">Vehicle Quantity</label>
                                <input type="number" name="vehicle_quantity" min="1" class="form-control"
                                    value="<?php echo isset($vehicle_qty) ? $vehicle_qty : ""; ?>">
                            </div>
                        </div>
                    </div>
                </div>
                <aside id='admin_sidebar' class="col-md-4">
                    <div class="form-group">
                        <label for="engine_power">Vehicle Engine Power</label>
                        <input type="text" name="engine_power" class="form-control"
                            value="<?php echo isset($engine_power) ? $engine_power : ""; ?>">
                    </div>

                    <div class="form-group">
                        <label for="torque">Vehicle Torque</label>
                        <input type="text" name="torque" class="form-control"
                            value="<?php echo isset($torque) ? $torque : ""; ?>">
                    </div>

                    <div class="form-group">
                        <label for="vin">Vehicle VIN</label>
                        <input type="text" name="vin" class="form-control"
                            value="<?php echo isset($vin) ? $vin : "" ?>">
                    </div>

                    <div class="form-group">
                        <label for="product_category">Vehicle Category</label>
                        <select name="vehicle_cat_id" id="" class="form-control">
                            <option value="<?php echo isset($vehicle_cat) ? $vehicle_cat : ""; ?>">
                                <?php echo isset($cat_title) ? $cat_title : ""; ?>
                            </option>
                            <?php selectCategoryOptions(); ?>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="product_category">Vehicle Engine Type</label>
                        <select name="vehicle_engine_type" id="" class="form-control">
                            <option value="<?php echo isset($engine_type) ? $engine_type : ""; ?>">
                                <?php echo isset($engine_type) ? $engine_type : ""; ?>
                            </option>
                            <option value="V2">V2</option>
                            <option value="V4">V4</option>
                            <option value="V6">V6</option>
                            <option value="V8">V8</option>
                            <option value="V12">V12</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="vehicle_fuel_type">Vehicle Fuel Type</label>
                        <select name="vehicle_fuel_type" id="" class="form-control">
                            <option value="<?php echo isset($fuel_type) ? $fuel_type : ""; ?>">
                                <?php echo isset($fuel_type) ? $fuel_type : ""; ?>
                            </option>
                            <option value="Fuel">Fuel</option>
                            <option value="Gas">Gas</option>
                            <option value="Diesel">Diesel</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="product_brand">Vehicle Brand</label>
                        <select name="vehicle_brand_id" id="" class="form-control">
                            <option value="<?php echo isset($vehicle_brand) ? $vehicle_brand : ""; ?>">
                                <?php echo isset($brand_name) ? $brand_name : ""; ?>
                            </option>
                            <?php selectBrandOptions(); ?>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="keywords">Vehicle Keywords</label>
                        <textarea type="text" rows="5" name="keywords" class="form-control"><?php echo isset($keywords) ? $keywords : ""; ?>
                        </textarea>
                    </div>

                    <div class="form-group">
                        <div>
                            <label for="current_image">Current Image</label>
                        </div>
                        <img src="../../resources/uploads/<?php echo isset($current_image) ? $current_image : "No Image"; ?>"
                            height="100px" width="100px">
                        <input type="hidden" name="current_image" value="<?php echo $current_image; ?>">
                    </div>

                    <div class="form-group">
                        <label for="vehicle_image">Vehicle Image</label>
                        <input type="file" name="vehicle_image" class="form-control">
                    </div>
                    <!-- product button -->
                    <div class="form-group">
                        <input type="submit" name="update_vehicle" class="btn btn-primary btn-block "
                            value="Update Vehicle Details">
                    </div>
                </aside>
            </div>
        </form>
    </div>
</div>

<?php edit_vehicle(); ?>