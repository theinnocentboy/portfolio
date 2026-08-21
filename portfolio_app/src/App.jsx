import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Dock from './components/Dock';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 font-sans selection:bg-emerald-500/30 overflow-x-hidden relative pb-28">
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