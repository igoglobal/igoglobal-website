import { Link } from "react-router-dom";
import SocialTeam from "./SocialTeam";

function Member ({title, name, img}) {
    return (
        <article className="pbmit-team-style-3 swiper-slide">
            <div className="pbminfotech-post-item">
                <div className="pbminfotech-box-content">
                    <div className="pbminfotech-box-team-position">{title}</div>
                    <div className="pbmit-featured-img-wrapper">
                        <div className="pbmit-featured-wrapper">
                            <img 
                                src={`/assets/img/team/${img}`}
                                className="img-fluid" alt=""
                            />
                        </div>
                    </div>
                    <div className="pbmit-team-title-wapper">
                        <h3 className="pbmit-team-title">
                            <a href="team-member-detail.html">{name}</a>
                        </h3>
                    </div>
                    <div className="pbminfotech-box-social-links">
                        <SocialTeam 
                            fbUrl=""
                            xUrl=""
                            instaUrl=""
                            linkedUrl=""
                        />
                    </div>
                </div>
                <Link to="/" className="pbmit-link"> </Link>
            </div>
        </article>
    )
}

export default Member;