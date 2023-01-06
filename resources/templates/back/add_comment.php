<?php include("includes/header.php"); ?>
<?php include("includes/accessControl.php"); ?>
<?php include("includes/menu.php"); ?>
<div class="ts-main-content">
    <?php include('includes/leftbar.php'); ?>
    <div class="content-wrapper">
        <div class="container-fluid">
            <h2 class="page-title p-4">Dashboard</h2>
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="card">
                        <div class="card-header">
                            <h3>Add Comment</h3>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <form action="" method="post" enctype="multipart/form-data">
                                        <div class="form-group">
                                            <label for="content">Content</label>
                                            <input type="text" name="comment_content" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="content">Author</label>
                                            <input type="text" name="comment_author" class="form-control">
                                        </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="content">Email</label>
                                        <input type="text" name="comment_email" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="content">Status</label>
                                        <input type="text" name="comment_status" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="content">Date</label>
                                <input type="date" name="comment_date" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="content">Profile Image</label>
                                <input type="file" name="image_name" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="submit" name="submit" class="btn btn-info">
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- include the footer here -->
<?php include("includes/footer.php"); ?>