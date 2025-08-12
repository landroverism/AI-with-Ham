export default function Resources() {
  const resources = [
    {
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Notion Prompt Library",
      description: "200+ ready-to-use prompts organized by category (CSV import included)"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "PDF Training Booklet",
      description: "Complete guide with examples, exercises, and reference materials",
      downloadLink: "/assets/1-Month_AI_Training_for_Non-Techie_Client.pdf"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m-6 0h8m-8 0a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2m-8 0V4" />
        </svg>
      ),
      title: "Template Collection",
      description: "Email templates, CV prompts, social media planners, content calendars"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Ongoing Support",
      description: "Text/email support during the month for quick questions and troubleshooting"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Slide Deck Template",
      description: "Google Slides template for presenting your AI knowledge to others"
    }
  ];

  return (
    <section id="resources" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Resources You'll Get
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to continue using AI effectively after the training ends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 bg-teal-100 rounded-lg">
                  {resource.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  {resource.downloadLink && (
                    <a
                      href={resource.downloadLink}
                      download
                      className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-sm"
                      aria-label={`Download ${resource.title}`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Now
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download CTA */}
        <div className="mt-12 text-center">
          <div className="bg-teal-600 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Get Your Free Training Brochure</h3>
            <p className="mb-6">Download the complete program overview with sample prompts and success stories</p>
            <a
              href="/assets/1-Month_AI_Training_for_Non-Techie_Client.pdf"
              download
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-md"
              aria-label="Download the complete training brochure"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
