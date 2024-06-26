function FooterSearch () {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6">
            <form>
                <div className="pbmit-footer-newsletter">
                    <input type="email" className="form-control" name="EMAIL" placeholder="Enter your email"></input>
                    <button className="pbmit-svg-btn">
                        <svg className="pbmit-svg-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
                            <line x1="1" y1="18" x2="17.8" y2="1.2"></line>
                            <line x1="1.2" y1="1" x2="18" y2="1"></line>
                            <line x1="18" y1="17.8" x2="18" y2="1"></line>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FooterSearch;