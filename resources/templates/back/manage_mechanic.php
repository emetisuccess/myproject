<h2 class="page-title p-4">Manage Mechanic</h2>
<?php display_message(); ?>
<div class="text-center">
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>SN</th>
                <th>Image</th>
                <th>IDimagefront</th>
                <th>IDimageback</th>
                <th>Fullname</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Year of Experience</th>
                <!-- <th>Services</th> -->
                <th>Work Duration</th>
                <th>Certification</th>
                <th>Work Type</th>
                <th colspan="2">Action</th>
            </tr>
        </thead>
        <tbody>
            <?php manageMechanics(); ?>
        </tbody>
    </table>
</div>