function Section ({ tag, title1, title2, content }) {
    return (
        <article className="pbmit-miconheading-style-1 swiper-slide">
            <div className="pbmit-ihbox-style-1">
                <div className="pbmit-ihbox-contents">
                    <h4 className="pbmit-element-subtitle"> {tag} </h4>
                    <h2 className="pbmit-element-title"> {title1} <br></br> {title2} </h2>
                    <div className="pbmit-heading-desc">
                        {content}
                    </div>
                    <div className="pbmit-ihbox-btn">
                        <a href="#">
                            <span>
                            Read More
                                <svg className="pbmit-svg-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
                                    <line x1="1" y1="18" x2="17.8" y2="1.2"></line>
                                    <line x1="1.2" y1="1" x2="18" y2="1"></line>
                                    <line x1="18" y1="17.8" x2="18" y2="1"></line>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <a className="pbmit-link" href="about-us.html"></a>
            </div>
        </article>
    )
}

export default Section;