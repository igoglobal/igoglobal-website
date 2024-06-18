import Testimonial from "../../components/Home/Testimonial";
import Blog from "../../components/Home/Blog";
import About from "../../components/Home/About";
import Client from "../../components/Home/Client";
import Process from "../../components/Home/Process";
import SearchBox from "../../components/Home/SearchBox";

import AboutSection from "../../core/utils/AboutSection";
import Service from "../../core/utils/Service";
import Team from "../../core/utils/Team";


function Home () {
    return (
        <div class="page-wrapper">
            <div class="page-content">
                <AboutSection/>
                <About/>
                <Service/>
                <Process/>
                <Team/>
                <Client/>
                <Testimonial/>
                <Blog/>
                <SearchBox/>
            </div>
        </div>
    )
}

export default Home;