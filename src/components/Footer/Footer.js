import Social from "../../core/utils/Social";
import FooterAddress from "./FooterAddress";
import FooterContact from "./FooterContact";
import FooterSearch from "./FooterSearch";
import FooterTitle from "./FooterTitle";
import TermsPolicy from "./TermsPolicy";

function Footer () {
    return (
        <footer className="site-footer pbmit-text-color-white">
            <div className="pbmit-footer-big-area-wrapper">
                <div className="container">
                    <div className="row">
                        <FooterTitle/>
                        <FooterSearch/>
                    </div>
                </div>
            </div>
            <div className="pbmit-footer-main-area">
                <div className="container">
                    <div className="pbmit-footer-widget-area">
                        <div className="container">
                            <div className="row g-2">
                                <FooterAddress/>
                                <FooterContact/>
                                <div className="col-md-4">
                                    <div className="widget">
                                        <h2 className="widget-title">Our Social</h2>
                                        <div className="textwidget">
                                            <Social/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pbmit-footer-text-area">
                        <div className="container">
                            <TermsPolicy/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;