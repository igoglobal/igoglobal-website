import SidebarConsult from "./SidebarConsult";
import SidebarList from "./SidebarList";
import SidebarProfile from "./SidebarProfile";


function ServicesSidebar () {
    return (
        <div class="col-lg-3 service-left-col order-2 order-lg-1 sidebar">
            <aside class="service-sidebar">
                <SidebarList/>
                <SidebarConsult/>
                <SidebarProfile/>
            </aside>
        </div>
    )
}

export default ServicesSidebar;