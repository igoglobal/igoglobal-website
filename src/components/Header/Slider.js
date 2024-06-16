import { Link } from 'react-router-dom';

function Slider () {
    return (
        <div class="pbmit-slider-area pbmit-slider-one">
            <div class="swiper-slider" data-autoplay="true" data-loop="true" data-dots="false" data-arrows="true" data-columns="1" data-margin="0" data-effect="fade">
                <div class="swiper-wrapper">
                    {/* <!-- Slide1 --> */}
                    <div class="swiper-slide">
                        <div class="pbmit-slider-item">
                            <div 
                                class="pbmit-slider-bg" 
                                style={{backgroundImage: "url(assets/img/slider/partners.jpg)"}}>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="pbmit-slider-content">
                                            <h5 class="pbmit-sub-title transform-left transform-delay-1">Take charge of your body</h5>
                                            <h2 class="pbmit-title transform-left transform-delay-2"><strong>Pure Virgin</strong> <br></br> External Vaginal Wash. </h2>
                                            <div class="pbmit-desc transform-bottom transform-delay-3">
                                                Devise and implement business strategies <br></br> for an entire business or division.
                                            </div>
                                            <div class="transform-bottom transform-delay-4">
                                                <a href="../pages/Contact/contact-us" class="pbmit-btn pbmit-btn-white">
                                                    <span class="pbmit-header-button-text">
                                                        Contact Us 
                                                        <svg class="pbmit-svg-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
                                                        <line x1="1" y1="18" x2="17.8" y2="1.2"></line>
                                                        <line x1="1.2" y1="1" x2="18" y2="1"></line>
                                                        <line x1="18" y1="17.8" x2="18" y2="1"></line>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Slide2 --> */}
                    <div class="swiper-slide">
                        <div class="pbmit-slider-item">
                            <div class="pbmit-slider-bg" style={{backgroundImage: "url(assets/img/slider/slider-2.avif)"}}></div>   
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="pbmit-slider-content">
                                            <h5 class="pbmit-sub-title transform-left transform-delay-1">Improve Your Health</h5>
                                            <h2 class="pbmit-title transform-left transform-delay-2"><strong>Iroko </strong> <br></br>Drink.</h2>
                                            <div class="pbmit-desc transform-bottom transform-delay-3">
                                                Be sure of good living <br></br> to ensure longevity
                                            </div>
                                            <div class="transform-bottom transform-delay-4">
                                                <Link to='/contact-us' className='pbmit-btn pbmit-btn-white'>
                                                {/* <a href="../pages/Contact/contact-us" class="pbmit-btn pbmit-btn-white"> */}
                                                    <span class="pbmit-header-button-text">
                                                        Contact Us 
                                                        <svg class="pbmit-svg-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="19" viewBox="0 0 19 19" xmlSpace="preserve">
                                                        <line x1="1" y1="18" x2="17.8" y2="1.2"></line>
                                                        <line x1="1.2" y1="1" x2="18" y2="1"></line>
                                                        <line x1="18" y1="17.8" x2="18" y2="1"></line>
                                                        </svg>
                                                    </span>
                                                {/* </a> */}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;