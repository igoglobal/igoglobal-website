import { Link } from "react-router-dom";

function TermsPolicy () {
    return (
        <div className="pbmit-footer-text-inner">
            <div className="row">
                <div className="col-md-6">
                    <div className="pbmit-footer-copyright-text-area">
                        Copyright © 2024 <a href="https://myigoglobal.com">Igoglobal International Inc.</a> All Rights Reserved.
                    </div>
                </div>
                <div className="col-md-6">
                    <div className=" pbmit-footer-menu-area">
                        <ul>
                            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>		
            </div>
        </div>
    )
}

export default TermsPolicy;