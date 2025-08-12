export default function CapstoneExamples() {
  const examples = [
    {
      title: "Resume Rewrite",
      before: "Basic CV with job duties listed",
      after: "AI-optimized resume highlighting achievements and impact, tailored for specific roles",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Content Plan + Post",
      before: "Struggling to create consistent social media content",
      after: "30-day content calendar with AI-generated posts, captions, and engagement strategies",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      title: "Personal AI Daily Planner",
      before: "Disorganized daily routine and task management",
      after: "AI-powered daily planning system with automated task prioritization and time blocking",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V8a1 1 0 00-1-1m-6 0V7" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Capstone Project Examples
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what previous students have built during their final week
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal-100 rounded-lg">
                  {example.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{example.title}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-red-600 mb-1">Before:</h4>
                  <p className="text-sm text-gray-600">{example.before}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-green-600 mb-1">After:</h4>
                  <p className="text-sm text-gray-600">{example.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
