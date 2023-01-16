<h2 class="page-title p-4">Manage Drivers</h2>
<?php display_message(); ?>
<div class="text-center">
    <table class="table table-hover table-bordered table-responsive">
        <thead>
            <tr>
                <th>SN</th>
                <th>Driver Image</th>
                <th>Licence Image Front</th>
                <th>Licence Image Back</th>
                <th>Licence Number</th>
                <th>Birthday</th>
                <th>Blood Group</th>
                <th>Fullname</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Experience</th>
                <th>Preffered Location</th>
                <th>Driver Class</th>
                <th colspan="2">Action</th>
            </tr>
        </thead>
        <tbody>
            <?php manageDrivers(); ?>
        </tbody>
    </table>
</div>