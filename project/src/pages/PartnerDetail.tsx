import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { partners } from "../data/partners";
import DemoQualificationForm from "../components/DemoQualificationForm";

const PartnerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const partner = partners.find((p) => p.id.toString() === id);

  const [isFormOpen, setIsFormOpen] = useState(false);

  if (!partner) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Partner not found</h2>
          <Link to="/partners" className="text-blue-600 hover:text-blue-700">
            Return to Partners
          </Link>
        </div>
      </div>
    );
  }

  const handleFormSubmit = (data: any) => {
    console.log("Qualification data submitted:", data);
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Partners
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <img src={partner.logo} alt={partner.name} className="w-32 h-32 object-contain" />
            <div>
              <h1 className="text-3xl font-bold">{partner.name}</h1>
              <p className="text-gray-600 mt-2">Reward: ${partner.reward}</p>
            </div>
          </div>

          <button
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={() => setIsFormOpen(true)}
          >
            Apply for Demo
          </button>
        </div>
      </div>

      <DemoQualificationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
        partnerLogo={partner.logo}
      />
    </div>
  );
};

export default PartnerDetail;

