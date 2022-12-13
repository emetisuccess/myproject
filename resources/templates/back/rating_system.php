<?php include("includes/header.php"); ?>
<?php include("includes/accessControl.php"); ?>
<div class="ts-main-content">
    <?php include("includes/menu.php"); ?>
    <?php include('includes/leftbar.php'); ?>
    <style>
    .progress-label-left {
        float: left;
        margin-right: 0.5rem;
        line-height: 1em;
    }

    .progress-label-right {
        float: right;
        margin-right: 0.3rem;
        line-height: 1em;
    }

    .star-light {
        color: #e9ecef;
    }
    </style>

    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <h1 class="mt-5 mb-5">User Rating Review System</h1>
                    <div class="card">
                        <div class="card-header">
                            Sample Product
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4 text-center">
                                    <!-- total average -->
                                    <h1 class="text-warning my-4">
                                        <b><span id="average_rating">0.0 </span>/ 5.0</b>
                                    </h1>
                                    <div class="mb-3">
                                        <i class="fa fa-star star-light mr-1 main_star"></i>
                                        <i class="fa fa-star star-light mr-1 main_star"></i>
                                        <i class="fa fa-star star-light mr-1 main_star"></i>
                                        <i class="fa fa-star star-light mr-1 main_star"></i>
                                        <i class="fa fa-star star-light mr-1 main_star"></i>
                                    </div>
                                    <!-- total review -->
                                    <h3><span id="total_review">0 </span> Review</h3>
                                </div>
                                <div class="col-sm-4">
                                    <p>
                                    <div class="progress-label-left"><b>5 </b><i class="fa fa-star text-warning"></i>
                                    </div>
                                    <div class="progress-label-right ml-1">(<span id="total_five_star_review">0</span>)
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-warning " role="progressbar" aria-valuenow="0"
                                            aria-valuemin="0" aria-valuemax="100" id="five_star_progress"></div>
                                    </div>
                                    </p>

                                    <p>
                                    <div class="progress-label-left"><b>4 </b><i class="fa fa-star text-warning"></i>
                                    </div>
                                    <div class="progress-label-right ml-1">(<span id="total_four_star_review">0</span>)
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="0"
                                            aria-valuemin="0" aria-valuemax="100" id="four_star_progress"></div>
                                    </div>
                                    </p>
                                    <p>
                                    <div class="progress-label-left"><b>3 </b><i class="fa fa-star text-warning"></i>
                                    </div>
                                    <div class="progress-label-right ml-1">(<span id="total_three_star_review">0</span>)
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="0"
                                            aria-valuemin="0" aria-valuemax="100" id="three_star_progress"></div>
                                    </div>
                                    </p>
                                    <p>
                                    <div class="progress-label-left"><b>2 </b><i class="fa fa-star text-warning"></i>
                                    </div>
                                    <div class="progress-label-right ml-1">(<span id="total_two_star_review">0</span>)
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="0"
                                            aria-valuemin="0" aria-valuemax="100" id="two_star_progress"></div>
                                    </div>
                                    </p>


                                    <p>
                                    <div class="progress-label-left"><b>1 </b><i class="fa fa-star text-warning"></i>
                                    </div>
                                    <div class="progress-label-right ml-1">(<span id="total_one_star_review">0</span>)
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="0"
                                            aria-valuemin="0" aria-valuemax="100" id="one_star_progress"></div>
                                    </div>
                                    </p>
                                </div>
                                <div class="col-sm-4 text-center">
                                    <h3 class="mt-4 mb-3">Write Review Here</h3>
                                    <button type="button" name="add_review" id="add_review"
                                        class="btn btn-primary">Review</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-5" id="review_content"></div>
</div>
<!-- include the footer here -->
<?php include("./includes/footer.php"); ?>

<div id="review_modal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Submit Review</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <h4 class="text-center mt-2 mb-4">
                    <i class="fa fa-star star-light mr-1 submit_star" id="submit_star_1" data-rating="1"></i>
                    <i class="fa fa-star star-light mr-1 submit_star" id="submit_star_2" data-rating="2"></i>
                    <i class="fa fa-star star-light mr-1 submit_star" id="submit_star_3" data-rating="3"></i>
                    <i class="fa fa-star star-light mr-1 submit_star" id="submit_star_4" data-rating="4"></i>
                    <i class="fa fa-star star-light mr-1 submit_star" id="submit_star_5" data-rating="5"></i>
                </h4>

                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" name="user_name" id="user_name" class="form-control">
                </div>
                <div class="form-group">
                    <label for="review">Your Review</label>
                    <textarea name="user_review" id="user_review" cols="30" rows="2" class="form-control"></textarea>
                </div>
                <div class="text-center form-group mt-4">
                    <button class="btn btn-primary" type="submit" id="save_review">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
$(document).ready(function() {

    var rating_data = 0;

    $("#add_review").click(function() {
        $('#review_modal').modal('show');
    });


    $(document).on('mouseenter', '.submit_star', function() {

        var rating = $(this).data('rating');

        reset_background();

        // loop through the ratings 
        for (var count = 1; count <= rating; count++) {
            $('#submit_star_' + count).addClass('text-warning');
        }
    });



    function reset_background() {
        for (var count = 1; count <= 5; count++) {


            $('#submit_star_' + count).addClass('star-light');


            $('#submit_star_' + count).removeClass('text-warning');
        }

    };



    $(document).on('mouseleave', '.submit_star', function() {
        reset_background();

        for (var count = 1; count <= rating_data; count++) {

            $('#submit_star_' + count).removeClass('star-light');

            $('#submit_star_' + count).addClass('text-warning');
        }

    });



    $(document).on('click', '.submit_star', function() {
        rating_data = $(this).data("rating");
    });



    $('#save_review').click(function() {

        var user_name = $('#user_name').val();
        var user_review = $('#user_review').val();

        if (user_name == '' || user_review == '') {
            alert("Please fill both fields");
            return false;
        } else {
            $.ajax({
                url: 'submit_rating.php',
                method: 'POST',
                data: {
                    rating_data: rating_data,
                    user_name: user_name,
                    user_review: user_review
                },
                success: function(data) {
                    $('#review_modal').modal('hide');
                    displaydata();
                    alert(data);

                }
            });
        }
    });
});
</script>