<h2 class="page-title p-4">Manage Vehicle</h2>

<div class="mb-4"><a href="index.php?add_vehicle" class="btn btn-dark btn-sm">Add Vehicle</a></div>
<?php display_message(); ?>
<div class="text-center">
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>SN</th>
                <th>Image</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Make</th>
                <th>Engine Type</th>
                <th>Fuel Type</th>
                <th>Car Mileage(km)</th>
                <th>Fuel Economy(gpm)</th>
                <th>Car Torque</th>
                <th>VIN</th>
                <th>Year</th>
                <th>Price(&#8358;)</th>
                <th colspan="2">Action</th>
            </tr>
        </thead>
        <tbody>
            <?php manageVehicles(); ?>
        </tbody>
    </table>
</div>