import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Extensions from './Components/Extensions';
import FAQs from './Components/FAQs';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
import './sass/index.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Extensions />
        <FAQs />
        <Subscribe />
        <Footer />
      </main>
    </>
  );
}

export default App;
