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
import Naturopathy from './components/Naturopathy/Naturopathy';
import AccuPressure from './components/AccuPressure/AccuPressure';
import Pranayam from './components/Pranayam/Pranayam';
import AboutYoga from './views/AboutYoga/AboutYoga';
import Faq from './views/Faq/Faq';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';
import Contact from './views/Contact/Contact';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/yoga-jagriti" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/career" element={<Career/>} />
        <Route path="/about" element={<About />} />
        <Route path="/know-yoga" element={<AboutYoga />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}


export default App;
