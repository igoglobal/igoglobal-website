import { useLocation } from 'react-router-dom';


function Title ({ title, title2="", midName="", sectionName}) {
	const location = useLocation()
	
	const ctct = location.pathname !== "/contact-us"
	const serv = location.pathname !== "/services" 
	const abt = location.pathname !== "/about-us";
	const blog = location.pathname !== "/blogs"
	
	const irk = location.pathname !== "/iroko" 
	const pvirg = location.pathname !== "/pure-virgin"

    return (
        <div className={`pbmit-title-bar-wrapper 
			${!ctct ? "contact" : ""} ${!serv ? "services" : ""} ${!abt ? "about" : ""}
			${!irk ? "iroko" : ""} ${!pvirg ? "pvirgin" : ""} ${!blog ? "blog" : ""}`
		}>
			<div className="container">
				<div className="pbmit-title-bar-content">
					<div className="pbmit-title-bar-content-inner">
						<h1 className="pbmit-tbar-title"> {title} <br></br> {title2} </h1>
						<div className="pbmit-breadcrumb">
							<div className="pbmit-breadcrumb-inner">
								<span><a title="" href="#" className="home"><span>igoglobal</span></a></span>
								<span className="sep">
									<i className="pbmit-base-icon-angle-right"></i>
								</span>
								<span><a title="" href="#" className="home"><span>{midName}</span></a></span>
								<span className="sep">
									<i className="pbmit-base-icon-angle-right"></i>
								</span>
								<span><a title="" href="#" className="home"><span>{sectionName}</span></a></span>
							</div>
						</div>
					</div>
				</div> 
			</div> 
		</div>
    )
}

export default Title;