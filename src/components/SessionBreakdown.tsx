import { useState } from 'react';
import { ROADMAP } from '../data/roadmap';

interface SessionDetail {
  duration: string;
  assignment: string;
}

export default function SessionBreakdown() {
  const [expandedSession, setExpandedSession] = useState<number | null>(null);

  const allSessions = ROADMAP.flatMap(week => 
    week.sessions.map(session => ({
      ...session,
      week: week.week
    }))
  );

  const sessionDetails: Record<number, SessionDetail> = {
    1: { duration: "45 min", assignment: "Set up ChatGPT account and try 3 basic prompts" },
    2: { duration: "60 min", assignment: "Complete writing tasks: email, summary, and creative piece" },
    3: { duration: "45 min", assignment: "Practice prompt structure with 5 different scenarios" },
    4: { duration: "60 min", assignment: "Create daily task list and journal entry using AI" },
    5: { duration: "60 min", assignment: "Write blog outline and 3 social media captions" },
    6: { duration: "45 min", assignment: "Explore Canva AI and create one design" },
    7: { duration: "60 min", assignment: "Build 5 custom prompts for your work/life" },
    8: { duration: "45 min", assignment: "Choose and outline your capstone project" },
    9: { duration: "45 min", assignment: "Research automation tools relevant to your project" },
    10: { duration: "45 min", assignment: "Review AI safety checklist and best practices" },
    11: { duration: "60 min", assignment: "Present capstone project and get feedback" },
    12: { duration: "45 min", assignment: "Create learning continuation plan" }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Detailed Session Breakdown
          </h2>
          <p className="text-gray-600">
            Click on any session to see the full details and assignments
          </p>
        </div>

        <div className="space-y-4">
          {allSessions.map((session) => (
            <div
              key={session.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedSession(expandedSession === session.id ? null : session.id)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                aria-expanded={expandedSession === session.id}
                aria-label={`Session ${session.id} details`}
              >
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Session {session.id}: {session.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{session.week}</p>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSession === session.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedSession === session.id && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Learning Outcome:</h4>
                      <p className="text-gray-700">{session.outcome}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Duration:</h4>
                      <p className="text-gray-700">{sessionDetails[session.id]?.duration}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Assignment:</h4>
                    <p className="text-gray-700">{sessionDetails[session.id]?.assignment}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
