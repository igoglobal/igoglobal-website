import { useLocation } from 'react-router-dom';

import Slider from './Slider';
import Nav from './Nav';

function Header () {
    const location = useLocation();
    const onlyNav = location.pathname !== "/contact-us";
    
    return (
        <header class="site-header header-style-1">
            <Nav></Nav>
            {onlyNav && <Slider></Slider>}
        </header>
   
    )
}

export default Header;