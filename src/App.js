
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Frame from './components/next/Frame';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import TestiMonials from './components/TestiMonials/TestiMonials';
import Section5 from './components/section5/Section5';
import Section6 from './components/section6/Section6';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Frame/>
      <Section2/>
      <Section3/>
      <Section4/>
      <TestiMonials/>
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
  );
}

export default App;
