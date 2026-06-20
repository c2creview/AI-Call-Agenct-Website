import { Phone, Mail, Linkedin, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToBooking = () => {
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0F19] relative overflow-hidden border-t border-white/5 pt-20">
      {/* Background neon elements */}
      <div className="absolute top-[10%] left-[30%] w-[500px] h-[500px] bg-indigo-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION 13: HIGH RANGE FINAL CONVERSION CTA */}
        <div className="relative rounded-[32px] bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-purple-950/20 border border-indigo-500/10 p-8 sm:p-14 text-center max-w-5xl mx-auto mb-20 overflow-hidden">
          {/* Inner ambient shine circles */}
          <div className="absolute -top-[50%] -left-[20%] w-[350px] h-[350px] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-[50%] -right-[20%] w-[350px] h-[350px] bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-400/20 px-3 py-1 rounded-full inline-block">
              Immediate Competitive Edge
            </span>

            <h2 className="text-white font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none leading-none">
              Stop Losing Customers Because <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Nobody Answered The Phone.
              </span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              Your competitors are already automating customer communication. Secure your inbound pipeline and capture leads around the clock.
            </p>

            <div className="pt-4">
              <button
                onClick={scrollToBooking}
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 flex items-center justify-center gap-2 cursor-pointer mx-auto border border-white/10"
              >
                <span>Book Free Demo Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* MINIMAL PREMIUM FOOTER CONTAINER */}
        <div className="border-t border-white/5 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* Left Block: Branding */}
          <div className="space-y-3">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 justify-center md:justify-start cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white flex items-center gap-1">
                voxora<span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-1 py-0.5 rounded border border-indigo-400/20 font-mono">AI</span>
              </span>
            </div>
            
            <p className="text-[11px] text-gray-500 font-mono">
              Empowering local commerce via conversational automation.
            </p>
          </div>

          {/* Middle list: Contact elements */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs text-gray-400 font-medium">
            <a 
              href="mailto:hello@voxora.ai" 
              className="hover:text-indigo-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-indigo-500" />
              <span>hello@voxora.ai</span>
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4 text-indigo-500" />
              <span>LinkedIn profile</span>
            </a>
          </div>

          {/* Right Block: Terms copy & Legal policy */}
          <div className="space-y-2 md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-4 text-xs font-semibold text-gray-500">
              <span className="hover:text-gray-300 transition-colors cursor-pointer">Privacy Policy</span>
              <span>&middot;</span>
              <span className="hover:text-gray-300 transition-colors cursor-pointer">Terms of Service</span>
            </div>
            <p className="text-[10px] text-gray-600 font-mono">
              &copy; {new Date().getFullYear()} Voxora AI Technologies, Inc. All rights reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
