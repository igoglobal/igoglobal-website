function Footer () {
    return (
        <footer class="site-footer pbmit-text-color-white">
            <div class="pbmit-footer-big-area-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 col-lg-3 col-md-6">								
                            <div class="pbmit-footer-logo">
                                <img src="/assets/img/igoglobal.png" class="img-fluid" alt="igoglobal logo"></img>
                            </div>                      
                        </div>			
                        <div class="pbmit-footer-left col-xl-4 col-lg-5 col-md-6">
                            <h3>Subscribe to our newsletter! Stay always in touch!</h3>
                        </div>	
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <form>
                                <div class="pbmit-footer-newsletter">
                                    <input type="email" class="form-control" name="EMAIL" placeholder="Enter your email"></input>
                                    <button class="pbmit-svg-btn">
                                        <svg class="pbmit-svg-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
                                            <line x1="1" y1="18" x2="17.8" y2="1.2"></line>
                                            <line x1="1.2" y1="1" x2="18" y2="1"></line>
                                            <line x1="18" y1="17.8" x2="18" y2="1"></line>
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>	
                    </div>
                </div>
            </div>
            <div class="pbmit-footer-main-area">
                <div class="container">
                    <div class="pbmit-footer-widget-area">
                        <div class="container">
                            <div class="row g-2">
                                <div class="col-md-4">
                                    <div class="widget">
                                        <h2 class="widget-title">Our address</h2>
                                        <div class="pbmit-contact-widget-lines">
                                            1, Morenikeji Street, Off Ladipo Kasimu Street, Allen Avenue, Ikeja <br></br> Lagos State, Nigeria
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 pbmit-footer-widget-col-2">
                                    <div class="widget">
                                        <h2 class="widget-title">Contact Us</h2>
                                        <div class="pbmit-contact-widget-lines">
                                            <div class="pbmit-contact-widget-phone">
                                                +(234) 903 - 979 - 9817
                                            </div>
                                            <div class="pbmit-contact-widget-email">
                                                info@igoglobal.io
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="widget">
                                        <h2 class="widget-title">Our Social</h2>
                                        <div class="textwidget">
                                            <ul class="pbmit-social-links">
                                                <li class="pbmit-social-li pbmit-social-facebook">
                                                    <a title="Facebook" href="https://www.facebook.com/igoglobalofficial?mibextid=ZbWKwL" target="blank" rel="noopener">
                                                        <span><i class="pbmit-base-icon-facebook-squared"></i></span>
                                                    </a>
                                                </li>
                                                <li class="pbmit-social-li pbmit-social-twitter">
                                                    <a title="Twitter" href="https://x.com/igoglobal_ofc" target="blank" rel="noopener">
                                                        <span><i class="pbmit-base-icon-twitter"></i></span>
                                                    </a>
                                                </li>
                                                <li class="pbmit-social-li pbmit-social-instagram">
                                                    <a title="Instagram" href="https://www.instagram.com/igoglobal_inc/" target="blank" rel="noopener">
                                                        <span><i class="pbmit-base-icon-instagram"></i></span>
                                                    </a>
                                                </li>
                                                {/* <li class="pbmit-social-li pbmit-social-linkedin">
                                                    <a title="Whatsapp" href="#" target="_blank" rel="noopener">
                                                        <span><i class="pbmit-base-icon-youtube"></i></span>
                                                    </a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pbmit-footer-text-area">
                        <div class="container">
                            <div class="pbmit-footer-text-inner">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="pbmit-footer-copyright-text-area">
                                            Copyright © 2024 <a href="https://myigoglobal.com">Igoglobal Inc.</a>, All Rights Reserved.
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class=" pbmit-footer-menu-area">
                                            <ul>
                                                <li><a href="#">Terms & Conditions</a></li>
                                                <li><a href="#">Privacy Policy</a></li>
                                            </ul>
                                        </div>
                                    </div>		
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;