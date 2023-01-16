<h2 class="page-title p-4">Manage Users</h2>
<?php display_message(); ?>
<div class="text-center">
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>SN</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Created at</th>
                <th colspan="2">Action</th>
            </tr>
        </thead>
        <tbody>
            <?php manageUsers(); ?>
        </tbody>
    </table>
</div>