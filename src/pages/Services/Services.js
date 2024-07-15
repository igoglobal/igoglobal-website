import ServicesBody from "../../components/Services/ServicesBody";
import ServicesFaq from "../../components/Services/ServicesFaq";
import ServicesSidebar from "../../components/Services/ServicesSidebar";

import Title from "../../core/utils/Title";


function Services () {
    return (
        <>
            <Title
                title="Quality Services"
                sectionName="Services"
            />
            <div className="page-content">
                <section className="service_details">
                    <div className="container">
                        <div className="row">
                            <ServicesSidebar/>
                            <div className="col-lg-9 service-right-col order-1">
                                <div className="pbmit-service-single">
                                    <ServicesBody/>
                                    <ServicesFaq/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Services;