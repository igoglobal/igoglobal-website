import AboutSection from "../../core/utils/AboutSection";
import Drive from "../../core/utils/Drive";
import Service from "../../core/utils/Service";
import Title from "../../core/utils/Title";

import Team from "../../components/Team/Team";
import Solution from "../../components/AboutUs/Solution";
import { useEffect } from "react";


function AboutUs () {
    useEffect(() => {
        const isLoaded = localStorage.getItem("loader")
        if(!isLoaded){
            localStorage.setItem("loader", "true")
            window.location.reload()
        }

        return () => {
            if(window.location.pathname !== '/about-us'){
                localStorage.removeItem("loader")
            }
        }
    }, [])

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