import ProductNav from "./ProductNav";

function ProductInfo ({img, title, category, date, p1, p2, p3, img1, img2, img3, benefits, b1, b2, b3, b4, b5, linkPrev, linkNext, titlePrev, titleNext}) {
    return (
        <>
            <div class="pbmit-featured-img-wrapper">
                <img src={`/assets/img/product/${img}`} class="img-fluid w-100" alt=""></img>
            </div>
            <div class="pbmit-single-project-details-list">
                <ul class="pbmit-portfolio-lines-ul">
                    <li class="pbmit-portfolio-line-li">
                        <span class="pbmit-portfolio-line-title">Product: </span> 
                        <span class="pbmit-portfolio-line-value">{title}</span>
                    </li>
                    <li class="pbmit-portfolio-line-li"> 
                        <span class="pbmit-portfolio-line-title">Category: </span> 
                        <span class="pbmit-portfolio-line-value">{category}</span>
                    </li>
                    <li class="pbmit-portfolio-line-li"> 
                        <span class="pbmit-portfolio-line-title">Date: </span> 
                        <span class="pbmit-portfolio-line-value">{date}</span>
                    </li>
                </ul>
            </div>
            <div class="pbmit-pf-entry-content">
                <div class="row">
                    <div class="col-md-12 col-xl-5">
                        <div class="pbmit-heading-subheading animation-style2">
                            <h3 class="pbmit-title">01. Description :</h3>
                        </div>
                    </div>
                    <div class="col-md-12 col-xl-7">
                        <p>In the pursuit of optimal health and wellness, people are increasingly turning to natural remedies that have stood the test of time. Among these, the Iroko African Root stands out as a powerful blend of traditional medicinal plants known for their extensive health benefits. Sourced from the rich and diverse flora of Africa, the Iroko African Root is a unique combination of the <strong><span class="pbmit-underline"><u>Iroko Tree, Mahogany, Zingiber Officinale (Ginger), Clove, and Hunteria Umbellata</u></span></strong>. Each component contributes a myriad of health-promoting properties, making Iroko African Root a comprehensive solution for various health issues.</p>
                        <p class="pt-4"> {p2} </p>
                        <p class="pt-4"> {p3} </p>
                    </div>
                </div>
                <div class="pbmit-pf_imgbox">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="pbmit-animation-style1 active">
                                <img src={`/assets/img/product/${img1}`} class="img-fluid" alt="iroko"></img>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pbmit-animation-style4 active">
                                <img src={`/assets/img/product/${img2}`} class="img-fluid" alt=""></img>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pbmit-animation-style2 active">
                                <img src={`/assets/img/product/${img3}`} class="img-fluid" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pbmit-pf_content">
                    <div class="row">
                        <div class="col-md-12 col-xl-5">
                            <div class="pbmit-heading-subheading animation-style2">
                                <h3 class="pbmit-title">02. Incredible Benefits of Iroko :</h3>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-7">
                            <p> {benefits}
                            </p>
                            <ul class="list-group list-group-borderless">
                                <li class="list-group-item">
                                    <span class="pbmit-icon-list-icon">
                                        <i aria-hidden="true" class="ti-check"></i>
                                    </span>
                                    <span class="pbmit-icon-list-text">{b1} </span>
                                </li>
                                <li class="list-group-item">
                                    <span class="pbmit-icon-list-icon">
                                        <i aria-hidden="true" class="ti-check"></i>
                                    </span>
                                    <span class="pbmit-icon-list-text">{b2}</span>
                                </li>
                                <li class="list-group-item">
                                    <span class="pbmit-icon-list-icon">
                                        <i aria-hidden="true" class="ti-check"></i>
                                    </span>
                                    <span class="pbmit-icon-list-text">{b3}</span>
                                </li>
                                <li class="list-group-item">
                                    <span class="pbmit-icon-list-icon">
                                        <i aria-hidden="true" class="ti-check"></i>
                                    </span>
                                    <span class="pbmit-icon-list-text">{b4}</span>
                                </li>
                            </ul>
                            <div class="pbmit-ihbox-style-4">
                                <div class="pbmit-ihbox-icon">
                                    <div class="pbmit-ihbox-icon-wrapper">
                                        <div class="pbmit-icon-wrapper pbmit-icon-type-icon">
                                            <i class="pbmit-capigo-icon pbmit-capigo-icon-quote"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="pbmit-ihbox-contents">
                                    <h2 class="pbmit-element-title">
                                        {b5} 
                                    </h2>
                                    <h4 class="pbmit-element-subtitle">
                                        - Satisfied Client
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pbmit-pf-last_sec">
                    <div class="row">
                        <div class="col-md-12 col-xl-5">
                            <div class="pbmit-heading-subheading animation-style2">
                                <h3 class="pbmit-title">03. Ingredients :</h3>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-7">
                            <p>We have a passionate commitment to our work & to helping our clients achieve their objective. We combine unique technical <span class="pbmit-underline"><strong><u>expertise with world-class analytics</u></strong></span> . We provide room for entrepreneurial thinking and bestest grass-root innovation to achieve compelling results for both our clients’ projects & our own company. Since 1969, ICF has been been serving government at all levels, major corporations, and multilateral institutions. More than 4,500 employees serve these clients worldwide.</p>		
                        </div>
                    </div>
                </div>
            </div>

            <ProductNav 
                linkPrev={linkPrev} linkNext={linkNext} titlePrev={titlePrev} titleNext={titleNext}
            />
        </>
    )
}

export default ProductInfo;