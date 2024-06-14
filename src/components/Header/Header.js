function Header () {
    return (
        <header class="site-header header-style-1">
            <div class="pbmit-header-overlay">
                <div class="pbmit-pre-header-wrapper pbmit-text-color-white">
                    <div class="container-fluid">
                        <div class="d-flex justify-content-between">
                            <div class="pbmit-pre-header-left">
                                <ul class="pbmit-contact-info">
                                <li><i class="pbmit-base-icon-placeholder"></i>Ikeja City, Lagos Nigeria</li>
                                </ul>
                            </div>
                            <div class="pbmit-pre-header-right">
                                <ul class="pbmit-contact-info">
                                <li><i class="pbmit-base-icon-email"></i>info@igoglobal.io</li>
                                <li><i class="pbmit-base-icon-call"></i>+(234) 903-979-9817</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pbmit-main-header-area">
                    <div class="container-fluid">
                        <div class="pbmit-header-content d-flex align-items-center justify-content-between">
                            <div class="site-branding">
                                <h1 class="site-title">
                                    <a href="index.html">
                                        <img class="logo-img" src="/assets/img/igoglobal.png" alt="igo"></img>
                                        <img class="pbmit-responsive-logo" src="/assets/img/igoglobal.png" alt="igo"></img>
                                    </a>
                                </h1>
                            </div>
                            <div class="pbmit-menuarea d-flex align-items-center">
                                <div class="site-navigation">
                                    <nav class="main-menu navbar-expand-xl navbar-light">
                                    <div class="navbar-header">
                                        {/* <!-- Toggle Button -->  */}
                                        <button class="navbar-toggler" type="button">
                                            <i class="pbmit-base-icon-menu-1"></i>
                                        </button>
                                    </div>
                                    <div class="pbmit-mobile-menu-bg"></div>
                                    <div class="collapse navbar-collapse clearfix show" id="pbmit-menu">
                                        <div class="pbmit-menu-wrap">
                                            <span class="closepanel">
                                                <i class="pbmit-base-icon-close-circular-button-symbol"></i>
                                            </span>
                                            <ul class="navigation clearfix">
                                                <li class="dropdown active">
                                                    <a href="index.html">Home</a>
                                                    <ul>
                                                        <li class="active"><a href="index.html">Homepage 01</a></li>
                                                        <li><a href="homepage-2.html">Homepage 02</a></li>
                                                        <li><a href="homepage-3.html">Homepage 03</a></li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown">
                                                    <a href="#">Pages</a>
                                                    <ul>
                                                        <li><a href="about-us.html">About Us</a></li>
                                                        <li><a href="our-history.html">Our History</a></li>
                                                        {/* <li><a href="our-plans.html">Our Plans</a></li>
                                                        <li><a href="our-team-member.html">Our Team Member</a></li>
                                                        <li><a href="team-member-detail.html">Team Member Detail</a></li>
                                                        <li><a href="faq.html">Faq</a></li> */}
                                                    </ul>
                                                </li>
                                                <li class="dropdown">
                                                    <a href="services.html">Services</a>
                                                    <ul>
                                                        <li><a href="service-detail.html">Service Detail</a></li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown">
                                                    <a href="#">Project</a>
                                                    <ul>
                                                        <li class="dropdown">
                                                            <a href="#">Masonry View</a>
                                                            <ul>
                                                                <li><a href="masonry-grid-col-2.html">Grid Col-2</a></li>
                                                                <li><a href="masonry-grid-col-3.html">Grid Col-3</a></li>
                                                                <li><a href="masonry-grid-col-4.html">Grid Col-4</a></li>
                                                                <li><a href="masonry-grid-wide.html">Grid Wide</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="dropdown">
                                                            <a href="#">Grid View</a>
                                                            <ul>
                                                                <li><a href="portfolio-grid-col-2.html">Grid Col-2</a></li>
                                                                <li><a href="portfolio-grid-col-3.html">Grid Col-3</a></li>
                                                                <li><a href="portfolio-grid-col-4.html">Grid Col-4</a></li>
                                                                <li><a href="portfolio-grid-col-wide.html">Grid Col Wide</a></li>
                                                                <li><a href="portfolio-grid-no-gap.html">Grid No Gap</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="dropdown">
                                                            <a href="#">Sortable View</a>
                                                            <ul>
                                                                <li><a href="sortable-grid-col-2.html">Grid Col-2</a></li>
                                                                <li><a href="sortable-grid-col-3.html">Grid Col-3</a></li>
                                                                <li><a href="sortable-grid-col-4.html">Grid Col-4</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="dropdown">
                                                            <a href="#">Single Detail Style</a>
                                                            <ul>
                                                                <li><a href="single-detail-style-1.html">Single Detail Style 1</a></li>
                                                                <li><a href="single-detail-style-2.html">Single Detail Style 2</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown">
                                                    <a href="#">Blog</a>
                                                    <ul>
                                                        <li class="dropdown">
                                                            <a href="#">Masonry Grid</a>
                                                            <ul>
                                                                <li><a href="blog-masonry-col-2.html">Masonry Col-2</a></li>
                                                                <li><a href="blog-masonry-col-3.html">Masonry Col-3</a></li>
                                                                <li><a href="blog-masonry-col-4.html">Masonry Col-4</a></li>
                                                                <li><a href="blog-masonry-wide.html">Masonry Wide</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="dropdown">
                                                            <a href="#">Grid View</a>
                                                            <ul>
                                                                <li><a href="blog-grid-col-2.html">Grid Col-2</a></li>
                                                                <li><a href="blog-grid-col-3.html">Grid Col-3</a></li>
                                                                <li><a href="blog-grid-col-4.html">Grid Col-4</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="blog-classic.html">Blog Classic</a></li>
                                                        <li><a href="blog-single-detail.html">Blog Single Detail</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact-us.html">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    </nav>
                                </div>
                                <div class="pbmit-right-box d-flex align-items-center">
                                    <div class="pbmit-header-search-btn">
                                        <a href="#"><i class=" pbmit-base-icon-search-1"></i></a>
                                    </div>
                                    <div class="pbmit-button-box">
                                        <div class="pbmit-header-button">
                                            <div class="pbmit-svg-btn pbmit-ihbox-btn">
                                                <a href="contact-us.html" class="pbmit-btn pbmit-btn-outline">
                                                    <span class="pbmit-header-button-text">
                                                        Get In Touch
                                                        <svg class="pbmit-svg-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
                                                        <line x1="1" y1="18" x2="17.8" y2="1.2"></line>
                                                        <line x1="1.2" y1="1" x2="18" y2="1"></line>
                                                        <line x1="18" y1="17.8" x2="18" y2="1"></line>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pbmit-slider-area pbmit-slider-one">
                <div class="swiper-slider" data-autoplay="true" data-loop="true" data-dots="false" data-arrows="true" data-columns="1" data-margin="0" data-effect="fade">
                    <div class="swiper-wrapper">
                        {/* <!-- Slide1 --> */}
                        <div class="swiper-slide">
                            <div class="pbmit-slider-item">
                                <div 
                                    class="pbmit-slider-bg" 
                                    style={{backgroundImage: "url(assets/img/slider/partners.jpg)"}}>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-7">
                                            <div class="pbmit-slider-content">
                                                <h5 class="pbmit-sub-title transform-left transform-delay-1">Plan for Secure Future</h5>
                                                <h2 class="pbmit-title transform-left transform-delay-2"><strong>Pure Virgin</strong> <br></br> External Vaginal Wash. </h2>
                                                <div class="pbmit-desc transform-bottom transform-delay-3">
                                                    Devise and implement business strategies <br></br> for an entire business or division.
                                                </div>
                                                <div class="transform-bottom transform-delay-4">
                                                    <a href="contact-us.html" class="pbmit-btn pbmit-btn-white">
                                                        <span class="pbmit-header-button-text">
                                                            Contact Us 
                                                            <svg class="pbmit-svg-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
                                                            <line x1="1" y1="18" x2="17.8" y2="1.2"></line>
                                                            <line x1="1.2" y1="1" x2="18" y2="1"></line>
                                                            <line x1="18" y1="17.8" x2="18" y2="1"></line>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Slide2 --> */}
                        <div class="swiper-slide">
                            <div class="pbmit-slider-item">
                                <div class="pbmit-slider-bg" style={{backgroundImage: "url(assets/img/slider/iroko.png)"}}></div>   
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-7">
                                            <div class="pbmit-slider-content">
                                                <h5 class="pbmit-sub-title transform-left transform-delay-1">Improve Your Aspirations</h5>
                                                <h2 class="pbmit-title transform-left transform-delay-2"><strong>Acknowledge </strong> <br></br>the Unexpected.</h2>
                                                <div class="pbmit-desc transform-bottom transform-delay-3">
                                                    Devise and implement business strategies <br></br> for an entire business or division.
                                                </div>
                                                <div class="transform-bottom transform-delay-4">
                                                    <a href="contact-us.html" class="pbmit-btn pbmit-btn-white">
                                                        <span class="pbmit-header-button-text">
                                                            Contact Us 
                                                            <svg class="pbmit-svg-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
                                                            <line x1="1" y1="18" x2="17.8" y2="1.2"></line>
                                                            <line x1="1.2" y1="1" x2="18" y2="1"></line>
                                                            <line x1="18" y1="17.8" x2="18" y2="1"></line>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
   
    )
}

export default Header;