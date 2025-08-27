import React from 'react';
import { DollarSign, Clock, Shield, CreditCard, HelpCircle } from 'lucide-react';

const Rewards: React.FC = () => {
  const paymentMethods = [
    {
      icon: '💳',
      name: 'PayPal',
      description: 'Fast and secure payments worldwide',
      processingTime: '30 days after demo'
    }
  ];

  const faqs = [
    {
      question: 'How much can I earn per demo?',
      answer: 'Rewards range from $25 to $150 per qualified demo, depending on the partner and complexity of their solution. Higher-value enterprise solutions typically offer larger rewards.'
    },
    {
      question: 'When will I receive my reward?',
      answer: 'Rewards are processed 30 days after completing a qualified demo. You\'ll receive an email confirmation once the payment has been initiated via PayPal.'
    },
    {
      question: 'What qualifies as a "completed demo"?',
      answer: 'A completed demo means you attended the full scheduled session, actively participated, and met all the pre-qualification criteria. The partner confirms completion on their end.'
    },
    {
      question: 'Are there any fees deducted from my reward?',
      answer: 'No, we don\'t charge any fees. You receive the full reward amount. However, PayPal may have their own transaction fees.'
    },
    {
      question: 'Can I attend multiple demos?',
      answer: 'Absolutely! There\'s no limit to how many demos you can attend. Many users earn $300-800+ per month by participating in multiple qualified demos.'
    },
    {
      question: 'What if I don\'t meet the qualification criteria?',
      answer: 'If you don\'t meet the criteria, you won\'t be eligible for that specific demo. However, we have partners across many industries and company sizes, so you\'ll likely find suitable opportunities.'
    },
    {
      question: 'Is there a minimum payout amount?',
      answer: 'No minimum payout. You\'ll receive your reward for each individual demo you complete, regardless of the amount.'
    },
    {
      question: 'How do I track my earnings?',
      answer: 'We\'re building a user dashboard where you can track all your demos, earnings, and payment history. Currently, you\'ll receive email confirmations for each step of the process.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-green-100 text-green-600 p-4 rounded-2xl">
              
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Earn Rewards for{' '}
            <span className="text-green-600">Your Time</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Get paid $25-$150 for attending qualified business demos. 
            It's that simple. Discover great solutions and earn rewards for your participation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">$25-$150</div>
              <div className="text-gray-600">Per Demo Attended</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">4-8 Weeks</div>
              <div className="text-gray-600">Payment Processing</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">No Fees</div>
              <div className="text-gray-600">From AdoptTech</div>
            </div>
          </div>
        </div>
      </div>

      {/* How Rewards Work */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Rewards Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our reward system is designed to be transparent, fair, and reliable. 
              Here's exactly how you earn and receive your payments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apply for Demo</h3>
              <p className="text-gray-600">
                Browse partners and apply for demos that match your business profile and interests.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Attend Demo</h3>
              <p className="text-gray-600">
                Participate in the scheduled demo session and learn about the solution.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Demo Confirmed</h3>
              <p className="text-gray-600">
                Partner confirms you attended the full demo and met qualification requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Paid</h3>
              <p className="text-gray-600">
                Receive your reward within 4-8 weeks via your preferred payment method.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Payment Method
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All rewards are paid via PayPal 4-8 weeks after your demo completion. 
              This ensures partners have time to evaluate the demo quality before payment processing.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.name}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-center">
                      <Clock className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">{method.processingTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-start">
              <Shield className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable Payments</h3>
                <p className="text-gray-600">
                  All payments are processed through PayPal's secure platform. 
                  We never store your payment information, and all transactions are encrypted and protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about earning rewards with AdoptTech Solutions.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;