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
                    <li><a href="#"> Health & Wellness </a></li>
                    <li><a href="#"> Real Estate </a></li>
                    <li><a href="#"> e-Learning </a></li>
                    <li><a href="#"> Technology </a></li>
                    <li><a href="#"> Expert Consultation </a></li>
                    <li><a href="#"> Market Research </a></li>
                </ul>
            </div>
        </aside>
    )
}

export default SidebarList;