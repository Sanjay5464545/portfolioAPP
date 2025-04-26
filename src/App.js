import Navbar from "./components/navBar/navbar";
import Intro from './components/intro/intro';
import Skills from "./components/Skills/skills";
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Footer from "./components/Fotter/footer";


function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
