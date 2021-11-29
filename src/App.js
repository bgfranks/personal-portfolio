// components
import styled from 'styled-components';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './sections/about/About';
import CallToAction from './sections/cta/CallToAction';
import Projects from './sections/projects/Projects';

// styles
const AppContainer = styled.div`
  background-color: #221e1f;
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <CallToAction />
      <Projects />
      <About />
      <Footer />
    </AppContainer>
  );
}

export default App;
