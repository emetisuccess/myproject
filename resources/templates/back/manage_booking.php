<h2 class="page-title p-4">Manage Bookings</h2>
<?php display_message(); ?>
<div class="text-center">
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>SN</th>
                <th>Image</th>
                <th>Model</th>
                <th>Pickup Time</th>
                <th>Pickup Date</th>
                <th>Dropoff Time</th>
                <th>Dropoff Date</th>
                <th>Customer Firstname</th>
                <th>Customer Lastname</th>
                <th>Customer Email</th>
                <th>Customer Licenceno</th>
                <th>Customer mobile</th>
                <th>Flight Number</th>
                <th>Status</th>
                <th colspan="2">Action</th>
            </tr>
        </thead>
        <tbody>
            <?php manageBookings(); ?>
        </tbody>
    </table>
</div>