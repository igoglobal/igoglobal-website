import Testimonial from "../../core/utils/Testimonial";
import Blog from "../../components/Home/Blog";
import About from "../../components/Home/About";
import Process from "../../components/Home/Process";
import SearchBox from "../../components/Home/SearchBox";

import AboutSection from "../../core/utils/AboutSection";
import Service from "../../core/utils/Service";
import Team from "../../components/Team/Team";


function Home () {
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