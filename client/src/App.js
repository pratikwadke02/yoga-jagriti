import './App.css';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Programs from './views/Components/Programs';
import Scaler from './views/Components/Scaler';
import { ThemeProvider } from '@mui/material';
import {theme} from './theme';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <Footer />
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
