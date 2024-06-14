import Testimonial from "../../components/Testimonial/Testimonial";
import Blog from "../../components/Blog/Blog";
import Service from "../../components/Service/Service";
import About from "../../components/About/About";
import Client from "../../components/Client/Client";
import Team from "../../components/Team/Team";
import Process from "../../components/Process/Process";
import Inbox from "../../components/Inbox/Inbox";
import Marquee from "../../components/Marquee/Marquee";
import Fidbg from "../../components/Fidbg/Fidbg";


function Home () {
    return (
        <div class="page-wrapper">
            <div class="page-content">
                <Inbox></Inbox>
                <About></About>                    
                <Service></Service>
                <Process></Process>
                <Marquee></Marquee>
                <Fidbg></Fidbg>
                <Team></Team>
                <Client></Client>
                <Testimonial></Testimonial>
                <Blog></Blog>
            </div>
        </div>
    )
}

export default Home;