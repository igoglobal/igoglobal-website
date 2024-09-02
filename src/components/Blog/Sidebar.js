import { Link, useParams } from "react-router-dom";

import ReachUs from "../../core/utils/ReachUs";
import blogData from "../../core/data/blogData";


function Sidebar () {
    const { blogId } = useParams()

    const blogLength = blogData.length;
    const blogInd = blogData.findIndex(blog => blog.id === blogId)

    const isNextBlog = blogLength > (blogInd + 1);

    return (
        <aside className="sidebar">
            <aside className="widget widget-search">
                <h2 className="widget-title">Search</h2>
                <form className="search-form">
                    <input type="search" className="search-field" placeholder="Search …" value=""></input>
                    <button type="submit" className="search-submit"></button>
                </form>
            </aside>
            {/* <aside className="widget widget-categories">
                <h2 className="widget-title">Categories</h2>
                <ul>
                    <li>
               x         <span className="pbmit-cat-li">
                            <a href="blog-classNameic.html">Business</a>
                            <span className="pbmit-brackets">( 1 )</span>
                        </span>
                    </li>
                    <li>
                        <span className="pbmit-cat-li">
                            <a href="blog-classNameic.html">Economy</a>
                            <span className="pbmit-brackets">( 2 )</span>
                        </span>
                    </li>
                    <li>
                        <span className="pbmit-cat-li">
                            <a href="blog-classNameic.html">Finance</a>
                            <span className="pbmit-brackets">( 1 )</span>
                        </span>
                    </li>
                    <li>
                        <span className="pbmit-cat-li">
                            <a href="blog-classNameic.html">Insurance</a>
                            <span className="pbmit-brackets">( 2 )</span>
                        </span>
                    </li>
                    <li>
                        <span className="pbmit-cat-li">
                            <a href="blog-classNameic.html">Investment</a>
                            <span className="pbmit-brackets">( 1 )</span>
                        </span>
                    </li>
                    <li>
                        <span className="pbmit-cat-li">
                            <a href="blog-classNameic.html">Research</a>
                            <span className="pbmit-brackets">( 2 )</span>
                        </span>
                    </li>
                </ul>
            </aside> */}
            <aside className="widget widget-recent-post">
                <h2 className="widget-title">Other Blogs</h2>
                <ul className="recent-post-list">
                    <li className="recent-post-list-li"> 
                        <Link className="recent-post-thum" to={blogInd === 0 ? "/blogs" : `/blogs/${blogData[blogInd -1].id}`}>
                            <img src={blogInd === 0 ? "" : blogData[blogInd -1].img} className="img-fluid" alt=""></img>
                        </Link>
                        <div className="pbmit-rpw-content">
                            <span className="pbmit-rpw-title">
                                <Link to={blogInd === 0 ? "/blogs" : `/blogs/${blogData[blogInd -1].id}`}>{ blogInd === 0 ? "No prev blog" : blogData[blogInd -1].title}</Link>
                            </span>
                            <span className="pbmit-rpw-date">
                                <a >{ blogInd === 0 ? "No prev blog" : blogData[blogInd -1].date}</a>
                            </span>
                        </div> 
                    </li>
                    <li className="recent-post-list-li"> 
                        <Link className="recent-post-thum" to={isNextBlog ? `/blogs/${blogData[blogInd + 1].id}` : "/blogs"}>
                            <img src={isNextBlog ? blogData[blogInd + 1].img : ""} className="img-fluid" alt=""></img>
                        </Link>
                        <div className="pbmit-rpw-content">
                            <span className="pbmit-rpw-title">
                                <Link to={isNextBlog ? `/blogs/${blogData[blogInd + 1].id}` : "/blogs"}> { isNextBlog ? blogData[blogInd + 1].title : "No Blog"} </Link>
                            </span>
                            <span className="pbmit-rpw-date">
                                <a >{ isNextBlog ? blogData[blogInd + 1].date : "In some weeks time..."}</a>
                            </span>
                        </div> 
                    </li>
                </ul>
            </aside> 
            <ReachUs />
            <aside className="widget widget-tag-cloud">
                <h3 className="widget-title">Blog Tag</h3>
                <div className="tagcloud">
                    <a href="" className="tag-cloud-link">health</a>
                    <a href="" className="tag-cloud-link">nature</a>
                    <a href="" className="tag-cloud-link">medicine</a>
                    <a href="" className="tag-cloud-link">Marketing</a>
                </div>
            </aside> 
        </aside>
    )
}

export default Sidebar;