import { useState } from "react";
import { motion } from "motion/react";
import { LucideIcon } from "./Icons";
import { PAIN_POINTS } from "../data";
import { AlertCircle, TrendingDown, DollarSign, ArrowUpRight, HelpCircle } from "lucide-react";

export default function PainPoints() {
  // Calculator States
  const [missedCallsWeek, setMissedCallsWeek] = useState(15);
  const [averageJobValue, setAverageJobValue] = useState(250);
  const [closeRate, setCloseRate] = useState(30); // 30% conversion rate

  const weeklyLostLeads = Math.round(missedCallsWeek * (closeRate / 100));
  const weeklyLoss = weeklyLostLeads * averageJobValue;
  const monthlyLoss = weeklyLoss * 4.3;
  const annualLoss = weeklyLoss * 52;

  return (
    <section id="pain-points" className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
      {/* Background Neon Spotlights - Blue and Pink */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-pink-900/10 blur-[120px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-pink-500 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block">
            📈 The Bleeding Balance Sheet
          </span>
          <h2 className="mt-4 text-white font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
            How Much Money Is Your Business <br />
            <span className="bg-gradient-to-r from-[#6366f1] via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Losing Every Single Day?
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg">
            Every call that goes to voicemail is a card swiped by your fastest competitor. When local consumers call, trust is measured in seconds, not hours.
          </p>
        </div>
 
        {/* INTERACTIVE LEAKAGE CALCULATOR BLOCK */}
        <div className="mb-20 bg-gradient-to-b from-slate-900/50 to-slate-950/90 rounded-[28px] border border-indigo-500/20 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          {/* Accent Glow Backdrops */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/5 blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/5 blur-[100px] -z-10" />
           
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
             
            {/* Controls */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-pink-400 uppercase tracking-wider font-bold">
                  Interactive Dynamic Modeler
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Estimate Your Business Leaks</h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">Adjust the sliders to mirror your real-world weekly telephone volume.</p>
              </div>
 
              {/* Slider 1: Missed Calls */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-gray-300 flex items-center gap-2">
                    Missed Calls per Week:
                  </span>
                  <span className="text-pink-400 font-mono font-bold text-base bg-gradient-to-r from-indigo-500/10 to-pink-500/10 px-3 py-0.5 rounded-full border border-pink-500/20">
                    {missedCallsWeek} calls
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={missedCallsWeek}
                  onChange={(e) => setMissedCallsWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-500"
                />
                <div className="flex justify-between text-[11px] text-gray-500 font-mono">
                  <span>5 calls</span>
                  <span>50 calls</span>
                  <span>100 calls</span>
                </div>
              </div>
 
              {/* Slider 2: Average Sale Vel */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-gray-300">Average Customer Lifetime Value ($):</span>
                  <span className="text-pink-400 font-mono font-bold text-base bg-gradient-to-r from-indigo-500/10 to-pink-500/10 px-3 py-0.5 rounded-full border border-pink-500/20">
                    ${averageJobValue}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={averageJobValue}
                  onChange={(e) => setAverageJobValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-500"
                />
                <div className="flex justify-between text-[11px] text-gray-500 font-mono">
                  <span>$50</span>
                  <span>$1,000</span>
                  <span>$2,000</span>
                </div>
              </div>
 
              {/* Slider 3: Close/Lead rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-gray-300">Lead-to-Booking Conversion Rate:</span>
                  <span className="text-pink-400 font-mono font-bold text-base bg-gradient-to-r from-indigo-500/10 to-pink-500/10 px-3 py-0.5 rounded-full border border-pink-500/20">
                    {closeRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-500"
                />
                <div className="flex justify-between text-[11px] text-gray-500 font-mono">
                  <span>10% (Low)</span>
                  <span>45% (Avg)</span>
                  <span>80% (High)</span>
                </div>
              </div>
            </div>
 
            {/* Calculations Result Column */}
            <div className="lg:col-span-5 bg-black/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full relative">
              <div className="absolute top-2 right-2">
                <AlertCircle className="w-5 h-5 text-indigo-400 bg-indigo-500/10 rounded-full" />
              </div>
               
              <div className="space-y-4">
                <span className="text-xs font-mono text-gray-500 font-semibold uppercase">Projected Revenue Leakage</span>
                 
                <div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-widest font-bold">Monthly Loss</div>
                  <div className="text-4xl sm:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-fuchsia-400 to-pink-500 mt-1 leading-none">
                    ${monthlyLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                </div>
 
                <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wide font-medium">Weekly Leaks</div>
                    <div className="text-xl font-bold text-indigo-300 mt-0.5">
                      ${weeklyLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wide font-medium">Annual Damage</div>
                    <div className="text-xl font-bold text-pink-400 mt-0.5">
                      ${annualLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                  </div>
                </div>
              </div>
 
              <div className="mt-8 bg-gradient-to-r from-indigo-500/5 to-pink-500/5 rounded-xl border border-indigo-500/15 p-3 flex gap-2.5 items-start text-xs text-gray-300">
                <span className="font-bold shrink-0 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-2 py-0.5 rounded font-mono text-[9px]">
                  CRITICAL
                </span>
                <p>
                  <strong>70% of customers</strong> call competitors when nobody answers. That is a permanent loss of customer lifetime value.
                </p>
              </div>
            </div>
 
          </div>
        </div>
 
        {/* 6 Grid Cards for Pain points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PAIN_POINTS.map((pain, idx) => (
            <motion.div
              key={pain.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative bg-[#111827]/40 border border-white/5 hover:border-indigo-500/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-[#6366f1]/5 hover:-translate-y-1 block"
            >
              {/* Card top banner warning highlight with custom Blue+Pink gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6366f1]/10 via-pink-500/40 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
 
              <div className="flex items-center justify-between">
                {/* Icon wrapper with soft Blue+Pink gradient border and translucent filling */}
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#6366f1]/10 to-pink-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-all">
                  <LucideIcon name={pain.iconName} className="w-5 h-5 text-indigo-400 group-hover:text-pink-400 transition-colors" />
                </div>
                 
                {/* Metrics Highlight badge in pink to match theme */}
                <div className="flex items-center gap-1 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-pink-500/20 px-2.5 py-1 rounded-md text-pink-400 font-mono text-[11px] font-extrabold shadow-sm">
                  <TrendingDown className="w-3.5 h-3.5 text-pink-400" />
                  <span>{pain.stat}</span>
                </div>
              </div>
 
              <h4 className="mt-5 text-white font-display text-lg font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-pink-300 transition-all">
                {pain.title}
              </h4>
               
              <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                {pain.description}
              </p>
 
              <div className="mt-4 pt-4 border-t border-white/[0.03] flex items-center justify-between text-[11px] font-mono text-gray-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 transition-colors font-semibold">
                <span>REVENUE LEAKAGE HIGH</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-pink-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
