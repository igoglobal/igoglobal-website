import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import Product from './pages/Product/Product';
import AboutUs from './pages/AboutUs/AboutUs';
import Chat from './pages/Chat/Chat';
import Blogs from './pages/Blog/Blogs';
import SingleBlog from './pages/Blog/SingleBlog';
import TermsConditions from './pages/Footer/TermsConditions';
import PrivacyPolicy from './pages/Footer/PrivacyPolicy';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './core/utils/ScrollToTop';

import ChatDialog from './components/Dialogs/Messaging/Chat';

import AOS from 'aos';
import 'aos/dist/aos.css';
import LandingPage from './pages/LandingPage/LandingPage';
import NotifDialog from './components/LandingPage/Notification';

function App() {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, [])

  interface NotifstateProps {
    isOpen: boolean;
    title: string;
    msg: string;
    code: 'success' | 'error' | 'notif' | 'warning'
  }
  const [notif, setNotif] = useState<NotifstateProps>({
    isOpen: false, title: '', msg: '', code: 'success'
  });

  const showNotif = (
    title: string, msg: string, code: 'success' | 'error' | 'notif' | 'warning'
  ) => {
    setNotif({isOpen: true, title, msg, code})
  }

  // code: 'success' | 'error' | 'notif' | 'warning'
  const hideNotif = () => {
    setNotif((prev) => ({...prev, isOpen: false}))
  }


  return (
    // Masonry view >> grid wide => gallery page 
    <Router >
          <Header/>

          <ScrollToTop />
          
          <Routes>
            <Route element={<ChatDialog />}>
              <Route path='/' element={<Home/>}/>
              <Route path='/services' element={<Services/>}/>
              <Route path='/contact-us' element={<Contact/>}/>
              <Route path='/about-us' element={<AboutUs/>}/>
              <Route path='/blogs' element={<Blogs/>}/>

              <Route path={'/blogs/:blogId'} element={<SingleBlog />} />

              <Route path='/chat' element={<Chat/>}/>
              <Route path='/landing-page/wealth-conference' element={<LandingPage showNotif={showNotif}/>}/>

              <Route path='/iroko' element={<Product/>}/>
              <Route path='/pure-virgin' element={<Product/>}/>        

              <Route path='/terms-conditions' element={<TermsConditions />}/>
              <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
            </Route>
          </Routes>

          <Footer/>

          <NotifDialog 
            title={notif.title} msg={notif.msg}
            code={notif.code} isOpen={notif.isOpen}
            hideNotif={hideNotif}
          />

          <Helmet>
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.1/aos.css" /> */}
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

            {/* <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" /> */}
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            
            <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.1/aos.js"></script>
            
            {/* detecting elements in view */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>

            {/* counter animations */}
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-numinate/2.0.1/jquery.numinate.min.js"></script> */}
            
            <script src="/assets/js/scripts.js"></script>
            {/* <script src="/assets/js/swiper.min.js"></script>
            <script src="/assets/js/cursor.js"></script>
            <script src='/assets/js/magnetic.js'></script>
            <script src='/assets/js/gsap-animation.ts'></script> */}
          </Helmet>
    </Router>
  );
}

export default App;
