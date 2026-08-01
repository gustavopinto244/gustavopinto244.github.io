import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { SoftSkills } from './components/sections/SoftSkills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <div className="w-[min(1120px,calc(100%-32px))] mx-auto px-5 md:px-10 pb-10">
        <Navigation />

        <main>
          <Hero />
          <Projects />
          <Skills />
          <SoftSkills />
          <Experience />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
