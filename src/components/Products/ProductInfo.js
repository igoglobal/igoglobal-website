import ItemNav from "../../core/utils/ItemNav";

function ProductInfo ({img, title, category, date, p1, p2, p3, img1, img2, img3, benefits, b1, b2, b3, b4, b5, linkPrev, linkNext, titlePrev, titleNext}) {
    return (
        <>
            <div className="pbmit-featured-img-wrapper">
                <img src={`/assets/img/product/${img}`} className="img-fluid w-100" alt=""></img>
            </div>
            <div className="pbmit-single-project-details-list">
                <ul className="pbmit-portfolio-lines-ul">
                    <li className="pbmit-portfolio-line-li">
                        <span className="pbmit-portfolio-line-title">Product: </span> 
                        <span className="pbmit-portfolio-line-value">{title}</span>
                    </li>
                    <li className="pbmit-portfolio-line-li"> 
                        <span className="pbmit-portfolio-line-title">Category: </span> 
                        <span className="pbmit-portfolio-line-value">{category}</span>
                    </li>
                    <li className="pbmit-portfolio-line-li"> 
                        <span className="pbmit-portfolio-line-title">Date: </span> 
                        <span className="pbmit-portfolio-line-value">{date}</span>
                    </li>
                </ul>
            </div>
            <div className="pbmit-pf-entry-content">
                <div className="row">
                    <div className="col-md-12 col-xl-5">
                        <div className="pbmit-heading-subheading animation-style2">
                            <h3 className="pbmit-title">01. Description :</h3>
                        </div>
                    </div>
                    <div className="col-md-12 col-xl-7">
                        <p>In the pursuit of optimal health and wellness, people are increasingly turning to natural remedies that have stood the test of time. Among these, the Iroko African Root stands out as a powerful blend of traditional medicinal plants known for their extensive health benefits. Sourced from the rich and diverse flora of Africa, the Iroko African Root is a unique combination of the <strong><span className="pbmit-underline"><u>Iroko Tree, Mahogany, Zingiber Officinale (Ginger), Clove, and Hunteria Umbellata</u></span></strong>. Each component contributes a myriad of health-promoting properties, making Iroko African Root a comprehensive solution for various health issues.</p>
                        <p className="pt-4"> {p2} </p>
                        <p className="pt-4"> {p3} </p>
                    </div>
                </div>
                <div className="pbmit-pf_imgbox">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="pbmit-animation-style1 active">
                                <img src={`/assets/img/product/${img1}`} className="img-fluid" alt="iroko"></img>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pbmit-animation-style4 active">
                                <img src={`/assets/img/product/${img2}`} className="img-fluid" alt=""></img>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pbmit-animation-style2 active">
                                <img src={`/assets/img/product/${img3}`} className="img-fluid" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pbmit-pf_content">
                    <div className="row">
                        <div className="col-md-12 col-xl-5">
                            <div className="pbmit-heading-subheading animation-style2">
                                <h3 className="pbmit-title">02. Incredible Benefits of Iroko :</h3>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-7">
                            <p> {benefits}
                            </p>
                            <ul className="list-group list-group-borderless">
                                <li className="list-group-item">
                                    <span className="pbmit-icon-list-icon">
                                        <i aria-hidden="true" className="ti-check"></i>
                                    </span>
                                    <span className="pbmit-icon-list-text">{b1} </span>
                                </li>
                                <li className="list-group-item">
                                    <span className="pbmit-icon-list-icon">
                                        <i aria-hidden="true" className="ti-check"></i>
                                    </span>
                                    <span className="pbmit-icon-list-text">{b2}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="pbmit-icon-list-icon">
                                        <i aria-hidden="true" className="ti-check"></i>
                                    </span>
                                    <span className="pbmit-icon-list-text">{b3}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="pbmit-icon-list-icon">
                                        <i aria-hidden="true" className="ti-check"></i>
                                    </span>
                                    <span className="pbmit-icon-list-text">{b4}</span>
                                </li>
                            </ul>
                            <div className="pbmit-ihbox-style-4">
                                <div className="pbmit-ihbox-icon">
                                    <div className="pbmit-ihbox-icon-wrapper">
                                        <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                            <i className="pbmit-capigo-icon pbmit-capigo-icon-quote"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="pbmit-ihbox-contents">
                                    <h2 className="pbmit-element-title">
                                        {b5} 
                                    </h2>
                                    <h4 className="pbmit-element-subtitle">
                                        - Satisfied Client
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pbmit-pf-last_sec">
                    <div className="row">
                        <div className="col-md-12 col-xl-5">
                            <div className="pbmit-heading-subheading animation-style2">
                                <h3 className="pbmit-title">03. Ingredients :</h3>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-7">
                            <p>We have a passionate commitment to our work & to helping our clients achieve their objective. We combine unique technical <span className="pbmit-underline"><strong><u>expertise with world-className analytics</u></strong></span> . We provide room for entrepreneurial thinking and bestest grass-root innovation to achieve compelling results for both our clients’ projects & our own company. Since 1969, ICF has been been serving government at all levels, major corporations, and multilateral institutions. More than 4,500 employees serve these clients worldwide.</p>		
                        </div>
                    </div>
                </div>
            </div>
            <ItemNav 
                linkPrev={linkPrev} linkNext={linkNext} titlePrev={titlePrev} titleNext={titleNext}
            />
        </>
    )
}

export default ProductInfo;