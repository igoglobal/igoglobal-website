import Solution from "../../components/AboutUs/Solution";

import AboutSection from "../../core/utils/AboutSection";
import Drive from "../../core/utils/Drive";
import Service from "../../core/utils/Service";
import Team from "../../core/utils/Team";
import Title from "../../core/utils/Title";

function AboutUs () {
    return (
        <>
            <Title
                title='About Us'
                sectionName='about-us'
            />
            <AboutSection/>
            <Solution/>
            <Service/>
            <Drive/>
            <Team/>
        </>
    )
}

export default AboutUs;