import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { SoftSkills } from './components/sections/SoftSkills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <SoftSkills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
