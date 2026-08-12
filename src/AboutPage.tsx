import { Navigation } from './components/layout/Navigation';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Resumes } from './components/sections/Resumes';
import { Footer } from './components/layout/Footer';

function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="w-[min(1120px,calc(100%-32px))] mx-auto px-5 md:px-10 pb-10">
        <Navigation page="about" />

        <main>
          <About />
          <Experience />
          <Resumes />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
