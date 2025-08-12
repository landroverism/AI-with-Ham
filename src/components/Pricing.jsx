import { PRICING } from '../data/pricing';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
            Pricing & Packages
          </h2>
          <p className="text-lg text-text-dark/80 max-w-2xl mx-auto">
            Full 1-Month Package — KES 23,000. 50% upfront, balance after Week 2. M-Pesa payments accepted.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Package */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl shadow-lg p-8 mb-8 border-2 border-primary/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-text-dark mb-2">{PRICING.fullPackage.title}</h3>
              <div className="text-4xl font-bold text-primary mb-2">
                KES {PRICING.fullPackage.priceKES.toLocaleString()}
              </div>
              <p className="text-text-dark/80">Complete AI training program</p>
            </div>

            <div className="space-y-4 mb-6">
              {PRICING.fullPackage.breakdown.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-b-0">
                  <span className="text-text-dark/80">{item.item}</span>
                  <span className="font-semibold text-text-dark">KES {item.price.toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="bg-background-light/50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-text-dark mb-2">Payment Terms:</h4>
              <p className="text-text-dark/80">{PRICING.fullPackage.paymentTerms}</p>
              
              <div className="mt-4 flex items-center gap-2 text-sm text-accent-dark bg-accent/10 rounded-lg p-3">
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
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
                aria-label="Get started with the full package"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRICING.upsells.map((service, index) => (
              <div key={index} className="bg-background-light rounded-xl shadow-md p-6 border border-slate-200">
                <h4 className="font-semibold text-text-dark mb-2">{service.name}</h4>
                <div className="text-2xl font-bold text-primary mb-4">
                  KES {service.price.toLocaleString()}
                </div>
                <button className="w-full border-2 border-primary text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary/10 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Corporate Note */}
          <div className="mt-8 text-center bg-slate-100 rounded-lg p-6">
            <h4 className="font-semibold text-text-dark mb-2">Corporate / Group Training</h4>
            <p className="text-text-dark/80">
              Custom workshops for businesses starting at KES 20,000+ per session. 
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-primary hover:text-primary-dark ml-1 underline"
              >
                Contact us for details
              </button>
            </p>
          </div>

          {/* Referral Bonus */}
          <div className="mt-6 text-center bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-blue-800">
              <span className="font-semibold">Referral Bonus:</span> Get KES 1,000 off when you refer a friend who enrolls!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
