import { Link } from 'react-router-dom';

function Nav () {
    return (
        <div class="pbmit-header-overlay">
            {/* <div class="pbmit-pre-header-wrapper pbmit-text-color-white">
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
            </div> */}
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
                                            <li class="active"> <Link to='/'> Home</Link> </li>
                                            <li class="dropdown">
                                                <a href="#">Pages</a>
                                                <ul>
                                                    <li><a href="about-us.html">About Us</a></li>
                                                    <li> <Link to='/services'> Services</Link> </li>
                                                    <li><a href="#">Blogs</a></li>
                                                    <li><a href="#">Our Team Member</a></li>
                                                    <li><a href="#">Team Member Detail</a></li>
                                                </ul>
                                            </li>
                                            <li> <Link to='/services' > Services </Link> </li>
                                            <li class="dropdown">
                                                <a href="#">Products</a>
                                                <ul>
                                                    <li> <Link to='/iroko'>Iroko Drink</Link> </li>
                                                    <li> <Link to="/pure-virgin">Pure Virgin</Link> </li>
                                                </ul>
                                            </li>
                                            <li> <Link to='/contact-us'> Contact Us</Link> </li>
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