import { Navigation } from './components/layout/Navigation';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Resumes } from './components/sections/Resumes';
import { Footer } from './components/layout/Footer';
function AboutPage() {
  return (
    <>
      <Navigation page="about" />
      <div className="page-width">
        <main id="main">
          <About />
          <Experience />
          <Resumes />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default AboutPage;
