import { motion } from "motion/react";
import { Calendar, Hammer, CheckCircle, ArrowRight, Check } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Book a Free Consultation",
      subtitle: "STRATEGY MAPPING SESSION",
      description: "We analyze your dynamic telephone flows, booking steps, standard pricing schedules, and recurring customer queries.",
      icon: <Calendar className="w-8 h-8 text-blue-400" />,
      color: "from-blue-600 to-indigo-600",
      pillText: "TAKES 15 MINS",
      badgeColor: "bg-blue-500/20 border-blue-450/40 text-blue-300 font-extrabold",
      stageColor: "text-blue-400 group-hover:text-blue-300"
    },
    {
      step: "02",
      title: "We Build Your AI Assistant",
      subtitle: "CUSTOM MODEL TRAINING & TESTING",
      description: "Our engineers construct your customized logic tree, integrate Calendly/Google Calendar, record voice prompts, and run rigorous tests.",
      icon: <Hammer className="w-8 h-8 text-indigo-400" />,
      color: "from-indigo-600 to-purple-600",
      pillText: "DONE IN 5 DAYS",
      badgeColor: "bg-purple-500/20 border-purple-450/40 text-purple-300 font-extrabold",
      stageColor: "text-indigo-400 group-hover:text-indigo-300"
    },
    {
      step: "03",
      title: "Your AI Starts Answering",
      subtitle: "AUTOMATIC LAUNCH & CUSTOMER CAPTURE",
      description: "We route your existing business number forward. The AI instantly answers incoming calls, books leads, and sends transcribing alerts.",
      icon: <CheckCircle className="w-8 h-8 text-emerald-400" />,
      color: "from-purple-600 to-emerald-600",
      pillText: "INSTANTLY LIVE",
      badgeColor: "bg-emerald-500/20 border-emerald-450/40 text-emerald-300 font-extrabold",
      stageColor: "text-emerald-400 group-hover:text-emerald-300"
    }
  ];

  return (
    <section className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
      {/* Background soft spots */}
      <div className="absolute top-[30%] left-[-10%] w-[450px] h-[450px] bg-blue-600/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4f46e5] bg-indigo-500/10 border border-indigo-400/20 px-3.5 py-1.5 rounded-full inline-block">
            Seamless Onboarding Protocol
          </span>
          <h2 className="mt-4 text-white font-display text-4xl sm:text-5xl font-black tracking-tight font-sans">
            Simple 3 Step Setup.
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed font-sans font-medium">
            No long deployment loops or technical pain points. We construct, integrate, and launch your customized telephone voice system in under a week.
          </p>
        </div>

        {/* TIMELINE OVERVIEW BOARD */}
        <div className="relative mt-12">
          
          {/* Main sequence connection bar line at the top of the columns */}
          <div className="hidden lg:block absolute top-[80px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-emerald-500/40 -z-0" />

          {/* Three column grid container matching the target screenshot perfectly */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
            {steps.map((info, idx) => (
              <motion.div
                key={info.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative flex flex-col items-center text-center bg-[#111827]/35 border border-white/[0.04] p-8 sm:p-10 rounded-[32px] hover:bg-[#111827]/60 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5"
              >
                {/* Visual Step Connected Circle */}
                <div className={`w-24 h-24 rounded-2xl bg-[#0F1322] border border-white/10 flex items-center justify-center text-white shadow-xl shadow-black/40 mb-8 group-hover:scale-105 group-hover:bg-[#151b30] transition-all duration-300 z-10`}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.color} opacity-95 flex items-center justify-center`}>
                    {info.icon}
                  </div>
                </div>

                {/* Stage Info Segment Row with Top and Bottom Borders (as seen in red highlights of screenshot) */}
                <div className="w-full border-t border-b border-white/10 py-2.5 my-3 mb-6 bg-white/[0.01]">
                  <span className={`text-[11px] font-mono font-black uppercase tracking-[0.2em] block transition-colors ${info.stageColor}`}>
                    STAGE {info.step} &mdash; {info.pillText}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-sans text-xl sm:text-2xl font-black tracking-tight leading-tight">
                  {info.title}
                </h3>
                
                {/* Specific colored badge highlighting current subprocess */}
                <div className={`mt-4 mb-4 px-4 py-1.5 rounded-md border text-[10px] font-mono font-black tracking-widest uppercase ${info.badgeColor} shadow-md inline-block`}>
                  {info.subtitle}
                </div>

                {/* Main description text */}
                <p className="mt-2 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-medium min-h-[64px]">
                  {info.description}
                </p>

                {/* No effort checklist label with nice check icon container */}
                <div className="mt-8 pt-5 border-t border-white/[0.08] w-full flex flex-col sm:flex-row items-center justify-center gap-2.5 text-xs text-slate-300 group-hover:text-emerald-400 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-mono font-black tracking-wider text-[10px] uppercase text-center sm:text-left">
                    NO DEV EFFORT REQUIRED
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Action Button */}
        <div className="mt-20 text-center">
          <button
             id="book-main"
            onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 hover:from-pink-600 hover:via-rose-600 hover:to-fuchsia-700 active:scale-95 shadow-xl shadow-pink-500/35 hover:shadow-2xl hover:shadow-pink-500/50 text-white font-extrabold text-xs sm:text-[13px] tracking-widest transition-all duration-200 uppercase flex items-center justify-center gap-2.5 cursor-pointer border border-pink-400/30 mx-auto"
          >
            <span>BOOK MY AI ASSISTANT NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
