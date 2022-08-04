import './App.css';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Programs from './views/Components/Programs';
import Scaler from './views/Components/Scaler';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

// function App() {
//   return (
//     <>
//     <Programs />
//     <Scaler />
//     </>
//   )
// }

export default App;
