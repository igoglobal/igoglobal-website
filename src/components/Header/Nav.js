import { Link } from 'react-router-dom';

function Nav () {
    return (
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
                                                    <Link to='/'> Home</Link>
                                                    <ul>
                                                        <li class="active">
                                                            <Link to='/'> Homepage 01</Link>
                                                        </li>
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
                                                <li>
                                                     <Link to='/contact-us'> Contact Us</Link>
                                                </li>
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
                                                <Link to='/contact-us' class="pbmit-btn pbmit-btn-outline">
                                                    <span class="pbmit-header-button-text">
                                                        Get In Touch
                                                        <svg class="pbmit-svg-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
                                                        <line x1="1" y1="18" x2="17.8" y2="1.2"></line>
                                                        <line x1="1.2" y1="1" x2="18" y2="1"></line>
                                                        <line x1="18" y1="17.8" x2="18" y2="1"></line>
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Nav;