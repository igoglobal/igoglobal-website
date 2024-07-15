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
                        {/* <!-- Slide1 --> */}
                        <article className="pbmit-service-style-1 swiper-slide">
                            <div className="pbminfotech-post-item">
                                <div className="pbminfotech-service-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="/assets/img/service/happy.avif" className="img-fluid" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbmit-service-icon-wrapper">
                                            <i className="pbmit-capigo-icon pbmit-capigo-icon-global"></i>			
                                        </div>
                                        <div className="pbmit-serv-cat">
                                            <a href="services.html" rel="tag">Health</a>
                                        </div>
                                        <h3 className="pbmit-service-title">
                                            <a href="service-detail.html">Comprehensive health support for your well-being.</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </article>
                        {/* <!-- Slide2 --> */}
                        <article className="pbmit-service-style-1 swiper-slide">
                            <div className="pbminfotech-post-item">
                                <div className="pbminfotech-service-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="/assets/img/service/wellness.avif" className="img-fluid" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbmit-service-icon-wrapper">
                                            <i className="pbmit-capigo-icon pbmit-capigo-icon-global"></i>			
                                        </div>
                                        <div className="pbmit-serv-cat">
                                            <a href="services.html" rel="tag">Wellness</a>
                                        </div>
                                        <h3 className="pbmit-service-title">
                                            <a href="service-detail.html">Balanced and healthy lifestyle programs</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </article>
                        {/* <!-- Slide3 --> */}
                        <article className="pbmit-service-style-1 swiper-slide">
                            <div className="pbminfotech-post-item">
                                <div className="pbminfotech-service-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="/assets/img/service/home.avif" className="img-fluid" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbmit-service-icon-wrapper">
                                            <i className="pbmit-capigo-icon pbmit-capigo-icon-global"></i>			
                                        </div>
                                        <div className="pbmit-serv-cat">
                                            <a href="services.html" rel="tag">Real Estate</a>
                                        </div>
                                        <h3 className="pbmit-service-title">
                                            <a href="service-detail.html">Real estate solutions for buying, selling, and investing</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </article>
                        {/* <!-- Slide4 --> */}
                        <article className="pbmit-service-style-1 swiper-slide">
                            <div className="pbminfotech-post-item">
                                <div className="pbminfotech-service-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="/assets/img/service/education.avif" className="img-fluid" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbmit-service-icon-wrapper">
                                            <i className="pbmit-capigo-icon pbmit-capigo-icon-global"></i>			
                                        </div>
                                        <div className="pbmit-serv-cat">
                                            <a href="services.html" rel="tag">Education</a>
                                        </div>
                                        <h3 className="pbmit-service-title">
                                            <a href="service-detail.html">Educational programs and resources for learning and development</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </article>
                        {/* <!-- Slide5 --> */}
                        <article className="pbmit-service-style-1 swiper-slide">
                            <div className="pbminfotech-post-item">
                                <div className="pbminfotech-service-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="/assets/img/service/technology.avif" className="img-fluid" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbmit-service-icon-wrapper">
                                            <i className="pbmit-capigo-icon pbmit-capigo-icon-global"></i>			
                                        </div>
                                        <div className="pbmit-serv-cat">
                                            <a href="#" rel="tag">Technology</a>
                                        </div>
                                        <h3 className="pbmit-service-title">
                                            <a href="#">Innovative tech services and solutions for the digital age.</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Service;