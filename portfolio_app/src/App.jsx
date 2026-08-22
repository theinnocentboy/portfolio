import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Dock from './components/Dock';
import About from './components/About';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <div className="bg-tokyonight-bg min-h-screen text-tokyonight-fg font-sans selection:bg-tokyonight-green/30 overflow-x-hidden relative pb-28">
      <ThemeToggle />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <Skills />
      <div id="projects">
        <Projects />
      </div>

      <div id="achievements">
        <Achievements />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <Dock />
    </div>
  );
}

export default App;