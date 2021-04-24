import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Extensions from './components/Extensions';
import FAQs from './components/FAQs';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
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
