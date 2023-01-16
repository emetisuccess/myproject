<h2 class="page-title p-4">Manage Towing Services</h2>
<?php display_message(); ?>
<div class="text-center">
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>SN</th>
                <th>Image</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Charge/Km</th>
                <th>Created at</th>
                <th colspan="2">Action</th>
            </tr>
        </thead>
        <tbody>
            <?php manageTowing(); ?>
        </tbody>
    </table>
</div>