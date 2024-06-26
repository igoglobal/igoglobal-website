import {Link} from 'react-router-dom'

function SidebarConsult () {
    return (
        <aside className="widget pbmit-service-ad">
            <div className="textwidget">
                <div className="pbmit-service-ads">
                    <div className="pbmit-logo-img">
                        <img src="images/service-logo.svg" alt=""></img>
                    </div>
                    <div className="pbmit-ads-title">
                        <h3 className="pbmit-title-one">Excellent</h3>
                        <h3 className="pbmit-title-second">Health Services</h3>
                    </div>
                    <div className="pbmit-ads-contact">
                        <div className="pbmit-ads-number">+(234) 903-979-9817</div>
                    </div>
                    <div className="pbmit-svg-btn">
                        <Link to="/contact-us" className="pbmit-btn pbmit-btn-white">
                            Get In Touch
                            <svg className="pbmit-svg-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
                                <line x1="1" y1="18" x2="17.8" y2="1.2"></line>
                                <line x1="1.2" y1="1" x2="18" y2="1"></line>
                                <line x1="18" y1="17.8" x2="18" y2="1"></line>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </aside>

    )
}

export default SidebarConsult;