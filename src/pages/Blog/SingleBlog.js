import { useParams } from "react-router-dom";

import Title from "../../core/utils/Title";

// import Comment from "../../components/Blog/Comment";
import Details from "../../components/Blog/Details";
import Sidebar from "../../components/Blog/Sidebar";

import blogData from "../../core/data/blogData";
import { useBlog } from "../../core/provider/BlogProvider";


function SingleBlog(){
	const { blogId } = useParams()
	const { setBlog } = useBlog()

	const blog = blogData.find(blog => blog.id === blogId)
	if(!blog){
		return (
			<>
				<Title 
					title="Uknown Blog"
					midName="blog"
					sectionName=""
				/>
				<div> Oops! No blog post </div>
			</>
		)
	}

	// set blog data in context
	setBlog(blog)

    return (
        <>
			<Title 
				title={blog.title}
				midName="blog"
                sectionName={blog.title}
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
									{/* <div className="comments-area">
										<Comment />
									</div> */}
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

export default SingleBlog;