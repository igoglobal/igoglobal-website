import Comment from "../../components/Blog/Comment";
import Details from "../../components/Blog/Details";
import Sidebar from "../../components/Blog/Sidebar";
import Title from "../../core/utils/Title";

function Blog () {
    return (
		<>
			<Title 
				title='The Ultimate Natural'
				title2="Solution for Feminine Health"
				midName="blog"
                sectionName='The Ultimate Natural Solution for Feminine Health'
			/>
			<section className="site_content">
				<div className="container">
					<div className="row">
						<div className="col-lg-9 blog-right-col">
							<div className="row">
								<div className="col-md-12">
									<article className="blog-details">
										<Details />
									</article>
									<div className="comments-area">
										<Comment />
									</div>
								</div> 
							</div>
						</div>
						<div className="col-lg-3 blog-left-col">
							<Sidebar />
						</div>
					</div>
				</div>
			</section>
		</>
    )
}

export default Blog;