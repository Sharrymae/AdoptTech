import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Users, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                
                <span>Earn $25-$150 per demo</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-blue-600">Earn</span>{' '}
              While You{' '}
              
              <span className="text-blue-600">Evaluate</span>  
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Looking for your next B2B solution? 
              Explore our curated marketplace of trusted partners — and get compensated $25–$150 for your time for every partner you meet with.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/partners"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Browse Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white hover:bg-gray-50 border-2 border-blue-600 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Book Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">$50K+</div>
                <div className="text-sm text-gray-600">Paid</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1K+</div>
                <div className="text-sm text-gray-600">Successful Demos</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-2">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900">Demo Dashboard</span>
                </div>
                <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm font-medium">
                 
                  <span>$75 earned</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Bambee</div>
                      <div className="text-sm text-gray-500">Demo completed</div>
                    </div>
                  </div>
                  <div className="text-green-600 font-semibold">$50</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Aspire</div>
                      <div className="text-sm text-blue-600">Scheduled for today</div>
                    </div>
                  </div>
                  <div className="text-blue-600 font-semibold">$150</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;