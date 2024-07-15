function UserComment ({user, duration, img}) {
    return (
        <ul className="children">
            <li>
                <div className="pbmit-comment">
                    <div className="pbmit-comment-avatar">
                        <img src={`https://igogolobal-assets.s3.eu-west-2.amazonaws.com/images/${img}`} alt=""></img>
                    </div>
                    <div className="pbmit-comment-content">
                        <div className="pbmit-comment-meta">
                            <span className="pbmit-comment-author">by
                                <span className="pbmit-comment-author-inner"> {user}</span>
                            </span>
                            <span className="pbmit-comment-date">
                                <a href="#">{duration}	</a>
                            </span>
                        </div>
                        <p></p>
                        <div className="reply">
                            <a href="#">Reply
                                <i className="pbmit-base-icon-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default UserComment;