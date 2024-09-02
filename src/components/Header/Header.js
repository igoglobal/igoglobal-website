import { useLocation, useParams } from 'react-router-dom';

import Slider from './Slider';
import Nav from './Nav';
import blogData from '../../core/data/blogData';

function Header () {
    const { blogId } = useParams();
    const location = useLocation();

    console.log(`value here ${blogId}`)

    const isNotHomePage = location.pathname !== "/contact-us" && location.pathname !== "/services" 
            && location.pathname !== "/iroko" && location.pathname !== "/pure-virgin"
            && location.pathname !== "/about-us" && location.pathname !== "/blogs"
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