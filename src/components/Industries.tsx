import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LucideIcon } from "./Icons";
import { INDUSTRIES } from "../data";
import { ArrowRight, Star, Sparkles, Check, PhoneCall, Volume2 } from "lucide-react";

export default function Industries() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const activeIndustry = INDUSTRIES[selectedIdx];

  return (
    <section id="industries" className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
      {/* Background radial soft light */}
      <div className="absolute top-[30%] left-[20%] w-[450px] h-[450px] bg-blue-600/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 rounded-full">
            Industry Blueprint Pack
          </span>
          <h2 className="mt-4 text-white font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
            Built For Businesses That <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Handle Customer Calls.
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Select your industry from the pak below to discover how our tailored voice AI paths automate bookings and recapture lost leads.
          </p>
        </div>

        {/* INTERACTIVE BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Grid Panel — 12 industry selectors (8 columns on medium, fits beautifully) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {INDUSTRIES.map((ind, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={ind.name}
                  onClick={() => setSelectedIdx(idx)}
                  className={`group p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden cursor-pointer ${
                    isSelected
                      ? "bg-[#0c101c] border-transparent shadow-xl shadow-pink-500/10 z-20"
                      : "bg-[#111827]/40 border-white/5 hover:border-white/10"
                  }`}
                >
                  {/* Glowing border outline overlay */}
                  {isSelected && (
                    <div
                      className="absolute inset-0 rounded-2xl p-[2.5px] bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 pointer-events-none"
                      style={{
                        boxShadow: "0 0 20px rgba(236, 72, 153, 0.25)"
                      }}
                    >
                      <div className="w-full h-full bg-[#0c101c] rounded-[14px]" />
                    </div>
                  )}

                  {/* Inner element container to sit on top of the border layout */}
                  <div className="relative z-10 w-full h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between w-full">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        isSelected 
                          ? "bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/20" 
                          : "bg-pink-500/10 text-pink-400 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-rose-500 group-hover:text-white"
                      }`}>
                        <LucideIcon name={ind.iconName} className="w-6 h-6" />
                      </div>
                      {isSelected && (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                        </span>
                      )}
                    </div>

                    <h3 className={`mt-4 font-display font-extrabold text-sm sm:text-base tracking-tight ${
                      isSelected ? "text-white" : "text-gray-300 group-hover:text-pink-300"
                    }`}>
                      {ind.name}
                    </h3>

                    <p className="text-[13px] text-emerald-400/90 font-semibold mt-1.5 truncate">
                      {ind.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Preview Panel — Dynamic script visual debugger (4 columns) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#121829] to-[#0a0d16] rounded-3xl border-2 border-indigo-500/60 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl shadow-2xl shadow-indigo-500/20 ring-4 ring-indigo-500/10">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/20 blur-[50px] pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Header info */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-300 border border-indigo-500/25">
                    <LucideIcon name={activeIndustry.iconName} className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-display text-base leading-tight">
                      {activeIndustry.name}
                    </h4>
                    <span className="text-[10px] text-indigo-300 font-mono">
                      {activeIndustry.description}
                    </span>
                  </div>
                </div>

                {/* Practical sample actions */}
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-pink-400 font-bold uppercase tracking-wider">Automated Feature Usecase</span>
                    <p className="text-xs text-gray-200 leading-relaxed font-sans font-medium">
                      {activeIndustry.useCase}
                    </p>
                  </div>

                  {/* Simulated standard greeting block */}
                  <div className="bg-black/40 border border-white/5 rounded-xl p-3.5 text-left shadow-inner">
                    <span className="text-[9px] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-300 uppercase flex items-center gap-1.5 mb-1.5">
                      <Volume2 className="w-3 h-3 text-pink-400 animate-bounce" />
                      Clara AI Custom Greeting Recipe
                    </span>
                    <p className="text-xs text-gray-300 italic font-medium leading-relaxed">
                      &ldquo;Hi! Thanks for calling our local {activeIndustry.name}! I can check our calendar, book appointments, or answer your operational questions instantly. How can I help you?&rdquo;
                    </p>
                  </div>
                </div>

                {/* Core automated tasks list for selected vertical */}
                <div className="space-y-2 pt-3 border-t border-indigo-500/20">
                  <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-widest block">Standard Integration Pipeline</span>
                  
                  <div className="space-y-2">
                    {["Dynamic Calendar Mapping", "Immediate confirmation SMS", "Sync details to Client CRM"].map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200 font-semibold">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 py-4 px-8 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 hover:from-pink-600 hover:via-rose-600 hover:to-fuchsia-700 active:scale-95 shadow-xl shadow-pink-500/35 hover:shadow-2xl hover:shadow-pink-500/50 text-white font-extrabold text-xs sm:text-[13px] tracking-widest transition-all uppercase flex items-center justify-center gap-2 cursor-pointer border border-pink-400/30"
            >
              <span>BUILD MY AI ASSISTANT NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
