<header class="page_header s-py-10 s-py-lg-0 ds ms s-overlay nav-bordered
						justify-nav-center">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="d-lg-none col-11">
                <a href="index.php" class="logo">
                    <img src="images/logo.png" alt="">
                    <span class="logo-text fw-500">Vehicle<span class="fw-200">Car</span></span>
                </a>
            </div>
            <div class="col-xl-12">

                <div class="nav-wrap">
                    <!-- main nav start -->
                    <nav class="top-nav">
                        <ul class="nav sf-menu">
                            <li class="active">
                                <a href="index.php">Home</a>
                            </li>

                            <li>
                                <a href="shop.php">Shop</a>
                            </li>
                            <!-- eof pages -->
                            <li>
                                <a href="#">Services</a>
                                <ul>
                                    <li>
                                        <a href="towing.php">Towing</a>
                                    </li>
                                    <li>
                                        <a href="vehiclelease.php">Car Lease/Hire</a>
                                    </li>
                                    <li>
                                        <a href="drivers.php">Driver Services</a>
                                    </li>
                                    <li>
                                        <a href="mechanic.php">Vehicle Maintenance</a>
                                    </li>
                                    <!-- <li>
                                        <a href="courier.php">Courier/Logistics</a>
                                    </li> -->
                                </ul>
                            </li>
                            <!-- <li>
                                <a href="insurance.php">Insurance</a>
                                <ul>
                                    <li>
                                        <a href="#">Flood Insurance</a>
                                    </li>
                                    <li>
                                        <a href="#">Accident Insurance</a>
                                    </li>
                                    <li>
                                        <a href="#">Vehicle Insurance</a>
                                    </li>
                                </ul>
                            </li> -->
                            <li>
                                <a href="about.php">About Us</a>
                            </li>
                            <li>
                                <a href="faq.php">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Forum</a>
                            </li>
                            <li>
                                <a href="contact.php">Contact</a>
                            </li>
                            <li>
                                <a href="cart.php">
                                    <i class="fa fa-shopping-bag"></i>
                                    <sup class="text-white" id="cart_items"></sup>
                                </a>
                            </li>

                            <?php if (!isset($_SESSION['email'])) : ?>
                            <li>
                                <a href="signup.php">Signup</a>
                            </li>
                            <li>
                                <a href="signin.php">Signin</a>
                            </li>
                            <?php endif; ?>

                            <?php if (isset($_SESSION['email'])) : ?>
                            <li>
                                <a href="/myproject/public/logout.php">Logout</a>
                            </li>
                            <?php endif; ?>
                        </ul>
                    </nav>
                    <!-- eof main nav -->
                </div>
            </div>
        </div>
    </div>
    <!-- header toggler -->
    <span class="toggle_menu"><span></span></span>
</header>
</div>