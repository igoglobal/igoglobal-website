import blogData from "../../core/data/blogData";
import Post from "../Blog/Post";


function Blog () {
    return (
        <section>
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-md-12 col-xl-6">
                    <div className="blog-one-bg"></div>
                </div>
                <div className="col-md-12 col-xl-6">
                    <div className="blog-one-rightbox">
                        <div className="pbmit-heading-subheading">
                            <h4 className="pbmit-subtitle">Blogs From Igoglobal</h4>
                            <h2 className="pbmit-title"> Latest Blog</h2>
                        </div>
                        {
                            blogData.slice(0, 2).map(blog => (
                                <Post 
                                    key={blog.id}
                                    img={blog.img} tag={blog.tag}
                                    date={blog.date} title={blog.title}
                                    link={blog.link}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Blog;