import React from "react";
import Headers from "./components/Headers";
import Hero from "./components/Hero";
import WhyUs from "./components/OtherSection";

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Headers />
      <main>
        <Hero />
        <WhyUs />
      </main>
    </div>
  );
}

export default LandingPage;
