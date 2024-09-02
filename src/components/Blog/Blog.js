import { Link } from "react-router-dom";

function Blog ({img, tag, date, title, link}) {

    return (
        <article className="pbmit-ele pbmit-blog-style-1 col-md-6">
            <div className="post-item">
                <div className="pbmit-featured-container">
                    <div className="pbmit-featured-img-wrapper">
                        <div className="pbmit-featured-wrapper">
                            <img src={img} className="img-fluid" alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="pbminfotech-box-content">
                    <div className="pbmit-meta-cat-wrapper pbmit-meta-line d-flex align-items-center">
                        <div className="pbmit-meta-category">
                            <a rel="category tag">{tag}</a>
                        </div>
                        <div className="pbmit-meta-date">
                            <span className="pbmit-date-wrap">{date}</span>
                        </div>
                    </div>
                    <h3 className="pbmit-post-title">
                        <a >{title}</a>
                    </h3>
                    <div className="pbmit-svg-btn">
                        <Link className="btn-arrow" to={`/blogs/${link}`}>
                            Read More				
                            <svg className="pbmit-svg-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
                                <line x1="1" y1="18" x2="17.8" y2="1.2"></line>
                                <line x1="1.2" y1="1" x2="18" y2="1"></line>
                                <line x1="18" y1="17.8" x2="18" y2="1"></line>
                            </svg>
                        </Link>
                    </div>
                </div>
                <Link to={`/blogs/${link}`} className="pbmit-link" />
            </div>
        </article>
    )
}

export default Blog;