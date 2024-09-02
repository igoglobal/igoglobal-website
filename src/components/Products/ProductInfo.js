import ItemNav from "../../core/utils/ItemNav";

function ProductInfo ({img, title, category, date, p1, p2, p3, img1, img2, img3, 
        defImg, benefitImg, ingImg, benefits, b1, b2, b3, b4, prodImg, 
        linkPrev, linkNext, titlePrev, titleNext, ing1, ing2, ing3, ing4}) {
    return (
        <>
            <div className="pbmit-featured-img-wrapper">
                <img src={`https://igogolobal-assets.s3.eu-west-2.amazonaws.com/images/${img}`} className="img-fluid w-100" alt=""></img>
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
                        <div>
                            <img src={`./assets/img/product/${defImg}`} style={{width: "70%"}}></img>
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
                                <img src={`./assets/img/product/${img1}`} className="img-fluid" alt="iroko"></img>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pbmit-animation-style4 active">
                                <img src={`./assets/img/product/${img2}`} className="img-fluid" alt=""></img>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pbmit-animation-style2 active">
                                <img src={`./assets/img/product/${img3}`} className="img-fluid" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pbmit-pf_content">
                    <div className="row">
                        <div className="col-md-12 col-xl-5">
                            <div className="pbmit-heading-subheading animation-style2">
                                <h3 className="pbmit-title">02. Benefits of {title} :</h3>
                            </div>
                            <div>
                                {/* <img src="https://igogolobal-assets.s3.eu-west-2.amazonaws.com/images/benefit.avif" style={{width: "80%"}}></img> */}
                                <img src={`./assets/img/product/${benefitImg}`} style={{width: "80%"}}></img>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-7" style={{marginTop: "4rem"}}>
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
                        </div>
                    </div>
                </div>
                <div className="pbmit-pf-last_sec">
                    <div className="row">
                        <div className="col-md-12 col-xl-5">
                            <div className="pbmit-heading-subheading animation-style2">
                                <h3 className="pbmit-title">03. Ingredients :</h3>
                            </div>
                            <div>
                                <img src={`./assets/img/product/${ingImg}`} style={{width: "80%"}}></img>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-7" style={{marginTop: "5rem"}}>
                            <p > {ing1} </p>		
                            <p> {ing2} </p>		
                            <p> {ing3} </p>		
                            <p> {ing4} </p>		
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