import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeaturedPartners from "./components/Home/FeaturedPartners";
import PartnerDetail from "./pages/PartnerDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeaturedPartners />} />
        <Route path="/partners/:id" element={<PartnerDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
