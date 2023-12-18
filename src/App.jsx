import Footer from './components/Footer';
import FooterTop from './components/FooterTop';
import Header from './components/Header';
import HeaderBottom from './components/HeaderBottom';
import HowItWorks from './components/HowItWorks';
import Main from './components/Main';
import MainButtom from './components/MainButtom';
import Middle from './components/Middle';
import Products from './components/Products';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <HeaderBottom />
      <HowItWorks />
      <Main />
      <Products />
      <Middle />
      <MainButtom />
      <FooterTop />
      <Footer />
    </div>
  )
}

export default App
