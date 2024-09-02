import ItemNav from "../../core/utils/ItemNav";
import Entry from "./Entry";
import blogData from "../../core/data/blogData";
import { useParams } from "react-router-dom";


function Details () {
    const { blogId } = useParams()
    const blogLength = blogData.length
    const currInd = blogData.findIndex(blog => blog.id === blogId)

    const isNextBlog = blogLength > currInd;

    console.log(`see currId here --> ${blogId}`) // gives valid id

    // let lnPrev = currInd === 0 ? `/blogs/${blogData[currInd - 1].id}` : "/" 
    // let lnNext = isNextBlog ? `/blogs/${blogData[currInd + 1].id}` : "/"
    // titlePrev={currInd === 0 ? `/blogs/${blogData[currInd - 1].title}` : "No older blog"} 
    // titleNext={isNextBlog ? blogData[currInd + 1].title : "No recent blog"}
    return (
        <>
            <div className="post blog-classNameic">    
                <div className="pbmit-featured-img-wrapper">
                    <div className="pbmit-featured-wrapper">
                        <img src="" className="img-fluid" alt=""></img>
                    </div>
                </div>  
                <div className="pbmit-blog-classNameic-inner">
                    <div className="pbmit-blog-meta pbmit-blog-meta-top">	
                        <span className="pbmit-meta pbmit-meta-date">
                            <a href="blog-single-detail.html" rel="bookmark">
                                <time className="entry-date published" datetime="2023-07-07T10:30:00+00:00">March 26, 2024	</time>
                                <time className="updated pbmit-hide" datetime="2023-07-26T09:52:36+00:00">June 17, 2024</time>
                            </a>
                        </span>			
                        <span className="pbmit-meta pbmit-meta-cat">
                            <a href="blog-classNameic.html" rel="category tag">Health</a>
                        </span>
                        <span className="pbmit-meta pbmit-meta-author">
                            <a className="pbmit-author-link" href="blog-classNameic.html">wellness</a>
                        </span>		
                        <span className="pbmit-meta pbmit-meta-comments">
                            1 Comment
                        </span>	
                    </div>
                    <Entry />
                    {/* <div className="pbmit-blog-meta-bottom">
                        <div className="pbmit-blog-meta-bottom-left">
                            <span className="pbmit-meta-tags">
                                <a href="#" rel="tag">Investing</a>
                                <a href="#" rel="tag">Investors</a>
                                <a href="#" rel="tag">Payment</a>
                            </span>
                        </div>
                    </div> */}
                </div>   
            </div> 
            <ItemNav 
                linkPrev="" linkNext=""
                titlePrev="" titleNext=""
            />
        </>
    )
}

export default Details;