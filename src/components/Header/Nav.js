import { Link, NavLink } from 'react-router-dom';

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
                                            <li> 
                                                <NavLink 
                                                    to='/' 
                                                    className={({isActive}) => (isActive ? "active" : "")}> Home
                                                </NavLink> 
                                            </li>
                                            <li> 
                                                <NavLink 
                                                    to="/about-us" 
                                                    className={({isActive}) => (isActive ? "active" : "")}>About Us 
                                                </NavLink> 
                                            </li>
                                            <li> 
                                                <NavLink 
                                                    to="/blogs" 
                                                    className={({isActive}) => (isActive ? "active" : "")}> Blog 
                                                </NavLink> 
                                            </li>
                                            <li> 
                                                <NavLink 
                                                    to='/services' 
                                                    className={({isActive}) => (isActive ? "active" : "")}> Services 
                                                </NavLink> 
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Products</a>
                                                <ul>
                                                    <li> <NavLink to='/iroko' className={({isActive}) => (isActive ? "active" : "")}>Iroko Drink</NavLink> </li>
                                                    <li> <NavLink to="/pure-virgin" className={({isActive}) => (isActive ? "active" : "")}>Pure Virgin</NavLink> </li>
                                                </ul>
                                            </li>
                                            <li> <NavLink to='/contact-us' className={({isActive}) => (isActive ? "active" : "")}> Contact Us</NavLink> </li>
                                        </ul>
                                    </div>
                                </div>
                                </nav>
                            </div>
                            <div className="pbmit-right-box d-flex align-items-center">
                                {/* <div className="pbmit-header-search-btn">
                                    <a href="#"><i className=" pbmit-base-icon-search-1"></i></a>
                                </div> */}
                                <div className="pbmit-button-box">
                                    <div className="pbmit-header-button">
                                        <div className="pbmit-svg-btn pbmit-ihbox-btn">
                                            <a href='https://myigoglobal.com/' className="pbmit-btn pbmit-btn-outline" target='blank' rel='noopener'>
                                            {/* <Link to='/chat' className="pbmit-btn pbmit-btn-outline"> */}
                                                <span className="pbmit-header-button-text">
                                                    Login
                                                    <svg className="pbmit-svg-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
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
    )
}

export default Nav;