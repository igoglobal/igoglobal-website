import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import Product from './pages/Product/Product';
import AboutUs from './pages/AboutUs/AboutUs';
import Chat from './pages/Chat/Chat';
import Blogs from './pages/Blog/Blogs';
import SingleBlog from './pages/Blog/SingleBlog';

function App() {
  return (
    // Masonry view >> grid wide => gallery page 

    <Router>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/blogs' element={<Blogs/>}/>

        <Route path={'/blogs/:blogId'} element={<SingleBlog />} />

        <Route path='/chat' element={<Chat/>}/>

        <Route path='/iroko' element={<Product/>}/>
        <Route path='/pure-virgin' element={<Product/>}/>        
      </Routes>

      <Footer/>

      <Helmet>
        <script src="./assets/js/cursor.js"></script>
        <script src='./assets/js/magnetic.js'></script>
        {/* <script src='./assets/js/gsap-animation.js'></script> */}
        <script src="./assets/js/scripts.js"></script>
      </Helmet>
    </Router>
  );
}

export default App;
