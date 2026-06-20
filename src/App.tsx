/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Sparkles, CalendarRange, ArrowRight, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedByLogos from "./components/TrustedByLogos";
import PainPoints from "./components/PainPoints";
import Solution from "./components/Solution";
import LiveDemo from "./components/LiveDemo";
import Industries from "./components/Industries";
import MarketResearch from "./components/MarketResearch";
import SocialProofAndTestimonials from "./components/SocialProofAndTestimonials";
import VideoTestimonials from "./components/VideoTestimonials";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Consultation from "./components/Consultation";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky pill only after user scrolls past the top section
      setShowStickyCTA(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 font-sans selection:bg-indigo-505 selection:text-white overflow-x-hidden antialiased">
      {/* Structural Headers & Section layers */}
      <Header />
      
      <main className="relative">
        <Hero />
        
        <TrustedByLogos />
        
        <PainPoints />
        
        <Solution />
        
        <LiveDemo />
        
        <Industries />
        
        <MarketResearch />
        
        <SocialProofAndTestimonials />
        
        <VideoTestimonials />
        
        <HowItWorks />
        
        <Pricing />
        
        <Consultation />
        
        <FAQ />
      </main>

      <Footer />

      {/* PERSISTENT STICKY CTA ACTION BUTTON */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
          >
            {/* Scroll back to top */}
            <button
              onClick={scrollToTop}
              className="p-3.5 rounded-full bg-slate-900/90 border border-white/10 text-gray-400 hover:text-white transition-all hover:bg-slate-800 shadow-xl backdrop-blur-md cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>

            {/* Sticky Lead generation pill */}
            <button
              onClick={scrollToBooking}
              className="group relative flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:shadow-2xl hover:shadow-indigo-500/30 text-white font-bold text-xs sm:text-sm transition-all duration-300 border border-white/15 shadow-xl cursor-pointer"
            >
              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-20 blur-md -z-10 group-hover:opacity-40 animate-pulse" />
              
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
              <span>Book Demo Slot</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
