import Section from "../../components/AboutUs/Section";
import sectionData from "../data/sectionData";

function AboutSection () {
    return (
        <section className="pbmit-multi-icon-box-hover-effect">
        <div className="container-fluid p-0">
            <div className="swiper-slider" data-loop="false" data-autoplay="false" data-dots="false" data-arrows="false" data-columns="4" data-margin="0" data-effect="slide">
                <div className="swiper-wrapper">
                    {
                        sectionData.map(section => (
                            <Section 
                                key={section.content}
                                tag={section.tag}
                                title1={section.title1}
                                title2={section.title2}
                                content={section.content}
                            />
                        ))
                    }                    
                </div>
            </div>
        </div>
    </section>
    )
}

export default AboutSection;