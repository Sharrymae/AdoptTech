import React from 'react';
import { Search, CheckCircle, DollarSign } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Pick a Partner',
      description: 'Browse our marketplace of vetted B2B solutions and find partners that match your business needs.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: CheckCircle,
      title: 'Answer Qualification Questions',
      description: 'Complete a quick qualification form to ensure you\'re a good fit for the partner\'s solution.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: DollarSign,
      title: 'Attend Demo & Get Paid',
      description: 'Join the scheduled demo, learn about the solution, and receive $25-$150 for your participation.',
      color: 'bg-green-100 text-green-600'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting compensated for your time while evaluating the right B2B solutions is simple. 
            Follow these three easy steps to start earning while discovering the solutions that fit your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <div key={index} className="relative">
                {/* Connection line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-8 z-0" />
                )}
                
                <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            Ready to get started?{' '}
            <a href="/partners" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200">
              Browse our partners
            </a>{' '}
            and earn your first reward today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;