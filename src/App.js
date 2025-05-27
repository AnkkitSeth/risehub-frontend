import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Network from "./components/Network";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Faqs from "./components/Faqs";
import ContactUs from "./components/ContactUs";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import ResearcherDashboard from "./components/ResearcherDashboard";
import InnovatorDashboard from "./components/InnovatorDashboard";
import EntrepreneurDashboard from "./components/EntrepreneurDashboard";
import GovernmentDashboard from "./components/GovernmentDashboard";
import InvestorDashboard from "./components/InvestorDashboard";
import MentorDashboard from "./components/MentorDashboard";

import Mentors from "./components/Mentors";
import Researcher from "./components/Researcher";
import Government from "./components/Government";
import Innovators from "./components/Innovators";
import Entrepreneurs from "./components/Entrepreneurs";
import Investors from "./components/Investors";


function App() {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <>
      {/* Conditionally render Header only if it's not a dashboard route */}
      {!isDashboardRoute && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Network />
              <Features />
              <Projects />
              <Testimonials />
              <Faqs />
              <ContactUs />
            </>
          }
        />

        {/* Authentication Routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard/researcher" element={<ResearcherDashboard />} />
        <Route path="/dashboard/innovator" element={<InnovatorDashboard />} />
        <Route path="/dashboard/entrepreneur" element={<EntrepreneurDashboard />} />
        <Route path="/dashboard/government" element={<GovernmentDashboard />} />
        <Route path="/dashboard/investor" element={<InvestorDashboard />} />
        <Route path="/dashboard/mentor" element={<MentorDashboard />} />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/network" element={<Network />} />
        <Route path="/features" element={<Features />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Other Pages */}
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/researcher" element={<Researcher />} />
        <Route path="/government" element={<Government />} />
        <Route path="/innovators" element={<Innovators />} />
        <Route path="/entrepreneurs" element={<Entrepreneurs />} />
        <Route path="/investors" element={<Investors />} />



        
      </Routes>
    </>
  );
}

export default App;
