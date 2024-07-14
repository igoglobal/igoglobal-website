function BlogMsg () {
    return (
        <>
        <h3 className="comment-reply-title">Leave a Reply </h3>
            <div className="comment-form">
                <p className="comment-notes">Your email address will not be published. Required fields are marked *</p>
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter your comment here..." rows="3"></textarea>
                        </div>
                        <div className="col-sm-6"> 
                            <input id="name" type="text" placeholder="Name" className="form-control" name="name"></input>
                        </div>
                        <div className="col-sm-6"> 
                            <input id="email" className="form-control" placeholder="Email" name="email" type="email" value=""></input>
                        </div>
                        <div className="col-md-12"> 
                            <input id="url" className="form-control" placeholder="Website" name="url" type="text" value=""></input>
                        </div>
                        <div className="col-md-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"></input>
                                <label className="form-check-label">
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </div>
                        </div>
                        <div className="col-md-12"> 
                            <button type="submit" className="submit-btn">
                                <span>Post Comment</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default BlogMsg;