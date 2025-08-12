export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-teal-50 to-sky-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn AI in 1 Month — No Tech Skills Needed
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto">
            Personalized, hands-on coaching to help you use AI for everyday work and life (writing, planning, content, automation).
          </p>
          <p className="text-lg text-gray-500 mb-2 italic">
            Mafunzo ya AI kwa mwezi mmoja — hakuna ujuzi wa teknolojia unahitajika
          </p>
          
          {/* Value bullets */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-700">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Practical skills</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Start using AI same week</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Templates & support</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('#roadmap')}
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
              aria-label="View the training plan roadmap"
            >
              View Training Plan
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
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
