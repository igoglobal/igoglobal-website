import { Link } from "react-router-dom";

function Post({ img, tag, date, title, link }){
    return (
        <article className="pbmit-blog-style-2">
            <div className="post-item">
                <div className="pbminfotech-box-content d-flex justify-content-between align-items-center">
                    <div className="pbmit-featured-img-wrapper">
                        <div className="pbmit-featured-wrapper">
                            <img src={img} className="img-fluid" alt=""></img>
                        </div>
                    </div>
                    <div className="pbmit-content-wrapper">
                        <div className="pbmit-meta-cat-wrapper pbmit-meta-line d-flex align-items-center">
                            <div className="pbmit-meta-category">
                                <span rel="category tag">{tag}</span>
                            </div>
                            <div className="pbmit-meta-date">
                                <span className="pbmit-date-wrap">{date}</span>
                            </div>
                        </div>
                        <h3 className="pbmit-post-title">
                            <Link to={`/blogs/${link}`}>{title}</Link>
                        </h3>
                    </div>
                    <div className="pbmit-svg-btn">
                        <Link className="btn-arrow" to={`/blogs/${link}`}>
                            <svg className="pbmit-svg-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
                            <line x1="1" y1="18" x2="17.8" y2="1.2"></line>
                            <line x1="1.2" y1="1" x2="18" y2="1"></line>
                            <line x1="18" y1="17.8" x2="18" y2="1"></line>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}
export default Post;