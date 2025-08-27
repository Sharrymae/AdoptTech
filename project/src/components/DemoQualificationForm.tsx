import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ExternalLink, Users, Calendar, Globe } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { SiG2 } from 'react-icons/si';
import { partners } from '../data/partners';
import DemoQualificationForm from '../components/DemoQualificationForm';

const PartnerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const partner = partners.find(p => p.id === id);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormSubmit = (data: any) => {
    console.log("Qualification data submitted:", data);
    // TODO: send form data to backend or API
  };

  if (!partner) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Partner not found</h2>
          <Link to="/partners" className="text-blue-600 hover:text-blue-700">
            Return to Partners Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/partners"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Partners
        </Link>

        {/* Partner Header */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-32 h-32 bg-white rounded-2xl shadow flex items-center justify-center p-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-0">
                  {partner.name}
                </h1>
                <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-4 py-2 rounded-full text-lg font-semibold">
                  <span>Earn ${partner.reward}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4 flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {partner.industry}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  {partner.geography}
                </span>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                {partner.description}
              </p>

              {/* Website + LinkedIn + G2 Links */}
              <div className="mt-4 flex space-x-4 items-center">
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Website
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}

                {partner.linkedin && (
                  <a
                    href={partner.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-700 hover:text-blue-900"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                )}

                {partner.g2 && (
                  <a
                    href={partner.g2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-600 hover:text-orange-800"
                  >
                    <SiG2 className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Qualification Criteria */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Qualification Criteria</h2>
              <p className="text-gray-600 mb-6">
                To ensure you're a good fit for this demo and to qualify for the ${partner.reward} reward, 
                please make sure you meet the following requirements:
              </p>

              <ul className="space-y-4">
                {partner.qualificationCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Demo Process */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">30-60 Minute Demo</h3>
                    <p className="text-gray-600">
                      Join a personalized demo session where you'll learn about {partner.name}'s 
                      solution and how it can benefit your business.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">
                      Schedule the demo at your convenience. Most demos can be arranged within 1-2 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Reward Payment</h3>
                    <p className="text-gray-600">
                      Receive your ${partner.reward} reward 4-8 weeks after completing the demo, 
                      sent via PayPal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  ${partner.reward}
                </div>
                <p className="text-gray-600">Reward for attending demo</p>
              </div>

              <button
                onClick={() => setIsFormOpen(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 mb-4"
              >
                Apply for Demo
              </button>

              <p className="text-xs text-gray-500 text-center">
                By clicking apply, you'll be redirected to complete the qualification form
              </p>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Info</h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Industry</span>
                  <span className="text-gray-900 font-medium">{partner.industry}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Reward Amount</span>
                  <span className="text-green-600 font-semibold">${partner.reward}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Demo Length</span>
                  <span className="text-gray-900 font-medium">30-60 min</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Time</span>
                  <span className="text-gray-900 font-medium">4-8 weeks</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Geography</span>
                  <span className="text-gray-900 font-medium">{partner.geography}</span>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-100">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Verified Partner</h3>
                <p className="text-sm text-gray-600">
                  This partner has been verified and approved by AdoptTech Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Qualification Form Modal */}
      <DemoQualificationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
        partnerLogo={partner.logo}   // logo displayed on top of form
      />
    </div>
  );
};

export default PartnerDetail;

