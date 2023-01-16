<!-- search modal -->
<div class="modal" tabindex="-1" role="dialog" aria-labelledby="search_modal" id="search_modal">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    <div class="widget widget_search">
        <form method="get" class="searchform search-form" action="#">
            <div class="form-group">
                <input type="text" value="" name="search" class="form-control" placeholder="Search keyword"
                    id="modal-search-input">
            </div>
            <button type="submit" class="btn">Search</button>
        </form>
    </div>
</div>

<!-- Unyson messages modal -->
<div class="modal fade" tabindex="-1" role="dialog" id="messages_modal">
    <div class="fw-messages-wrap ls p-normal"></div>
</div><!-- eof .modal -->

<div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="modalLoginForm"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="row c-gutter-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span>×</span>
            </button>
            <div class="col-6">
                <div class="modal-content">
                    <div class="modal-header justify-content-center">
                        <h4 class="modal-title">Sign in</h4>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div class=" form-group has-placeholder">
                                <label for="name-sigin">Your Name:</label>
                                <input type="text" class="form-control" id="name-sigin" placeholder="Enter your name"
                                    name="First name">
                            </div>
                            <div class="form-group has-placeholder">
                                <label for="sigpassword">Password:</label>
                                <input type="password" class="form-control" id="sigpassword" placeholder="password"
                                    name="sigpassword">
                            </div>
                            <div class="modal-password">
                                <a href="#" class="modal-password-btn">Forgot password?</a>
                            </div>
                            <div class="modal-footer d-flex justify-content-center">
                                <button type="submit" class="btn btn-small btn-maincolor log-btn">Log
                                    in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-6 ds s-overlay">
                <img src="images/modal-login-form.jpg" alt="">
            </div>
        </div>
    </div>
</div>