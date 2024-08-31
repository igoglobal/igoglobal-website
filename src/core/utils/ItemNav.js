import { Link, useParams } from "react-router-dom";
import blogData from "../data/blogData";
import { useBlog } from "../provider/BlogProvider";

function ItemNav ({linkPrev, linkNext, titlePrev, titleNext}) {
    // const { blogId } = useParams();

    const length = blogData.length

    const { blog } = useBlog()

    if(!blog){
        return (
            <div> No blog found! </div>
        )
    }
    

    const blogInd = blogData.findIndex((val) => val.id === blog.id)
    console.log(`index of this blog post in the data is ${blogInd}`)
    console.log(typeof(blogInd))
    
    const isPrevBlog = blogInd != 0;
    console.log(`is there a previous blog: ${isPrevBlog}`)
    const isNextBlog = length > (blogInd + 1);
    console.log(`is there a next blog: ${isNextBlog}`)

    return (
        <div className="navigation post-navigation" aria-label="Posts">
            <div className="nav-links">
                <div className="nav-previous">
                    <Link to={`/${linkPrev}`}>
                        <span className="pbmit-post-nav-icon">
                            <i className="pbmit-base-icon-arrow-left"></i>
                            <span className="pbmit-post-nav-head">Older Blog</span>
                        </span>
                        <span className="pbmit-post-nav-wrapper">
                            <span className="pbmit-post-nav nav-title">{titlePrev}</span> 
                        </span>
                    </Link>
                </div>
                <div className="nav-next">
                    <Link to={`/${linkNext}`} rel="next">
                        <span className="pbmit-post-nav-icon">
                            <span className="pbmit-post-nav-head">Newer Blog</span>
                            <i className="pbmit-base-icon-arrow-right"></i>
                        </span>
                        <span className="pbmit-post-nav-wrapper">
                            <span className="pbmit-post-nav nav-title">{titleNext}</span> 
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ItemNav;