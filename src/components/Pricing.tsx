import { PRICING } from '../data/pricing';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pricing & Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Full 1-Month Package — KES 23,000. 50% upfront, balance after Week 2. M-Pesa payments accepted.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Package */}
          <div className="bg-gradient-to-br from-teal-50 to-sky-50 rounded-2xl shadow-lg p-8 mb-8 border-2 border-teal-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{PRICING.fullPackage.title}</h3>
              <div className="text-4xl font-bold text-teal-600 mb-2">
                KES {PRICING.fullPackage.priceKES.toLocaleString()}
              </div>
              <p className="text-gray-600">Complete AI training program</p>
            </div>

            <div className="space-y-4 mb-6">
              {PRICING.fullPackage.breakdown.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                  <span className="text-gray-700">{item.item}</span>
                  <span className="font-semibold text-gray-900">KES {item.price.toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Payment Terms:</h4>
              <p className="text-gray-700">{PRICING.fullPackage.paymentTerms}</p>
              
              <div className="mt-4 flex items-center gap-2 text-sm text-teal-700 bg-teal-50 rounded-lg p-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>M-Pesa: Send to [Number will be provided] — Reference: AI Training + Your Name</span>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
                aria-label="Get started with the full package"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRICING.upsells.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                <div className="text-2xl font-bold text-teal-600 mb-4">
                  KES {service.price.toLocaleString()}
                </div>
                <button className="w-full border-2 border-teal-600 text-teal-600 px-4 py-2 rounded-lg font-medium hover:bg-teal-50 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Corporate Note */}
          <div className="mt-8 text-center bg-gray-100 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-2">Corporate / Group Training</h4>
            <p className="text-gray-600">
              Custom workshops for businesses starting at KES 20,000+ per session. 
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-teal-600 hover:text-teal-700 ml-1 underline"
              >
                Contact us for details
              </button>
            </p>
          </div>

          {/* Referral Bonus */}
          <div className="mt-6 text-center bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <p className="text-yellow-800">
              <span className="font-semibold">Referral Bonus:</span> Get KES 1,000 off when you refer a friend who enrolls!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
