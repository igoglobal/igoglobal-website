import { useBlog } from "../../core/provider/BlogProvider";


function Entry () {
    const { blog } = useBlog()
    
    if(!blog){
        return (
            <div> Oops! no blog here </div>
        )
    }
    return (
        <div className="pbmit-entry_content">
            <p>
                {blog.content}
            </p>
            <blockquote>
                {blog.quote}
                <cite>Emmanuel Akpan</cite>
            </blockquote>  
            <h3 className="mb-3">{blog.header}</h3>
            <p>{blog.statement}</p>
            <div className="wp-block-columns row">
                <div className="wp-block-column col-md-6">
                    <figure>
                        <img src="./assets/img/blog/.jpg" className="img-fluid" alt=""></img>
                    </figure>
                </div>
                <div className="wp-block-column col-md-6">
                    <figure>
                        <img src="./assets/img/blog/main-blog.jpg" className="img-fluid" alt=""></img>
                    </figure>
                </div>
            </div>
            {/* <h3 className="mb-3">Points of Future Financial Settlement</h3>
            <p>Finace is all about personal finance. The content is available in six languages – Hindi, English, Tamil, Malayalam, and Telugu. It can be accessed on desktop, mobile app, & mobile web. This personal <u className="pbmit-underline">Finance portal of Finacepbminfo.com</u>  covers various important aspects of personal finance, the including business news, stock markets, mutual funds, taxes, banking, debt market, etc. this online financial guide offers hundreds of blogs on tips and guides about money-saving, investments, budget planning, real estate, loans, insurance, credit cards, and more.</p>
            <ul className="list-group list-group-borderless pbmit-blog_list">
                <li className="list-group-item">
                    <span className="pbmit-icon-list-icon">
                        <i aria-hidden="true" className="ti-check"></i>
                    </span>
                    <span className="pbmit-icon-list-text">Percent of market capitalization outside of top 10 largest companies</span>
                </li>
                <li className="list-group-item">
                    <span className="pbmit-icon-list-icon">
                        <i aria-hidden="true" className="ti-check"></i>
                    </span>
                    <span className="pbmit-icon-list-text">Account capitalization and outstanding domestic private debt securities to GDP</span>
                </li>
                <li className="list-group-item">
                    <span className="pbmit-icon-list-icon">
                        <i aria-hidden="true" className="ti-check"></i>
                    </span>
                    <span className="pbmit-icon-list-text">Volatility (standard deviation / average) of stock price index, sovereign bond index</span>
                </li>
                <li className="list-group-item">
                    <span className="pbmit-icon-list-icon">
                        <i aria-hidden="true" className="ti-check"></i>
                    </span>
                    <span className="pbmit-icon-list-text">Turnover of bonds (private, public) on securities exchange</span>
                </li>
                <li className="list-group-item">
                    <span className="pbmit-icon-list-icon">
                        <i aria-hidden="true" className="ti-check"></i>
                    </span>
                    <span className="pbmit-icon-list-text">Correlation with major bond returns (German, US) Financial Institutions </span>
                </li>
            </ul> */}
        </div>
    )
}

export default Entry;