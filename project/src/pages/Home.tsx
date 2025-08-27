import React from 'react';
import Hero from '../components/Home/Hero';
import HowItWorks from '../components/Home/HowItWorks';
import FeaturedPartners from '../components/Home/FeaturedPartners';
import Testimonials from '../components/Home/Testimonials';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <FeaturedPartners />
      <Testimonials />
    </div>
  );
};

export default Home;