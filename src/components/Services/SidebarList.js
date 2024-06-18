import { Link } from "react-router-dom";

function SidebarList () {
    return (
        <aside class="widget post-list">
            <h2 class="widget-title">Our Services</h2>
            <div class="all-post-list">
                <ul>
                    <li class="post-active">
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