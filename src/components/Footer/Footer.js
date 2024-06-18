import Social from "../../core/utils/Social";
import FooterAddress from "./FooterAddress";
import FooterContact from "./FooterContact";
import FooterSearch from "./FooterSearch";
import FooterTitle from "./FooterTitle";
import TermsPolicy from "./TermsPolicy";

function Footer () {
    return (
        <footer class="site-footer pbmit-text-color-white">
            <div class="pbmit-footer-big-area-wrapper">
                <div class="container">
                    <div class="row">
                        <FooterTitle/>
                        <FooterSearch/>
                    </div>
                </div>
            </div>
            <div class="pbmit-footer-main-area">
                <div class="container">
                    <div class="pbmit-footer-widget-area">
                        <div class="container">
                            <div class="row g-2">
                                <FooterAddress/>
                                <FooterContact/>
                                <div class="col-md-4">
                                    <div class="widget">
                                        <h2 class="widget-title">Our Social</h2>
                                        <div class="textwidget">
                                            <Social/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pbmit-footer-text-area">
                        <div class="container">
                            <TermsPolicy/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;