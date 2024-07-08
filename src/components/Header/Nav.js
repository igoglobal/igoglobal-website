import { Link } from 'react-router-dom';

function Nav () {
    return (
        <div className="pbmit-header-overlay">
            <div className="pbmit-pre-header-wrapper pbmit-text-color-white">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between">
                        <div className="pbmit-pre-header-left">
                            <ul className="pbmit-contact-info">
                            <li><i className="pbmit-base-icon-placeholder"></i>Ikeja City, Lagos Nigeria</li>
                            </ul>
                        </div>
                        <div className="pbmit-pre-header-right">
                            <ul className="pbmit-contact-info">
                            <li><i className="pbmit-base-icon-email"></i>info@igoglobal.io</li>
                            <li><i className="pbmit-base-icon-call"></i>+(234) 903-979-9817</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pbmit-main-header-area">
                <div className="container-fluid">
                    <div className="pbmit-header-content d-flex align-items-center justify-content-between">
                        <div className="site-branding">
                            <h1 className="site-title">
                                <Link to='/' >
                                    <img className="logo-img" src="/assets/img/igoglobal.png" alt="igo"></img>
                                    <img className="pbmit-responsive-logo" src="/assets/img/igoglobal.png" alt="igo"></img>
                                </Link>

                                {/* <a href="/">
                                    <img className="logo-img" src="/assets/img/igoglobal.png" alt="igo"></img>
                                    <img className="pbmit-responsive-logo" src="/assets/img/igoglobal.png" alt="igo"></img>
                                </a> */}
                            </h1>
                        </div>
                        <div className="pbmit-menuarea d-flex align-items-center">
                            <div className="site-navigation">
                                <nav className="main-menu navbar-expand-xl navbar-light">
                                <div className="navbar-header">
                                    {/* <!-- Toggle Button -->  */}
                                    <button className="navbar-toggler" type="button">
                                        <i className="pbmit-base-icon-menu-1"></i>
                                    </button>
                                </div>
                                <div className="pbmit-mobile-menu-bg"></div>
                                <div className="collapse navbar-collapse clearfix show" id="pbmit-menu">
                                    <div className="pbmit-menu-wrap">
                                        <span className="closepanel">
                                            <i className="pbmit-base-icon-close-circular-button-symbol"></i>
                                        </span>
                                        <ul className="navigation clearfix">
                                            <li className="active"> <Link to='/'> Home</Link> </li>
                                            <li className="dropdown">
                                                <a href="#">Pages</a>
                                                <ul>
                                                    <li><Link to="/about-us">About Us </Link></li>
                                                    <li> <Link to='/services'> Services</Link> </li>
                                                    <li><a href="#">Blogs</a></li>
                                                    <li><a href="#">Our Team Member</a></li>
                                                    <li><a href="#">Team Member Detail</a></li>
                                                </ul>
                                            </li>
                                            <li> <Link to='/services' > Services </Link> </li>
                                            <li className="dropdown">
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
                            <div className="pbmit-right-box d-flex align-items-center">
                                <div className="pbmit-header-search-btn">
                                    <a href="#"><i className=" pbmit-base-icon-search-1"></i></a>
                                </div>
                                <div className="pbmit-button-box">
                                    <div className="pbmit-header-button">
                                        <div className="pbmit-svg-btn pbmit-ihbox-btn">
                                            <Link to='/chat' className="pbmit-btn pbmit-btn-outline">
                                                <span className="pbmit-header-button-text">
                                                    Igo chatbot 🤗
                                                    <svg className="pbmit-svg-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
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