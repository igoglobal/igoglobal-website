import { useLocation } from 'react-router-dom';

import Slider from './Slider';
import Nav from './Nav';

function Header () {
    const location = useLocation();
    const isNotHomePage = location.pathname !== "/contact-us" && location.pathname !== "/services" 
            && location.pathname !== "/iroko" && location.pathname !== "/pure-virgin"
            && location.pathname !== "/about-us";
    
    return (
        <header className="site-header header-style-1">
            <Nav></Nav>
            {isNotHomePage && <Slider></Slider>}
        </header>
    )
}

export default Header;