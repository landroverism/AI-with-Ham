import { useState } from 'react';
import { ROADMAP } from '../data/roadmap';

export default function Roadmap() {
  const [expandedWeek, setExpandedWeek] = useState(null);

  return (
    <section id="roadmap" className="py-16 lg:py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
            Learning Roadmap — 1 Month
          </h2>
          <p className="text-lg text-text-dark/80 max-w-2xl mx-auto">
            Four weeks of structured learning, from AI basics to building your own AI-powered project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP.map((week, index) => (
            <div
              key={index}
              className={`bg-background-light rounded-2xl shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                expandedWeek === index ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setExpandedWeek(expandedWeek === index ? null : index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setExpandedWeek(expandedWeek === index ? null : index);
                }
              }}
              aria-expanded={expandedWeek === index}
              aria-label={`Week ${index + 1} details`}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="ml-3 text-lg font-semibold text-text-dark">{week.week}</h3>
              </div>

              <div className="space-y-3">
                {week.sessions.map((session) => (
                  <div key={session.id} className="border-l-2 border-accent-light pl-3">
                    <h4 className="font-medium text-text-dark text-sm">{session.title}</h4>
                    <p className="text-xs text-text-dark/80 mt-1">{session.outcome}</p>
                  </div>
                ))}
              </div>

              {expandedWeek === index && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="bg-accent/10 rounded-lg p-3">
                    <h5 className="font-medium text-accent-dark text-sm mb-1">Assignment:</h5>
                    <p className="text-sm text-accent-dark/80">{week.assignment}</p>
                  </div>
                  {index === 3 && (
                    <div className="mt-3 bg-blue-50 rounded-lg p-3">
                      <h5 className="font-medium text-blue-800 text-sm mb-1">🎯 Capstone Week</h5>
                      <p className="text-sm text-blue-700">Present your final project and get feedback</p>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-4 text-center">
                <span className="text-xs text-slate-500">
                  {expandedWeek === index ? 'Click to collapse' : 'Click to expand'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
