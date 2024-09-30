import Blog from "../../components/Blog/Blog";

import Title from "../../core/utils/Title";
import blogData from "../../core/data/blogData";

function Blogs () {
    return (
		<>
            <Title 
                title='All Blogs'
                title2=""
                midName="blogs"
                sectionName='Read The Latest Blog Exclusive From Igoglobal Inc.'
            />
            
            <div class="page-content">  
                <section class="section-lg pbmit-element-viewtype-masonry">
                    <div class="container">
                        <div class="row pbmit-element-posts-wrapper">
                            {
                                blogData.map(blog => (
                                    <Blog key={blog.id}
                                        tag={blog.tag} 
                                        date={blog.date} 
                                        img={blog.img}
                                        title={blog.title} 
                                        link={blog.link}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
		</>
    )
}

export default Blogs;