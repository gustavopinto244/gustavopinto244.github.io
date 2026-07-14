import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { SoftSkills } from './components/sections/SoftSkills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative w-[min(1240px,calc(100%-32px))] mx-auto py-7">
        <Navigation />

        <div className="relative border border-border rounded-2xl bg-surface/20 backdrop-blur-sm px-6 md:px-10 pb-6 md:pb-10 mt-6 shadow-2xl shadow-black/30">
          <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute -bottom-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="absolute top-12 bottom-12 -left-px w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          <div className="absolute top-12 bottom-12 -right-px w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

          <main className="relative w-full mx-auto">
            <Hero />
            <Skills />
            <SoftSkills />
            <Projects />
            <Experience />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
