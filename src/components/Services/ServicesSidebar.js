import SidebarList from "./SidebarList";
import ReachUs from "../../core/utils/ReachUs";
import SidebarProfile from "./SidebarProfile";
import SidebarImg from "./SidebarImg";


function ServicesSidebar () {
    return (
        <div className="col-lg-3 service-left-col order-2 order-lg-1 sidebar">
            <aside className="service-sidebar">
                <SidebarList/>
                <ReachUs />
                <SidebarProfile/>
                <SidebarImg />
            </aside>
        </div>
    )
}

export default ServicesSidebar;