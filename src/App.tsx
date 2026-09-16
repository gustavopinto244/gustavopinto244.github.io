import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { AboutTeaser } from './components/sections/AboutTeaser';
import { Resumes } from './components/sections/Resumes';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <>
      <Navigation />
      <div className="page-width">
        <main id="main">
          <Hero />
          <Projects />
          <Skills />
          <AboutTeaser />
          <Resumes />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;
