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

        {/* PRICING PLANS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto mb-12">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group flex flex-col justify-between rounded-[28px] p-6 sm:p-8 text-left transition-all duration-300 relative overflow-hidden ${
                plan.isPopular
                  ? "bg-slate-900 border-2 border-indigo-500/80 shadow-2xl shadow-indigo-500/10 relative scale-102"
                  : "bg-[#111827]/40 border border-white/5 hover:border-white/10 hover:bg-[#111827]/60"
              }`}
            >
              {/* Highlight popular glow effect */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
              )}

              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-display font-extrabold text-lg sm:text-xl">
                    {plan.name}
                  </h3>
                  {plan.isPopular && (
                    <span className="text-[9px] uppercase font-mono font-black text-indigo-300 bg-indigo-500/15 border border-indigo-500/20 px-2 py-1 rounded-md tracking-wider">
                      MOST POPULAR
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed min-h-[40px]">
                  {plan.description}
                </p>

                {/* Big Price Tag */}
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-white font-display font-black text-4xl tracking-tight leading-none">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 font-mono text-xs font-semibold">
                    / {plan.period}
                  </span>
                </div>

                {/* Features list */}
                <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <div className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/25 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-indigo-400" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <button
                  onClick={scrollToBooking}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-center text-xs transition-all tracking-wider uppercase cursor-pointer flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30 border border-white/10"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
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
