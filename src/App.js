import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import Product from './pages/Product/Product';

function App() {
  return (
    // Masonry view >> grid wide => gallery page
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/iroko' element={<Product/>}></Route>
        <Route path='/pure-virgin' element={<Product/>}></Route>
        <Route path='/contact-us' element={<Contact/>}></Route>
      </Routes>

      <Footer/>

      <Helmet>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <title>igoglobal.io</title>
        <meta name="robots" content="noindex, follow"/>
        <meta name="description" content=""/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="shortcut icon" type="image/x-icon" href="./assets/img/fevicon.png"/>
          
        {/* <!-- CSS --> */}
        <link rel="stylesheet" href="./assets/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="./assets/css/fontawesome.css"/>
        <link rel="stylesheet" href="./assets/css/flaticon.css"/>
        <link rel="stylesheet" href="./assets/css/pbminfotech-base-icons.css"/>
        <link rel="stylesheet" href="./assets/css/themify-icons.css"/>
        <link rel="stylesheet" href="./assets/css/swiper.min.css"/>
        <link rel="stylesheet" href="./assets/css/magnific-popup.css"/>
        <link rel="stylesheet" href="./assets/css/aos.css"/>
        <link rel="stylesheet" href="./assets/css/shortcode.css"/>
        <link rel="stylesheet" href="./assets/css/base.css"/>
        <link rel="stylesheet" href="./assets/css/style.css"/>
        <link rel="stylesheet" href="./assets/css/responsive.css"/>

        {/* <!-- JS --> */}
        <script src="./assets/js/jquery.min.js"></script>
        <script src="./assets/js/popper.min.js"></script>
        <script src="./assets/js/bootstrap.min.js"></script>
        <script src="./assets/js/jquery.waypoints.min.js"></script>
        <script src="./assets/js/jquery.appear.js"></script>
        <script src="./assets/js/numinate.min.js"></script>
        <script src="./assets/js/swiper.min.js"></script>
        <script src="./assets/js/jquery.magnific-popup.min.js"></script>
        <script src="./assets/js/circle-progress.js"></script>
        <script src="./assets/js/jquery.countdown.min.js"></script>
        <script src="./assets/js/aos.js"></script>
        <script src='./assets/js/gsap.js'></script>
        <script src='./assets/js/ScrollTrigger.js'></script>
        <script src='./assets/js/SplitText.js'></script>
        <script src="./assets/js/cursor.js"></script>
        <script src='./assets/js/magnetic.js'></script>
        {/* <script src='./assets/js/gsap-animation.js'></script> */}
        <script src="./assets/js/scripts.js"></script>
      </Helmet>
    </Router>
  );
}

export default App;
