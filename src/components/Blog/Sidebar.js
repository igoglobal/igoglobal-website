import ReachUs from "../../core/utils/ReachUs";

function Sidebar () {
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
                        <span className="pbmit-cat-li">
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
                        <a className="recent-post-thum" href="blog-single-detail.html">
                            <img src="images/recent-post/blog-01.jpg" className="img-fluid" alt=""></img>
                        </a>
                        <div className="pbmit-rpw-content">
                            <span className="pbmit-rpw-title">
                                <a href="blog-single-detail.html">Determine and get in touch with prospects.</a>
                            </span>
                            <span className="pbmit-rpw-date">
                                <a href="blog-single-detail.html">July 14, 2023</a>
                            </span>
                        </div> 
                    </li>
                    <li className="recent-post-list-li"> 
                        <a className="recent-post-thum" href="blog-single-detail.html">
                            <img src="images/recent-post/blog-02.jpg" className="img-fluid" alt=""></img>
                        </a>
                        <div className="pbmit-rpw-content">
                            <span className="pbmit-rpw-title">
                                <a href="blog-single-detail.html">Measure These 8 Crucial Brand Awareness Metrics</a>
                            </span>
                            <span className="pbmit-rpw-date">
                                <a href="blog-single-detail.html">July 14, 2023</a>
                            </span>
                        </div> 
                    </li>
                    <li className="recent-post-list-li"> 
                        <a className="recent-post-thum" href="blog-single-detail.html">
                            <img src="images/recent-post/blog-03.jpg" className="img-fluid" alt=""></img>
                        </a>
                        <div className="pbmit-rpw-content">
                            <span className="pbmit-rpw-title">
                                <a href="blog-single-detail.html">Keep aware of new current trends and competitors</a>
                            </span>
                            <span className="pbmit-rpw-date">
                                <a href="blog-single-detail.html">July 14, 2023</a>
                            </span>
                        </div> 
                    </li>
                </ul>
            </aside> 
            <ReachUs />
            <aside className="widget widget-tag-cloud">
                <h3 className="widget-title">Blog Tag</h3>
                <div className="tagcloud">
                    <a href="blog-classNameic.html" className="tag-cloud-link">health</a>
                    <a href="blog-classNameic.html" className="tag-cloud-link">nature</a>
                    <a href="blog-classNameic.html" className="tag-cloud-link">medicine</a>
                    <a href="blog-classNameic.html" className="tag-cloud-link">Marketing</a>
                </div>
            </aside> 
        </aside>
    )
}

export default Sidebar;