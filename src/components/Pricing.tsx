import { motion } from "motion/react";
import { PRICING_PLANS } from "../data";
import { Check, Star, ShieldAlert, BadgeAlert, ArrowUpRight } from "lucide-react";

export default function Pricing() {
  const scrollToBooking = () => {
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
      {/* Background neon orbs */}
      <div className="absolute top-[25%] right-[-10%] w-[450px] h-[450px] bg-blue-600/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[400px] h-[400px] bg-indigo-600/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4f46e5] bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block">
            One-Time Business Investement
          </span>
          <h2 className="mt-4 text-white font-display text-4xl font-extrabold tracking-tight">
            Simple One-Time Setup Pricing.
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            No expensive rolling agreements or hidden platform licensing keys from us. Pay once to deploy your custom voice assistant, then capture leads forever.
          </p>
        </div>

        {/* PRICING PLANS CONTAINER */}
        <div className="max-w-4xl mx-auto mb-12">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#111827]/40 border border-indigo-500/30 rounded-[32px] p-6 sm:p-10 text-left transition-all duration-300 relative overflow-hidden shadow-2xl shadow-indigo-500/5 hover:border-indigo-500/50"
            >
              {/* Highlight popular glow effect */}
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                {/* Left side: Price & Call to Action (5 Columns) */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-white font-display font-extrabold text-xl sm:text-2xl tracking-tight">
                        {plan.name}
                      </h3>
                      <span className="text-[9px] uppercase font-mono font-black text-indigo-300 bg-indigo-500/15 border border-indigo-500/20 px-2 py-1 rounded-md tracking-wider">
                        All-Inclusive Setup
                      </span>
                    </div>

                    <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Big Price Tag */}
                    <div className="mt-8 flex flex-col">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 mb-1">Total One-Time Setup Fee</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-white font-display font-black text-4xl sm:text-5xl tracking-tight leading-none bg-clip-text bg-gradient-to-r from-white via-white to-gray-300">
                          {plan.price}
                        </span>
                        <span className="text-gray-500 font-mono text-xs font-semibold">
                          / {plan.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-8">
                    <button
                      onClick={scrollToBooking}
                      className="w-full py-4 px-6 rounded-xl font-extrabold text-center text-xs tracking-widest transition-all uppercase cursor-pointer flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30 border border-white/10 hover:shadow-indigo-600/50 hover:scale-[1.01] active:scale-95"
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <p className="text-[10px] text-gray-500 text-center mt-3 font-sans">
                      🔒 No monthly contracts. 100% Asset Ownership.
                    </p>
                  </div>
                </div>

                {/* Right side: Combined Features (7 Columns) */}
                <div className="lg:col-span-7 bg-slate-900/40 border border-white/[0.03] rounded-2xl p-5 sm:p-7 flex flex-col justify-center">
                  <h4 className="text-white font-mono text-[10px] font-bold tracking-widest uppercase mb-4 text-indigo-300">
                    INCLUDED CUSTOM BUILD FEATURES:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-400/25 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-emerald-400" />
                        </div>
                        <span className="leading-normal">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="bg-gradient-to-r from-indigo-950/20 via-slate-900/30 to-indigo-950/20 border border-indigo-500/10 rounded-2xl p-4 max-w-2xl mx-auto flex gap-3 items-center text-left">
          <BadgeAlert className="w-5 h-5 text-indigo-400 shrink-0" />
          <p className="text-xs text-gray-400 font-sans tracking-wide leading-relaxed">
            <strong className="text-indigo-300">No monthly contracts or hidden commission models.</strong> You own 100% of the assistant files, prompt assets, CRM triggers, and deployment logic once the one-time build finishes.
          </p>
        </div>

      </div>
    </section>
  );
}
