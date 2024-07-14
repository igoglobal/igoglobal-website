import SidebarList from "./SidebarList";
import ReachUs from "../../core/utils/ReachUs";
import SidebarProfile from "./SidebarProfile";


function ServicesSidebar () {
    return (
        <div className="col-lg-3 service-left-col order-2 order-lg-1 sidebar">
            <aside className="service-sidebar">
                <SidebarList/>
                <ReachUs />
                <SidebarProfile/>
                {/* Format the code below */}
                <aside className="widget">
                    <h2 className="widget-title">Best Services</h2>
                    <div className="widget-image">
                        <img src="./assets/img/service/slide.avif" style={{width: "100%"}}></img>
                    </div>
                </aside>
                <aside className="widget">
                    <div className="widget-image" >
                        <img src="./assets/img/service/lightdown.avif" style={{width: "100%"}}></img>
                    </div>
                </aside>
            </aside>
        </div>
    )
}

export default ServicesSidebar;