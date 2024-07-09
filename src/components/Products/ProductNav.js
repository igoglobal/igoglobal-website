import { Link } from "react-router-dom";

function ProductNav ({linkPrev, linkNext, titlePrev, titleNext}) {
    return (
        <div class="navigation post-navigation" aria-label="Posts">
            <div class="nav-links">
                <div class="nav-previous">
                    <Link to={`/${linkPrev}`}>
                        <span class="pbmit-post-nav-icon">
                            <i class="pbmit-base-icon-arrow-left"></i>
                            <span class="pbmit-post-nav-head">Older Product</span>
                        </span>
                        <span class="pbmit-post-nav-wrapper">
                            <span class="pbmit-post-nav nav-title">{titlePrev}</span> 
                        </span>
                    </Link>
                </div>
                <div class="nav-next">
                    <Link to={`/${linkNext}`} rel="next">
                        <span class="pbmit-post-nav-icon">
                            <span class="pbmit-post-nav-head">Newer Product</span>
                            <i class="pbmit-base-icon-arrow-right"></i>
                        </span>
                        <span class="pbmit-post-nav-wrapper">
                            <span class="pbmit-post-nav nav-title">{titleNext}</span> 
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductNav;