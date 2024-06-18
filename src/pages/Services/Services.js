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
            <div class="page-content">
                <section class="service_details">
                    <div class="container">
                        <div class="row">
                            <ServicesSidebar/>
                            <div class="col-lg-9 service-right-col order-1">
                                <div class="pbmit-service-single">
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