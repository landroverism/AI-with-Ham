export default function About() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Personalized",
      description: "1-on-1 or small group coaching"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Hands-on",
      description: "Learn by doing real projects"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Real Projects",
      description: "Build something useful for your work"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Kenyan Payments",
      description: "M-Pesa and local payment options"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
            AI Training for Real People
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-text-dark/80 leading-relaxed">
              This 1-month program is designed for non-technical people who want to gain practical AI skills quickly. 
              Over four weeks we'll cover the foundations of generative AI, hands-on prompt training, tool demos 
              (ChatGPT, Canva AI, Notion AI), and a capstone project that solves a real problem you care about. 
              You'll leave with a reusable prompt library, PDF guides, and confidence to use AI every day.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-accent/20 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text-dark mb-2">{feature.title}</h3>
              <p className="text-text-dark/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
