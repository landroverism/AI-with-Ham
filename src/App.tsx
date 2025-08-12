import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Roadmap from './components/Roadmap';
import SessionBreakdown from './components/SessionBreakdown';
import Pricing from './components/Pricing';
import Resources from './components/Resources';
import CapstoneExamples from './components/CapstoneExamples';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Roadmap />
        <SessionBreakdown />
        <Pricing />
        <Resources />
        <CapstoneExamples />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
