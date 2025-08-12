export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Small Business Owner",
      content: "I went from being intimidated by AI to using it daily for my marketing. The prompt library alone has saved me hours each week!",
      rating: 5
    },
    {
      name: "James K.",
      role: "Teacher",
      content: "The training was so practical. I now use AI to create lesson plans, grade assignments, and communicate with parents more effectively.",
      rating: 5
    },
    {
      name: "Grace W.",
      role: "Freelance Writer",
      content: "My productivity doubled after learning proper prompting techniques. The capstone project helped me build an AI writing assistant.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Students Say
          </h2>
          <p className="text-sm text-gray-500 italic">Sample testimonials for illustration</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.content}"
              </blockquote>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
