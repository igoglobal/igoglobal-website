function Title ({ title, sectionName}) {
    return (
        <div class="pbmit-title-bar-wrapper">
			<div class="container">
				<div class="pbmit-title-bar-content">
					<div class="pbmit-title-bar-content-inner">
						<h1 class="pbmit-tbar-title"> {title} </h1>
						<div class="pbmit-breadcrumb">
							<div class="pbmit-breadcrumb-inner">
								<span><a title="" href="#" class="home"><span>igoglobal</span></a></span>
								<span class="sep">
									<i class="pbmit-base-icon-angle-right"></i>
								</span>
								<span><a title="" href="#" class="home"><span>{sectionName}</span></a></span>
							</div>
						</div>
					</div>
				</div> 
			</div> 
		</div>
    )
}

export default Title;