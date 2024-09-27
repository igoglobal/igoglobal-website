import { useLocation } from 'react-router-dom';

import Slider from './Slider';
import Nav from './Nav';

function Header () {
    const location = useLocation();

    const isNotHomePage = location.pathname !== "/contact-us" && location.pathname !== "/services" 
            && location.pathname !== "/iroko" && location.pathname !== "/pure-virgin"
            && location.pathname !== "/about-us" && location.pathname !== "/blogs"
            && location.pathname !== "/privacy-policy" && location.pathname !== "/terms-conditions"
            && location.pathname !== `/blogs/4567` && location.pathname !== `/blogs/8634` && location.pathname !== `/blogs/5678`;
            // && location.pathname !== `/blogs/${blogId}`;
    
    

    return (
        <header className="site-header header-style-1">
            <Nav></Nav>
            {isNotHomePage && <Slider></Slider>}
        </header>
    )
}

export default Header;