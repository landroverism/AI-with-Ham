import { useState } from 'react';

export default function FAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      question: "How much time will this take each week?",
      answer: "Expect 2–4 hours/week total (live sessions + small assignments). Sessions are 45–60 minutes."
    },
    {
      question: "Do I need to install anything?",
      answer: "No installs required. We'll use web tools like ChatGPT and Canva. Phone or laptop with internet is fine."
    },
    {
      question: "What if I can't attend a live session?",
      answer: "All sessions are recorded and you'll get the recording within 24 hours. We can also reschedule if needed."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, full refund available within the first week if you're not satisfied. After Week 1, partial refunds are considered case-by-case."
    },
    {
      question: "How do I pay with M-Pesa?",
      answer: "After booking, you'll receive M-Pesa payment instructions with the Paybill number and reference code. We also accept bank transfers and PayPal."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, you'll receive a completion certificate after finishing all sessions and presenting your capstone project."
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about the AI training program
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                aria-expanded={expandedFAQ === index}
                aria-label={`FAQ: ${faq.question}`}
              >
                <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    expandedFAQ === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedFAQ === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
