// components
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './sections/about/About';
import CallToAction from './sections/cta/CallToAction';
import Projects from './sections/projects/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <CallToAction />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
