import { Link } from "react-router-dom";

function ItemNav ({linkPrev, linkNext, titlePrev, titleNext}) {

    return (
        <div className="navigation post-navigation" aria-label="Posts">
            <div className="nav-links">
                <div className="nav-previous">
                    <Link to={`${linkPrev}`}>
                        <span className="pbmit-post-nav-icon">
                            <i className="pbmit-base-icon-arrow-left"></i>
                            <span className="pbmit-post-nav-head">Older Blog</span>
                        </span>
                        <span className="pbmit-post-nav-wrapper">
                            <span className="pbmit-post-nav nav-title">{titlePrev}</span> 
                        </span>
                    </Link>
                </div>
                <div className="nav-next">
                    <Link to={`${linkNext}`} rel="next">
                        <span className="pbmit-post-nav-icon">
                            <span className="pbmit-post-nav-head">Newer Blog</span>
                            <i className="pbmit-base-icon-arrow-right"></i>
                        </span>
                        <span className="pbmit-post-nav-wrapper">
                            <span className="pbmit-post-nav nav-title">{titleNext}</span> 
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ItemNav;