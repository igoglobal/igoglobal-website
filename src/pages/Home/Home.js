import { useEffect } from "react";

import Blog from "../../components/Home/Blog";
import About from "../../components/Home/About";
import Process from "../../components/Home/Process";
import SearchBox from "../../components/Home/SearchBox";
import Team from "../../components/Team/Team";


import Testimonial from "../../core/utils/Testimonial";
import AboutSection from "../../core/utils/AboutSection";
import Service from "../../core/utils/Service";

import useLoader from "../../core/hooks/useLoader";


// function Loader () {
//     return (
//         <div className="loaddiv">
//             <div className="loadclass"></div>
//         </div>
//     )
// }

function Home () {    
    const loading = useLoader()
    useEffect(() => {
        const isLoaded = localStorage.getItem("loader")
        if(!isLoaded){
            localStorage.setItem("loader", "true")
            window.location.reload()
        }

        return () => {
            if(window.location.pathname !== "/"){
                localStorage.removeItem("loader")
            }
        }
    }, [])

    return (
        // <>
        //     {
        //         loading ?
        //             <Loader />
        //         :
        //         <div className="page-wrapper">
        //             <div className="page-content">
        //                 <AboutSection/>
        //                 <About/>
        //                 <Service/>
        //                 <Process/>
        //                 <Team/>
        //                 <Testimonial/>
        //                 <Blog/>
        //                 <SearchBox/>
        //             </div>
        //         </div>
        //     }
        // </>
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