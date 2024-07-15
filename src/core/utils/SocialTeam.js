function SocialTeam ({fbUrl, xUrl, instaUrl, linkedUrl}) {    
    return (
        <ul className="pbmit-social-links pbmit-team-social-links">
            <li className="pbmit-social-li pbmit-social-facebook">
                <a href={fbUrl} title="Facebook" target="_blank" rel="noreferrer">
                    <span><i className="pbmit-base-icon-facebook-squared"></i></span>
                </a>
            </li>
            <li className="pbmit-social-li pbmit-social-twitter">
                <a href={xUrl} title="Twitter" target="_blank" rel="noreferrer">
                    <span><i className="pbmit-base-icon-twitter"></i></span>
                </a>
            </li>
            <li className="pbmit-social-li pbmit-social-instagram">
                <a href={instaUrl} title="Instagram" target="_blank" rel="noreferrer">
                    <span><i className="pbmit-base-icon-instagram"></i></span>
                </a>
            </li>
            <li className="pbmit-social-li pbmit-social-linkedin">
                <a href={linkedUrl} title="LinkedIn" target="_blank" rel="noreferrer">
                    <span><i className="pbmit-base-icon-linkedin"></i></span>
                </a>
            </li>
        </ul>
    )
}

export default SocialTeam;