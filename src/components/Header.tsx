import { useState, useEffect } from "react";
import { Phone, ArrowRight, Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
              <Phone className="w-5 h-5 text-white animate-pulse" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
              voxora<span className="text-sm bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded-md border border-indigo-400/20 font-mono">AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("pain-points")}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer font-medium"
            >
              The Problem
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer font-medium"
            >
              Our Solution
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer font-medium"
            >
              FAQ
            </button>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection("consultation")}
              className="relative group overflow-hidden px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/50 text-sm font-semibold text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Watch Demo</span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            </button>

            <button
              onClick={() => scrollToSection("consultation")}
              className="relative group overflow-hidden px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25 text-white text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => scrollToSection("consultation")}
              className="px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold"
            >
              Book Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] z-40 bg-[#0B0F19]/95 backdrop-blur-lg flex flex-col px-6 py-8 gap-6 border-t border-white/5">
          <button
            onClick={() => scrollToSection("pain-points")}
            className="text-lg text-left text-gray-300 hover:text-white transition-colors py-1 py border-b border-white/5"
          >
            The Problem
          </button>
          <button
            onClick={() => scrollToSection("solution")}
            className="text-lg text-left text-gray-300 hover:text-white transition-colors py-1 border-b border-white/5"
          >
            Meet the AI Employee
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-lg text-left text-gray-300 hover:text-white transition-colors py-1 border-b border-white/5"
          >
            Investment Plans
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-lg text-left text-gray-300 hover:text-white transition-colors py-1"
          >
            Frequently Asked Questions
          </button>

          <button
            onClick={() => scrollToSection("consultation")}
            className="mt-4 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-center"
          >
            <span>Book Free Demo Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </header>
  );
}
