<h2 class="page-title pt-5">Add Vehicle</h2>
<div class="row mb-5">
    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <form action="" method="POST" enctype="multipart/form-data">
            <div class="row justify-content-center">
                <div class="col-md-12  text-center"><?php display_message(); ?></div>
                <div class="col-md-8">
                    <div class="form-group">
                        <label for="vehicle_model">Vehicle Model</label>
                        <input type="text" name="vehicle_model" class="form-control" placeholder="Enter vehicle model">
                    </div>
                    <div class="form-group">
                        <label for="vehicle_make">Vehicle Make</label>
                        <input type="text" name="vehicle_make" class="form-control" placeholder="Enter vehicle make">
                    </div>

                    <div class="row">
                        <div class="col-md-9">
                            <div class="form-group">
                                <label for="fuel_economy">Fuel Economy</label>
                                <input type="text" name="fuel_economy" class="form-control"
                                    placeholder="Enter Fuel Economy">
                            </div>
                            <div class="form-group">
                                <label for="payload_capacity">Payload Capacity</label>
                                <input type="text" name="payload_capacity" class="form-control"
                                    placeholder="Enter Payload Capacity">
                            </div>
                            <div class="form-group">
                                <label for="vehicle_price">Vehicle Price</label>
                                <input type="text" name="vehicle_price" class="form-control"
                                    placeholder="Enter Vehicle price">
                            </div>
                            <div class="form-group">
                                <label for="year_manufactured">Year Manufactured</label>
                                <input type="date" name="year_manufactured" class="form-control"
                                    placeholder="Enter year manufactured">
                            </div>
                            <div class="form-group">
                                <label for="vehicle_mileage">Vehicle Mileage</label>
                                <input type="text" name="vehicle_mileage" class="form-control"
                                    placeholder="Enter vehicle mileage">
                            </div>
                            <div class="form-group">
                                <label for="vehicle_quantity">Vehicle Quantity</label>
                                <input type="number" name="vehicle_quantity" min="1" class="form-control"
                                    placeholder="Enter vehicle quantity">
                            </div>
                        </div>
                    </div>
                </div>
                <aside id='admin_sidebar' class="col-md-4">
                    <div class="form-group">
                        <label for="engine_power">Vehicle Engine Power</label>
                        <input type="text" name="engine_power" class="form-control" placeholder="Enter engine power">
                    </div>

                    <div class="form-group">
                        <label for="torque">Vehicle Torque</label>
                        <input type="text" name="torque" class="form-control" placeholder="Enter vehicle torque">
                    </div>

                    <div class="form-group">
                        <label for="vin">Vehicle VIN</label>
                        <input type="text" name="vin" class="form-control"
                            placeholder="Enter vehicle indentification Number">
                    </div>

                    <div class="form-group">
                        <label for="product_category">Vehicle Category</label>
                        <select name="vehicle_cat_id" id="" class="form-control">
                            <option value="">Select Category</option>
                            <?php selectCategoryOptions(); ?>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="product_category">Vehicle Engine Type</label>
                        <select name="vehicle_engine_type" id="" class="form-control">
                            <option value="">Select Engine Type</option>
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
                            <option value="">Select Fuel Type</option>
                            <option value="Fuel">Fuel</option>
                            <option value="Gas">Gas</option>
                            <option value="Diesel">Diesel</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="product_brand">Vehicle Brand</label>
                        <select name="vehicle_brand_id" id="" class="form-control">
                            <option value="">Select Brand</option>
                            <?php selectBrandOptions(); ?>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="keywords">Vehicle Keywords</label>
                        <textarea type="text" rows="5"
                            placeholder="Try including the product title, short description and other keywords for easy search"
                            name="keywords" class="form-control"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="vehicle_image">Vehicle Image</label>
                        <input type="file" name="image" class="form-control">
                    </div>
                    <!-- product button -->
                    <div class="form-group">
                        <input type="submit" name="add_vehicle" class="btn btn-primary btn-block " value="Add Vehicle">
                    </div>
                </aside>
            </div>
        </form>
    </div>
</div>
<?php addVehicle() ?>