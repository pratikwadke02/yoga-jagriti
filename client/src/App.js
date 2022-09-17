import './App.css';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Product from './views/Product/Product';
import { ThemeProvider } from '@mui/material';
import {theme} from './theme';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Career from './views/Career/Career';
import About from './views/About/About';
import AboutYoga from './views/AboutYoga/AboutYoga';
import Faq from './views/Faq/Faq';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';
import Contact from './views/Contact/Contact';
import Course from './views/Course/Course';
import AllCourses from './views/AllCourses/AllCourses';
import Syllabus from './views/Syllabus/Syllabus';
import Shop from './views/Shop/Shop';
import Cart from './views/Cart/Cart';
import Checkout from './views/Checkout/Checkout';
import AboutUs from './views/AboutUs/AboutUs';
import PrivacyPolicy from './views/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './views/TermsAndConditions/TermsAndConditions';
import RefundPolicy from './views/RefundPolicy/RefundPolicy';
import Orders from './views/Orders/Orders';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/career" element={<Career/>} />
        <Route path="/about" element={<About />} />
        <Route path="/know-yoga" element={<AboutYoga />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course/:name" element={<Course />} />
        <Route path="/allcourses" element={<AllCourses />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}


export default App;
