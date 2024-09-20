import { Link } from "react-router-dom";

function Swiper ({img, minTitle, title, subTitle, text, subText}) {
    return (
        <div className="swiper-slide">
            <div className="pbmit-slider-item">
                <div 
                    className="pbmit-slider-bg" 
                    style={{backgroundImage: `url(${img})`}}>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="pbmit-slider-content">
                                <h5 className="pbmit-sub-title transform-left transform-delay-1">{minTitle}</h5>
                                <h2 className="pbmit-title transform-left transform-delay-2"><strong>{title}</strong> <br></br> {subTitle} </h2>
                                <div className="pbmit-desc transform-bottom transform-delay-3">
                                    {text} <br></br> {subText}.
                                </div>
                                <div className="transform-bottom transform-delay-4">
                                    <Link to="/contact-us" className="pbmit-btn pbmit-btn-white">
                                        <span className="pbmit-header-button-text">
                                            Contact Us 
                                            <svg className="pbmit-svg-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
                                            <line x1="1" y1="18" x2="17.8" y2="1.2"></line>
                                            <line x1="1.2" y1="1" x2="18" y2="1"></line>
                                            <line x1="18" y1="17.8" x2="18" y2="1"></line>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Swiper;