import Testimonial from "../../components/Home/Testimonial";
import Blog from "../../components/Home/Blog";
import Service from "../../components/Home/Service";
import About from "../../components/Home/About";
import Client from "../../components/Home/Client";
import Team from "../../components/Home/Team";
import Process from "../../components/Home/Process";
import Marquee from "../../components/Home/Marquee";
import Fidbg from "../../components/Home/Fidbg";
import SearchBox from "../../components/Home/SearchBox";

import AboutSection from "../../core/utils/AboutSection";


function Home () {
    return (
        <div class="page-wrapper">
            <div class="page-content">
                <AboutSection/>
                <About/>
                <Service/>
                <Process/>
                <Marquee/>
                <Fidbg/>
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