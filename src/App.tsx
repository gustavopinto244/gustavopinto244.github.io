import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { SoftSkills } from './components/sections/SoftSkills';
import { AboutTeaser } from './components/sections/AboutTeaser';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <div className="w-[min(1120px,calc(100%-32px))] mx-auto px-5 md:px-10 pb-10">
        <Navigation page="home" />

        <main>
          <Hero />
          <Projects />
          <Skills />
          <SoftSkills />
          <AboutTeaser />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
