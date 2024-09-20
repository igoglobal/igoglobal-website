import ServiceSlide from "../../components/Services/ServiceSlide";
import serviceData from "../data/serviceData";

function Service () {
    return (
        <section className="section-lgx pbmit-bg-color-blackish overflow-hidden">
        <div className="container pbmit-col-stretched-yes pbmit-col-right">
            <div className="row align-items-center">
                <div className="col-md-8 col-xl-6">
                    <div className="pbmit-heading-subheading pbmit-text-color-white animation-style2">
                        <h4 className="pbmit-subtitle">Our Service</h4>
                        <h2 className="pbmit-title">We offer a great number of services</h2>
                    </div>
                </div>
                <div className="col-md-4 col-xl-6">
                    <div className="service-one-arrow swiper-btn-custom d-flex flex-row-reverse"></div>
                </div>
            </div>
            <div className="pbmit-col-stretched-right">
                <div className="swiper-slider" data-arrows-class="service-one-arrow" data-loop="true" data-autoplay="true" data-dots="false" data-arrows="true" data-columns="3.2" data-margin="30" data-effect="slide">
                    <div className="swiper-wrapper">
                        {
                            serviceData.map(service => (
                                <ServiceSlide 
                                    key={service.title}
                                    img={service.img}
                                    title={service.title}
                                    desc={service.desc}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Service;