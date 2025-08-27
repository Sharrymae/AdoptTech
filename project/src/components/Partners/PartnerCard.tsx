import React from "react";
import { Link } from "react-router-dom";

interface Partner {
  id: string;
  name: string;
  logo: string;
  reward: number;
  industry: string;
  geography: string;
}

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
      <div className="w-full flex justify-center mb-4">
        <img src={partner.logo} alt={partner.name} className="max-h-24 object-contain" />
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
          {partner.industry}
        </span>
        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium">
          {partner.geography}
        </span>
      </div>
      <div className="mb-4">
        <span className="text-green-600 font-semibold">Reward: ${partner.reward}</span>
      </div>
      <Link
        to={`/partners/${partner.id}`}
        className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 mt-auto"
      >
        View Details
      </Link>
    </div>
  );
};

export default PartnerCard;




