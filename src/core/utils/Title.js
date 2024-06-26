function Title ({ title, sectionName}) {
    return (
        <div className="pbmit-title-bar-wrapper">
			<div className="container">
				<div className="pbmit-title-bar-content">
					<div className="pbmit-title-bar-content-inner">
						<h1 className="pbmit-tbar-title"> {title} </h1>
						<div className="pbmit-breadcrumb">
							<div className="pbmit-breadcrumb-inner">
								<span><a title="" href="#" className="home"><span>igoglobal</span></a></span>
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