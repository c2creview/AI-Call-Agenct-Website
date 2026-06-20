import { motion } from "motion/react";
import { LucideIcon } from "./Icons";
import { SOLUTIONS } from "../data";
import { Check, Cpu, CheckCircle, Database, CalendarDays, Key, Sparkles, MessageSquare, ArrowRight } from "lucide-react";

export default function Solution() {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="solution" className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Lighting circles */}
      <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none" />

      {/* Grid pattern backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 rounded-full">
              SaaS-Grade Virtual Employee
            </span>
            <h2 className="mt-4 text-white font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
              Meet Your <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">AI Employee</span>.
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              We deploy customized conversational voice agents that function identically to elite call center operators. Fast, precise, polite, and fully integrated with your calendar.
            </p>
          </div>

          <div className="shrink-0 flex">
            <button
              onClick={scrollToDemo}
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-indigo-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Test Voice Quality Live</span>
              <ArrowRight className="w-4 h-4 text-indigo-400" />
            </button>
          </div>
        </div>

        {/* Dynamic Architectural layout split between visual & grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive integration architecture map (futuristic visual AI assistant) */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-gradient-to-b from-slate-900/60 to-slate-950/80 rounded-[28px] border border-white/5 p-6 sm:p-8 hover:border-white/10 transition-all relative overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-600/10 blur-[60px] " />
            
            <div className="space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs font-bold uppercase text-gray-400">Integration Blueprint</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white leading-tight">Unification of Inbound and Platform Tech</h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Your voice assistant does not talk in a void. It bridges standard telecommunication cells with database and marketing structures.
                </p>
              </div>

              {/* Graphical Schema representation */}
              <div className="space-y-3 pt-4">
                {/* Channel 1 */}
                <div className="flex items-center gap-3 bg-black/60 border border-white/5 rounded-xl p-3 hover:bg-black/80 transition-colors">
                  <div className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-400/20 w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold">In</div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white">Inbound Phone Cell</div>
                    <div className="text-[12.5px] text-gray-300 font-mono font-medium mt-0.5">Telephony Line forwarder</div>
                  </div>
                </div>

                {/* Bridge Wave */}
                <div className="flex justify-center py-1">
                  <motion.div 
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-0.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-500" 
                  />
                </div>

                {/* Channel 2 */}
                <div className="flex items-center gap-3 bg-black/60 border border-white/5 rounded-xl p-3 hover:bg-black/80 transition-colors">
                  <div className="text-[10px] bg-purple-500/10 text-purple-400 border border-purple-400/20 w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold">AI</div>
                  <div className="text-left flex-1">
                    <div className="text-xs font-bold text-white flex items-center justify-between">
                      <span>Voxora AI Core</span>
                      <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono">Live</span>
                    </div>
                    <div className="text-[12.5px] text-gray-300 font-mono font-medium mt-0.5">Ultra-low-latency conversation Engine</div>
                  </div>
                </div>

                {/* Bridge Wave */}
                <div className="flex justify-center py-1">
                  <motion.div 
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
                    className="w-0.5 h-6 bg-gradient-to-b from-purple-500 to-indigo-500" 
                  />
                </div>

                {/* Channel 3 */}
                <div className="flex items-center gap-3 bg-black/60 border border-white/5 rounded-xl p-3 hover:bg-black/80 transition-colors">
                  <div className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-400/20 w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold">Sync</div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white">Calendars & CRM Pipeline</div>
                    <div className="text-[12.5px] text-gray-300 font-mono font-medium mt-0.5">Automated bookings and syncs</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-left bg-black/20 p-3 rounded-xl border border-white/5">
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-mono font-bold">100% SECURE</span>
              <p className="text-[11px] text-gray-400 mt-1.5">
                GDPR compliant. All text, voice transcribing, and schedules are secured using military grade AES-256 keys.
              </p>
            </div>
          </div>

          {/* Right Column: 10 Features list grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {SOLUTIONS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group bg-[#111827]/35 border border-white/5 hover:border-indigo-500/30 rounded-2xl p-5 hover:bg-[#111827]/60 hover:shadow-lg hover:shadow-indigo-500/2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    {/* Icon frame */}
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <LucideIcon name={item.iconName} className="w-5 h-5 text-indigo-400 group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="text-white text-base font-display font-medium group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Dynamic Highly Visible Green Footer Highlight */}
                <div className="mt-4 pt-3.5 border-t border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-emerald-400 bg-emerald-500/[0.04] px-3 py-1.5 rounded-xl border border-emerald-500/20 shadow-sm shadow-emerald-500/2 transition-colors">
                  <span className="tracking-widest font-bold opacity-90">ACTIVATION ID: V0{item.id}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    <span className="text-emerald-400 font-black tracking-wider text-[10px]">ACTIVE STATE</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
