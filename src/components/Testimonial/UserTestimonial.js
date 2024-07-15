function UserTestimonial ({img, username, clientType, comment}) {
    return (
        <article className="pbmit-testimonial-style-1 swiper-slide">
            <div className="pbminfotech-post-item">
                <div className="pbminfotech-box-content">
                    <div className="pbminfotech-conten-inner">
                        <div className="pbminfotech-box-wapper">
                            <div className="pbmit-featured-img-wrapper">
                                <div className="pbmit-featured-wrapper">
                                    <img src={`https://igogolobal-assets.s3.eu-west-2.amazonaws.com/images/${img}`} className="img-fluid" alt=""></img>
                                </div>
                            </div>
                            <div className="pbminfotech-box-author">
                                <h3 className="pbminfotech-box-title">{username}</h3>
                                <div className="pbminfotech-testimonial-detail">{clientType}</div>
                            </div>
                        </div>
                        <div className="pbminfotech-box-star-ratings">
                            <i className="pbmit-base-icon-star pbmit-active"></i>
                            <i className="pbmit-base-icon-star pbmit-active"></i>
                            <i className="pbmit-base-icon-star pbmit-active"></i>
                            <i className="pbmit-base-icon-star "></i>
                            <i className="pbmit-base-icon-star"></i>
                        </div>
                    </div>
                    <blockquote className="pbminfotech-testimonial-text">
                        <p>{comment}</p>
                    </blockquote>
                </div>
            </div>
        </article>
    )
}

export default UserTestimonial;