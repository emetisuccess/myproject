<section class="ls s-pt-55 s-pb-30 s-pt-lg-145 s-pb-lg-120" id="team">
    <div class="container">
        <div class="col-12 mb-50">
            <h3 class="special-heading text-center">Meet Our<span class="text-gradient">Mechanics</span>
            </h3>
            <p class="fs-20 color-dark">The Car Repair Appointment</p>
            <div class="divider-60 d-none d-lg-block"></div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="owl-carousel" data-autoplay="false" data-loop="true" data-responsive-lg="3"
                    data-responsive-md="2" data-responsive-sm="2" data-nav="false" data-dots="false" data-margin="60">
                    <?php
                    $query = mysqli_query($conn, "SELECT * FROM tbl_mechanic");
                    while ($data = fetch_assoc($query)) {
                    ?>
                    <div class="vertical-item content-padding text-center overflow-hidden">
                        <div class="item-media">
                            <img src="/myproject-development/resources/uploads/<?php echo $data['mech_image1']; ?>"
                                alt="image">
                            <div class="content-hover team-btn">
                                <a href="team-single.php" class="btn btn-small btn-maincolor">Mail
                                    me</a>
                            </div>
                        </div>
                        <div class="item-content">
                            <h6 class="team-name fw-700">
                                <a href="team-single.php"><?php echo $data['mech_fullname']; ?></a>
                            </h6>
                            <p>
                                AutoDoc Manager
                            </p>
                            <p class="social-icons with-border">
                                <span><a href="https://www.facebook.com/<?php echo $data['mech_fullname']; ?>" class="fa fa-facebook
														border-icon rounded-icon" title="facebook"></a></span>
                                <span><a href="https://telegram.org/<?php echo $data['mech_fullname']; ?>" class="fa fa-paper-plane
														border-icon rounded-icon" title="telegram"></a></span>
                                <span><a href="https://www.instagram.com/<?php echo $data['mech_fullname']; ?>" class="fa fa-instagram
														border-icon rounded-icon" title="instagram"></a></span>
                            </p>
                        </div>
                    </div>
                    <?php } ?>
                </div><!-- .team-carousel -->
            </div>
            <div class="divider-2"></div>
        </div>
    </div>
</section>