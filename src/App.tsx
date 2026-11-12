import AmbientBackground from '@/components/AmbientBackground';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GithubStats from '@/components/GithubStats';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
