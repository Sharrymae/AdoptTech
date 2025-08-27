import React, { useState } from 'react';
import { Search, Filter, DollarSign, Globe } from 'lucide-react';
import PartnerCard from '../components/Partners/PartnerCard';
import { partners } from '../data/partners';

const Partners: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedReward, setSelectedReward] = useState<string>('All');
  const [selectedGeography, setSelectedGeography] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const industries = ['All', ...Array.from(new Set(partners.map(p => p.industry)))];
  const rewards = ['All', '$25', '$50', '$100', '$150'];
  const geographies = ['All', ...Array.from(new Set(partners.map(p => p.geography)))];

  const filteredPartners = partners.filter(partner => {
    const matchesIndustry = selectedIndustry === 'All' || partner.industry === selectedIndustry;
    const matchesReward = selectedReward === 'All' || `$${partner.reward}` === selectedReward;
    const matchesGeography = selectedGeography === 'All' || partner.geography === selectedGeography;
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesReward && matchesGeography && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Discover Top B2B Partners &{' '}
            <span className="text-green-600">Get Rewarded</span>{' '}
            for Every Demo
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Browse verified B2B solutions, attend qualified demos, and earn $25-$150 for your time. 
            Find the perfect tools for your business while getting paid to learn.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">$25-$150</div>
              <div className="text-gray-600">Per Demo Attended</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Verified Partners</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">4-8 Weeks</div>
              <div className="text-gray-600">Payment Schedule</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative lg:col-span-1">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              />
            </div>

            {/* Industry Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 appearance-none bg-white"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Reward Filter */}
            <div className="relative">
              
              <select
                value={selectedReward}
                onChange={(e) => setSelectedReward(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 appearance-none bg-white w-full"
              >
                {rewards.map(reward => (
                  <option key={reward} value={reward}>
                    {reward === 'All' ? 'All Rewards' : reward}
                  </option>
                ))}
              </select>
            </div>

            {/* Geography Filter */}
            <div className="relative">
              <Globe className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <select
                value={selectedGeography}
                onChange={(e) => setSelectedGeography(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 appearance-none bg-white w-full"
              >
                {geographies.map(geography => (
                  <option key={geography} value={geography}>
                    {geography === 'All' ? 'All Regions' : geography}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPartners.length} of {partners.length} partners
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPartners.map(partner => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>

        {/* No Results */}
        {filteredPartners.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-xl mb-4">No partners found</div>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Partners;