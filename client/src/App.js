import './App.css';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Programs from './views/Components/Programs';
import Product from './views/Product/Product';
import Scaler from './views/Components/Scaler';
import { ThemeProvider } from '@mui/material';
import {theme} from './theme';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Career from './views/Career/Career';
import About from './views/About/About';
import Naturopathy from './views/Naturopathy/Naturopathy';
import AccuPressure from './views/AccuPressure/AccuPressure';
import Pranayam from './views/Pranayam/Pranayam';
import AboutYoga from './views/AboutYoga/AboutYoga';

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
        <Route path="/naturopathy" element={<Naturopathy />}/>
        <Route path="/accupressure" element={<AccuPressure />} />
        <Route path ="/pranayam" element={<Pranayam /> }/>
        <Route path="/know-yoga" element={<AboutYoga />} />
      {/* <Home /> */}
      {/* <Product /> */}
      {/* <Footer /> */}
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

// function App() {
//   return (
//     <>
//     {/* <Programs /> */}
//     <Scaler />
//     </>
//   )
// }

export default App;
