import { useEffect } from "react";

import Testimonial from "../../core/utils/Testimonial";
import Blog from "../../components/Home/Blog";
import About from "../../components/Home/About";
import Process from "../../components/Home/Process";
import SearchBox from "../../components/Home/SearchBox";

import AboutSection from "../../core/utils/AboutSection";
import Service from "../../core/utils/Service";
import Team from "../../components/Team/Team";


function Home () {    
    // // pop up dialogue box for chatbot
    // useEffect(() => {
    //     // call this function every 1 minute
    //     setTimeout(() => {
    //         //
    //     }, 4000);
    // })


    useEffect(() => {
        const isLoaded = sessionStorage.getItem("loader")
    
        if(!isLoaded){
            sessionStorage.setItem("loader", "true")
            window.location.reload()
        }
    
        return () => {
            if(window.location.pathname !== "/"){
                sessionStorage.removeItem("loader")
            }
        }
    }, [])


    return (
        <div className="page-wrapper">
            <div className="page-content">
                <AboutSection/>
                <About/>
                <Service/>
                <Process/>
                <Team/>
                <Testimonial/>
                <Blog/>
                <SearchBox/>
            </div>
        </div>
    )
}

export default Home;