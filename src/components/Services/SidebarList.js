import { Link } from "react-router-dom";

function SidebarList () {
    return (
        <aside className="widget post-list">
            <h2 className="widget-title">Our Services</h2>
            <div className="all-post-list">
                <ul>
                    <li className="post-active">
                        <Link to='/services'> Excellece</Link>
                    </li>
                    <li><a href="#"> Health </a></li>
                    <li><a href="#"> Wellness </a></li>
                    <li><a href="#"> Real Estate </a></li>
                    <li><a href="#"> Education </a></li>
                    <li><a href="#"> Technology </a></li>
                </ul>
            </div>
        </aside>
    )
}

export default SidebarList;