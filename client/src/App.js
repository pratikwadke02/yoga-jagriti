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

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
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
