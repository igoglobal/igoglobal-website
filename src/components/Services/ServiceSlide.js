function ServiceSlide ({img, title, desc}) {
    return (
        <article className="pbmit-service-style-1 swiper-slide">
            <div className="pbminfotech-post-item">
                <div className="pbminfotech-service-content">
                    <div className="pbmit-featured-img-wrapper">
                        <div className="pbmit-featured-wrapper">
                            <img src={`https://igogolobal-assets.s3.eu-west-2.amazonaws.com/images/${img}`} className="img-fluid" alt=""></img>
                        </div>
                    </div>
                    <div className="pbminfotech-box-content">
                        <div className="pbmit-service-icon-wrapper">
                            <i className="pbmit-capigo-icon pbmit-capigo-icon-global"></i>			
                        </div>
                        <div className="pbmit-serv-cat">
                            <a href="#" rel="tag">{title}</a>
                        </div>
                        <h3 className="pbmit-service-title">
                            <a href="#">{desc}</a>
                        </h3>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ServiceSlide;