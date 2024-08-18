import { useLocation, useParams } from 'react-router-dom';

import Slider from './Slider';
import Nav from './Nav';
import blogData from '../../core/data/blogData';

function Header () {
    const { blogId } = useParams();
    const location = useLocation();

    const isNotHomePage = location.pathname !== "/contact-us" && location.pathname !== "/services" 
            && location.pathname !== "/iroko" && location.pathname !== "/pure-virgin"
            && location.pathname !== "/about-us" && location.pathname !== "/blogs"
            && location.pathname !== `/blogs/${blogId}`;
    
    

    return (
        <header className="site-header header-style-1">
            <Nav></Nav>
            {isNotHomePage && <Slider></Slider>}
        </header>
    )
}

export default Header;