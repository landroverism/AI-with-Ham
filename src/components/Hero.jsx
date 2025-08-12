export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-no-repeat py-16 lg:py-24 bg-gray-800" 
      style={{ 
        backgroundImage: "url('/images/ai-ham.jpg')", 
        backgroundPosition: window.innerWidth > 1024 ? 'center 35%' : 'center 20%',
        backgroundSize: window.innerWidth > 1024 ? '120% auto' : window.innerWidth > 768 ? 'cover' : 'contain'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Learn AI in 1 Month — No Tech Skills Needed
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto">
            Personalized, hands-on coaching to help you use AI for everyday work and life (writing, planning, content, automation).
          </p>
          <p className="text-lg text-gray-300 mb-2 italic">
            Mafunzo ya AI kwa mwezi mmoja — hakuna ujuzi wa teknolojia unahitajika
          </p>
          
          {/* Value bullets */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-text-light">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Practical skills</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Start using AI same week</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Templates & support</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('#roadmap')}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
              aria-label="View the training plan roadmap"
            >
              View Training Plan
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-colors"
              aria-label="Book a free introduction session"
            >
              Book Free Intro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
