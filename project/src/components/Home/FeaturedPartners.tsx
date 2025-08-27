import React from "react";
import PartnerCard from "../Partners/PartnerCard";
import { partners } from "../../data/partners";

const FeaturedPartners: React.FC = () => {
  const featuredPartners = partners.filter((p) => p.featured);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPartners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPartners;



