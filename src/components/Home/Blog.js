import blogData from "../../core/data/blogData";
import Post from "../Blog/Post";

function Blog () {
    const blogLength = blogData.length;

    const firstBlog = blogData[blogLength - 1]
    const secBlog = blogData[blogLength - 2]

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
                        <Post 
                            img={firstBlog.img}
                            tag={firstBlog.tag}
                            date={firstBlog.date}
                            title={firstBlog.title}
                            link={firstBlog.link}
                        />
                        <Post 
                            img={secBlog.img}
                            tag={secBlog.tag}
                            date={secBlog.date}
                            title={secBlog.title}
                            link={secBlog.link}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Blog;