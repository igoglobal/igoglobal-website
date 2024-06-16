import ServicesBody from "../../components/Services/ServicesBody";
import ServicesFaq from "../../components/Services/ServicesFaq";
import ServicesSidebar from "../../components/Services/ServicesSidebar";
import ServicesTitle from "../../components/Services/ServicesTitle";


function Services () {
    return (
        <>
            <ServicesTitle/>
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