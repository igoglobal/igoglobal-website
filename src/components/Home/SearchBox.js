function SearchBox () {
    return (
        <>
            <div className="pbmit-search-overlay">
                <div className="pbmit-icon-close">
                    <svg className="qodef-svg--close qodef-m" xmlns="http://www.w3.org/2000/svg" width="28.163" height="28.163" viewBox="0 0 26.163 26.163">
                        <rect width="36" height="1" transform="translate(0.707) rotate(45)"></rect>
                        <rect width="36" height="1" transform="translate(0 25.456) rotate(-45)"></rect>
                    </svg>
                </div>
                <div className="pbmit-search-outer"> 
                    <form className="pbmit-site-searchform">
                        <input type="search" className="form-control field searchform-s" name="s" placeholder="Search …"></input>
                        <button type="submit"></button>
                    </form>
                </div>
            </div>

            <div className="pbmit-progress-wrap">
                <svg className="pbmit-progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
                </svg>	
            </div>
        </>
    )
}

export default SearchBox;