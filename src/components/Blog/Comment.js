import BlogInfo from "./BlogInfo";
import BlogMsg from "./BlogMsg";
import UserComment from "./UserComment";

function Comment () {
    return (
        <>
            <h2 className="comments-title">1 Reply to The Ultimate Natural Solution for Feminine Health</h2>

            <ul className="comment-list">
                {/* <li> */}
                <li className="comment depth-1">
                    <BlogInfo 
                        author="Emmanuel Udd"
                        duration="2 months ago"
                        text="Sed maximus imperdiet ipsum, id scelerisque nisi tincidunt vitae. In lobortis neque nec dolor vehicula, eget vulputate ligula lobortis."
                        img="author.avif"
                    />
                    <UserComment 
                        user="talented vicky" duration="3 hours ago" img="comment1.avif"
                    />
                    <UserComment 
                        user="Sarah Jacob" duration="1 minute ago" img="comment2.avif"
                    />
                </li>
                <li>
                    <BlogInfo 
                        author="Grace Etukiyang"
                        duration="5 months ago"
                        text="the new cool thing is staying healthy regardless on one's age, for health superceeds every other thing ever"
                        img="author.avif"
                    />
                </li>
            </ul>
                    
            <div className="comment-respond">
                <BlogMsg />
            </div>
        </>
    )
}

export default Comment;