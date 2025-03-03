import UserTestimonial from "../../components/Testimonial/UserTestimonial";
import TestimonialData from '../data/testimonialData';

function Testimonial () {
    return (
        <section className="testimonial-one pbmit-bg-color-light">
        <div className="container">
            <div className="pbmit-heading-subheading text-center animation-style2">
                <h4 className="pbmit-subtitle">Testimonial</h4>
                <h2 className="pbmit-title">Our customer reviews</h2>
            </div>
            <div className="swiper-slider" data-loop="false" data-autoplay="false" data-dots="true" data-arrows="false" data-columns="3" data-margin="30" data-effect="slide">
                <div className="swiper-wrapper">
                    {
                        TestimonialData.map((testimonial) => (
                            <UserTestimonial 
                            img={testimonial.img}
                            username={testimonial.username}
                            clientType={testimonial.clientType}
                            comment={testimonial.comment}
                            />
                        ))
                    }                    
                </div>
            </div>
        </div>
    </section>
    )
}

export default Testimonial;