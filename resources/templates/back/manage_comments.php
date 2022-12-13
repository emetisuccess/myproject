<?php include("includes/header.php"); ?>
<?php include("includes/accessControl.php"); ?>
<div class="ts-main-content">
    <?php include("includes/menu.php"); ?>
    <?php include('includes/leftbar.php'); ?>
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="page-title">Dashboard</h2>
                    <table class="table table-bordered table-hover">
                        <tr>
                            <thead>
                                <th>S/N</th>
                                <th>Content</th>
                                <th>Author</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th colspan="2" class="text-center">Action</th>
                            </thead>
                        </tr>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>i love coding</td>
                                <td>Emeti</td>
                                <td>emeti@gmail.com</td>
                                <td>publish</td>
                                <td>12-03-2022</td>
                                <td class="text-center">
                                    <a href="#">Delete</a>
                                    <a href="#">Update</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- include the footer here -->
<?php include("./includes/footer.php"); ?>