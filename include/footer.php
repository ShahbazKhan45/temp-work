<footer>
    <div class="container">
        <div class="row" data-aos="fade-up" data-aos-duration="1000">
            <div class="col-md-4">
                <img class="f-logo" src="<?php echo $siteurl ?>assets/images/logo.png" alt="">
                <p class="foot-para">Logo Knox is a leading design agency that specializes in creating and developing mobile apps by fashioning enrapturing app designs, excellent user experience and interfaces, along with interactive features and functionalities. We aim to help brands accomplish their goals and enhance their reputations in the modern digital world.</p>
                <a href="javascript:" class="btn btn_orange">SELECT YOUR LCOATION</a>
            </div>
            <div class="col-md-2">
                <h3>logo Knox</h3>
                <nav>
                    <ul class="menu">
                        <li><a href="<?php echo $siteurl ?>/">Home</a></li>
                        <li><a href="<?php echo $siteurl ?>/">About us</a></li>
                        <li><a href="<?php echo $siteurl ?>">Portfolio</a></li>
                        <li><a href="<?php echo $siteurl ?>">Pricing</a></li>
                        <li><a href="<?php echo $siteurl ?>">combo Package</a></li>
                        <li><a href="<?php echo $siteurl ?>/">Process</a></li>
                        <li><a href="<?php echo $siteurl ?>/">FAQs</a></li>
                        <li><a href="<?php echo $siteurl ?>">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div class="col-md-2">
                <h3>Services</h3>
                <nav>
                    <ul class="menu">
                        <li><a href="<?php echo $siteurl ?>/">Logo Design</a></li>
                        <li><a href="<?php echo $siteurl ?>/">Website Development</a></li>
                        <li><a href="<?php echo $siteurl ?>">Video Animation</a></li>
                        <li><a href="<?php echo $siteurl ?>">App Design</a></li>
                        <li><a href="<?php echo $siteurl ?>">Creative CopywritingApp Design</a></li>
                        <li><a href="<?php echo $siteurl ?>/">Digital Marketing</a></li>
                        <li><a href="<?php echo $siteurl ?>/">3D & Illustration Design</a></li>
                        <li><a href="<?php echo $siteurl ?>">Marketing Collateral</a></li>
                        <li><a href="<?php echo $siteurl ?>">SEO Services</a></li>
                    </ul>
            </div>
            <div class="col-md-4 contact-us">
                <h3>Stay Connected</h3>
                <ul class="menu social-link">
                    <li>
                        <a href="javascritp:"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                        <a href="javascritp:"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="javascritp:"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="javascritp:"><i class="fab fa-pinterest"></i></a>
                    </li>
                    <li>
                        <a href="javascritp:"><i class="fab fa-youtube"></i></a>
                    </li>
                </ul>
                <ul class="menu">
                    <li>
                        <a href="tel:1-323-746-1219">
                            <img src="<?php echo $siteurl ?>assets/images/footer-tel-icon.png" alt=""> 1-323-746-1219</a>
                    </li>
                    <li>
                        <img class="chat" src="<?php echo $siteurl ?>assets/images/footer-email-icon.png" alt="">
                        <a href="mailto:support@logoknox.com" class="chat-text"> support@logoknox.com </a>
                    </li>
                </ul>
            </div>
        </div>
</footer>
<div class="copyright">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <ul class="menu">
                    <li class="text-left">
                        <a href="javascript:">&copy; 2021 Ghostwriter - All Rights Reserved</a>
                    </li>
                    <li class="text-right">
                        <a href="javascript:">Privacy Policy - Terms & Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>
<a id="goto-top" class="btn show"><i class="fas fa-arrow-up"></i></a>

<div style="display: none;" class="popupform" id="popupform">
    <div class="modal-body">
        <div class="popup-bann"><img src="<?php echo $siteurl ?>assets/images/popup-img.png" alt=""></div>
        <div class="popup-content">
            <h2>
                Start Your Trademark Registration and
                Get Your Trademark for <span> only $99 </span>
            </h2>
            <p>
                Providing you the perfect solution for your business needs. Let's work together
                and unlock doors to success.
            </p>
            <form action="/order/index.php" method="post" class="validate-popupform">
                <div class="row">
                    <div class="col-md-6">
                        <input type="text" class="required form-control" required="" name="cn" placeholder="first Name" aria-required="true">
                        <input type="email" class="required form-control email" required name="em" placeholder="Your Email">
                    </div>
                    <div class="col-md-6">

                        <input type="text" class="required form-control" required="" name="l_name" placeholder="last Name" aria-required="true">
                        <input type="tel" class="required form-control" required name="pn" placeholder="Your Phone">
                    </div>
                    <div class="col-md-12">
                        <textarea autocomplete="nope" name="msg" class="required form-control" required placeholder="Enter a brief"></textarea>
                    </div>
                    <div class="col-md-12">
                        <p class="form_tagline"> <input type="checkbox" name="agree"> To receive our weekly Newsletter/SMS and offers check here. You can unsubscribe at any time.</p>
                        <input type="submit" class="btn btn_brown" name="send_data" value="Submit now">
                        <input type="hidden" name="send" value="1" />
                        <input type="hidden" name="lead_area" value="" class="leadprice" />

                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- old -->
<!-- <div style="display: none;" class="popupform" id="popupform">
    <div class="modal-body">
        <div class="popup-bann"><img src="<?php echo $siteurl ?>assets/images/popop-img.png" alt=""></div>
        <div class="popup-content">
            <h2>Get Started Now</h2>
            <p>Providing you the perfect solution for your business needs. Let's work together and unlock doors to success.</p>
            <form action="/order/index.php" method="post" class="validate-popupform-quote">
                <div class="row">
                    <div class="col-md-6">
                        <input type="text" class="required" required name="customer_name" placeholder="Your Name">
                        <input type="email" class="required email" required name="customer_email"  placeholder="Your Email">
                        <input type="tel" class="required  number ftpn" required name="customer_phone"   minlength="7" maxlength="14" placeholder="Your Phone">
                    </div>
                    <div class="col-md-6">
                        <textarea autocomplete="nope"  name="msg" class="required" required placeholder="To help us understand better, enter a brief description about your project."></textarea>
                    </div>
                    <div class="col-md-12 text-center">
                        <p class="form_tagline"> <input type="checkbox" name="agree"> &nbsp; To receive our weekly Newsletter/SMS and offers check here. You can unsubscribe at any time.</p>
                        <input type="submit" class="btn btn-blue" name="send_data" value="Submit">
                    </div>
                </div>
            </form>
        </div>
    </div>-->