import './App.css';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './Components/Header/Header';
import logo from './Img/logo2.png'

import Footer from './Components/Footer/Footer';
import Routing from './Routes';
import ScrollToTop from './Scrolltotop';

function App() {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth', });
  }

  return (
    <>
      {/* <div id="preloader">
        <div id="loader" class="loader">
          <div class="loader-container">
            <div class="loader-icon"><img src={logo} alt="Preloader" /></div>
          </div>
        </div>
      </div> */}
      <button class="scroll-top scroll-to-target" onClick={scroll}>
        <i class="fas fa-angle-up"></i>
      </button>
      <Header />
      <ScrollToTop />
      <main>
        <Routing />
      </main>
      <Footer />
    </>
  );
}

export default App;
