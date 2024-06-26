import Social from "../../core/utils/Social";

function ContactForm () {
    return (
        <section className="section-lgx">
            <div className="container">
                <div className="row g-0">
                    <div className="col-md-4 contact-us-col1">
                        <div className="pbmit-heading-subheading">
                            <h4 className="pbmit-subtitle">Contact Us</h4>
                            <h2 className="pbmit-title">Happy to Answer all Your Questions</h2>
                        </div>
                        <div className="contact-form-leftbox">
                            <div className="contact-us-left-inner">
                                <div className="contact-form-left-title">
                                    <div className="pbmit-heading-subheading mb-0">
                                        <h2 className="pbmit-title">Igogloal Customer Care is only a call away</h2>
                                    </div>
                                </div>
                                <div className="pbmit-social-link">
                                    <h3>Follow us :</h3>
                                    <Social/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 contact-us-col2">
                        <div className="contact-form-main">
                            <p>
                                With a focus on your individual needs, our leadership has set out to create a company that stands out, whether you're a customer or a distributor. 
                                This commitment to customization drives everything we do, shaping our present and future endeavors. <br></br> Kindly reach out if you would like to know more. 🤗
                            </p>
                            <div className="contact-form">
                                <form method="post" className="contact-form" id="contact-form" action="send.php">
                                    <h2>Get in Touch with us!</h2>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Your Name" name="name" required></input>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control" placeholder="Email Address" name="email" required></input>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Phone Number" name="number" required></input>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Subject" name="subject" required></input>
                                        </div>
                                        <div className="col-md-12">
                                            <textarea name="message" cols="40" rows="10" className="form-control" placeholder="Comment" required></textarea>
                                        </div>
                                        <div className="col-sm-12">
                                            <button type="submit" className="pbmit-btn pbmit-btn-shape-round">
                                                <i className="form-btn-loader fa fa-circle-o-notch fa-spin fa-fw margin-bottom d-none"></i>
                                                <span className="pbmit-button-content-wrapper">
                                                    <span className="pbmit-button-icon pbmit-align-icon-right">
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="pbmit-svg-arrow" x="0px" y="0px" width="10" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
                                                            <line x1="1" y1="18" x2="17.8" y2="1.2"></line>
                                                            <line x1="1.2" y1="1" x2="18" y2="1"></line>
                                                            <line x1="18" y1="17.8" x2="18" y2="1"></line>
                                                        </svg>
                                                    </span>
                                                    <span className="pbmit-button-text">Submit Now</span>
                                                </span>
                                            </button>
                                        </div>
                                        <div className="col-md-12 col-lg-12 message-status"></div>
                                    </div>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;