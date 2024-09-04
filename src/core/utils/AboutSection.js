import Section from "../../components/AboutUs/Section";

function AboutSection () {
    return (
        <section className="pbmit-multi-icon-box-hover-effect">
        <div className="container-fluid p-0">
            <div className="swiper-slider" data-loop="false" data-autoplay="false" data-dots="false" data-arrows="false" data-columns="4" data-margin="0" data-effect="slide">
                <div className="swiper-wrapper">
                    <Section 
                        tag="What we offer"
                        title1="Health &"
                        title2="Wellness"
                        content="Harnessing the power of traditional African herbal medicine, we offer a diverse range of wellness products to address contemporary health challenges."
                    />
                    <Section 
                        tag="Our provisions"
                        title1="Individual/Cmmunity"
                        title2="Leads"
                        content="Meticulously designed to cater to various needs and challenges faced by individuals and communities, by providing a holistic approach to improving lives across the continent and beyond."
                    />
                    <Section 
                        tag="Benefits with us"
                        title1="Reward"
                        title2="Plan"
                        content="Empowering individuals and communities with a revolutionary reward plan that aims to transform lives and create a ripple effect of positive change globally."
                    />
                    <Section 
                        tag="What we give"
                        title1="Standards &"
                        title2="Legacy"
                        content="Through constant innovation and unwavering integrity, we are committed to setting new standards and building a legacy that you can be proud to be a part of, a place you can truly call your own."
                    />
                    
                </div>
            </div>
        </div>
    </section>
    )
}

export default AboutSection;