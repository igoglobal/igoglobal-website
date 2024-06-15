function ContactForm () {
    return (
        <section class="section-lgx">
            <div class="container">
                <div class="row g-0">
                    <div class="col-md-4 contact-us-col1">
                        <div class="pbmit-heading-subheading">
                            <h4 class="pbmit-subtitle">Contact Us</h4>
                            <h2 class="pbmit-title">Happy to Answer all Your Questions</h2>
                        </div>
                        <div class="contact-form-leftbox">
                            <div class="contact-us-left-inner">
                                <div class="contact-form-left-title">
                                    <div class="pbmit-heading-subheading mb-0">
                                        <h2 class="pbmit-title">Igogloal Customer Care is only a call away</h2>
                                    </div>
                                </div>
                                <div class="pbmit-social-link">
                                    <h3>Follow us :</h3>
                                    <ul class="pbmit-social-links">
                                        <li class="pbmit-social-li pbmit-social-facebook">
                                            <a href="#" target="_blank">
                                                <span><i class="pbmit-base-icon-facebook-squared"></i></span>
                                            </a>
                                        </li>
                                        <li class="pbmit-social-li pbmit-social-twitter">
                                            <a href="#" target="_blank">
                                                <span><i class="pbmit-base-icon-twitter"></i></span>
                                            </a>
                                        </li>
                                        <li class="pbmit-social-li pbmit-social-instagram">
                                            <a href="#" target="_blank">
                                                <span><i class="pbmit-base-icon-instagram"></i></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 contact-us-col2">
                        <div class="contact-form-main">
                            <p>
                                With a focus on your individual needs, our leadership has set out to create a company that stands out, whether you're a customer or a distributor. 
                                This commitment to customization drives everything we do, shaping our present and future endeavors. <br></br> Kindly reach out if you would like to know more. 🤗
                            </p>
                            <div class="contact-form">
                                <form method="post" class="contact-form" id="contact-form" action="send.php">
                                    <h2>Get in Touch with us!</h2>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input type="text" class="form-control" placeholder="Your Name" name="name" required></input>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="email" class="form-control" placeholder="Email Address" name="email" required></input>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" class="form-control" placeholder="Phone Number" name="number" required></input>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" class="form-control" placeholder="Subject" name="subject" required></input>
                                        </div>
                                        <div class="col-md-12">
                                            <textarea name="message" cols="40" rows="10" class="form-control" placeholder="Comment" required></textarea>
                                        </div>
                                        <div class="col-sm-12">
                                            <button type="submit" class="pbmit-btn pbmit-btn-shape-round">
                                                <i class="form-btn-loader fa fa-circle-o-notch fa-spin fa-fw margin-bottom d-none"></i>
                                                <span class="pbmit-button-content-wrapper">
                                                    <span class="pbmit-button-icon pbmit-align-icon-right">
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" class="pbmit-svg-arrow" x="0px" y="0px" width="10" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
                                                            <line x1="1" y1="18" x2="17.8" y2="1.2"></line>
                                                            <line x1="1.2" y1="1" x2="18" y2="1"></line>
                                                            <line x1="18" y1="17.8" x2="18" y2="1"></line>
                                                        </svg>
                                                    </span>
                                                    <span class="pbmit-button-text">Submit Now</span>
                                                </span>
                                            </button>
                                        </div>
                                        <div class="col-md-12 col-lg-12 message-status"></div>
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