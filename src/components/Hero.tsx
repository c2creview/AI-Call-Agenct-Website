import { motion } from "motion/react";
import { Phone, PhoneCall, Calendar, CheckCircle2, ShieldCheck, Play, ArrowRight, Activity, Utensils, Home, Hotel, Scissors, ShieldAlert } from "lucide-react";

const CAROUSEL_INDUSTRIES = [
  {
    name: "Restaurant",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&h=400&q=80",
    workflow: "Takes table bookings & FAQ orders",
    metric: "35% Booking Lift",
    iconColor: "text-amber-400 border-amber-400/20 bg-amber-500/10",
  },
  {
    name: "Dental Clinic",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&h=400&q=80",
    workflow: "Urgent dental triage & bookings",
    metric: "No Missed Emergencies",
    iconColor: "text-teal-400 border-teal-400/20 bg-teal-500/10",
  },
  {
    name: "Real Estate Agency",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&h=400&q=80",
    workflow: "Qualifies buyer budgets & tours",
    metric: "4.8x Lead Call Rate",
    iconColor: "text-blue-400 border-blue-400/20 bg-blue-500/10",
  },
  {
    name: "Hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&h=400&q=80",
    workflow: "Coordinates check-ins & guest questions",
    metric: "24/7 Desk Coverage",
    iconColor: "text-indigo-400 border-indigo-400/20 bg-indigo-500/10",
  },
  {
    name: "Salon",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&h=400&q=80",
    workflow: "Schedules haircuts & stylist calendars",
    metric: "Full Books Guarantee",
    iconColor: "text-pink-400 border-pink-400/20 bg-pink-500/10",
  },
  {
    name: "Insurance Company",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&h=400&q=80",
    workflow: "Claims filing & details intake",
    metric: "60% Admin Savings",
    iconColor: "text-emerald-400 border-emerald-400/20 bg-emerald-500/10",
  }
];

export default function Hero() {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBooking = () => {
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  // Maps industry strings to representative icons for visual punch
  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case "Restaurant": return <Utensils className="w-5 h-5 text-amber-400" />;
      case "Dental Clinic": return <Activity className="w-5 h-5 text-teal-400" />;
      case "Real Estate Agency": return <Home className="w-5 h-5 text-blue-400" />;
      case "Hotel": return <Hotel className="w-5 h-5 text-indigo-400" />;
      case "Salon": return <Scissors className="w-5 h-5 text-pink-400" />;
      case "Insurance Company": return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default: return <Phone className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden bg-[#0B0F19]">
      {/* Background Atmospheric Glows from Immersive UI */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Live Indicator Badge styled exactly as Next-Gen badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6 self-start"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </span>
              Next-Gen Voice Automation
            </motion.div>

            {/* Headline with leading-[1.1] and clean design template styling */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              Never Miss Another <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 font-extrabold drop-shadow-xl">
                Customer Call
              </span> Again.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-gray-400 text-base sm:text-lg lg:text-xl font-sans font-normal leading-relaxed max-w-2xl"
            >
              Your AI Employee answers calls 24/7, books appointments, answers customer questions, qualifies leads, and helps your business grow automatically.
            </motion.p>

            {/* Key benefits list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300 font-medium"
            >
              {["Save time", "Reduce support costs", "Capture more customers"].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={scrollToBooking}
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 flex items-center justify-center gap-2 cursor-pointer border border-white/10"
              >
                <span>Book Free Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={scrollToDemo}
                className="group px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 text-indigo-400 fill-indigo-400 group-hover:scale-110 transition-transform" />
                <span>Watch Live AI Demo</span>
              </button>
            </motion.div>
          </div>

          {/* Graphic / Floating Call Assistant Animation Block */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-16 lg:mt-0">
            {/* Floating Stats Card from Immersive UI */}
            <motion.div 
              initial={{ y: 5 }}
              animate={{ y: -5 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut" }}
              className="absolute -top-12 -right-6 md:-right-10 z-20 bg-slate-900/90 border border-white/15 backdrop-blur-xl rounded-2xl p-4 flex items-center gap-4 shadow-2xl pointer-events-none"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-mono">Missed Call Captured</p>
                <p className="text-xs sm:text-sm font-bold text-white">New Dental Inquiry - $450 Value</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative w-full max-w-[400px] aspect-square rounded-[32px] bg-gradient-to-b from-slate-900/40 to-slate-950/80 p-8 border border-white/10 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 flex flex-col justify-between"
            >
              {/* Outer Decorative glowing rings */}
              <div className="absolute -inset-1.5 rounded-[34px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 opacity-30 blur-md -z-10 animate-pulse" />
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                    <PhoneCall className="w-5 h-5 text-indigo-400 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Voxora Virtual Agent</h3>
                    <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                      ONLINE — READY TO ANSWER
                    </p>
                  </div>
                </div>
                <div className="text-xs bg-white/5 border border-white/10 text-gray-300 px-2 py-1 rounded-md font-mono">
                  Line 01
                </div>
              </div>

              {/* Dynamic Sound Wave Sphere */}
              <div className="my-8 flex flex-col items-center justify-center relative">
                <div className="absolute w-44 h-44 rounded-full bg-indigo-500/10 animate-ping duration-1000 -z-10" />
                <div className="absolute w-36 h-36 rounded-full bg-purple-500/10 animate-pulse duration-700 -z-10" />
                
                {/* Radial Glowing Sphere representing AI Brain */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 flex items-center justify-center p-0.5 shadow-lg shadow-indigo-500/40">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-radial-gradient from-blue-500/20 via-purple-500/10 to-transparent animate-pulse" />
                    <Phone className="w-10 h-10 text-indigo-400 animate-wiggle" />
                  </div>
                </div>

                {/* Animated Audio Equalizer Bars */}
                <div className="flex items-center gap-1.5 mt-8 h-8">
                  {[24, 38, 48, 30, 20, 42, 54, 40, 28, 44, 36, 18, 32].map((height, idx) => (
                    <motion.div
                      key={idx}
                      animate={{
                        height: [height * 0.4, height, height * 0.4],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.2 + idx * 0.1,
                        ease: "easeInOut",
                      }}
                      className="w-1 rounded-full bg-gradient-to-t from-blue-500 via-indigo-400 to-purple-400"
                      style={{ height: `${height}px` }}
                    />
                  ))}
                </div>
              </div>

              {/* Action Log Overlay */}
              <div className="bg-slate-950/80 border border-white/5 rounded-2xl p-3 text-left">
                <p className="text-[10px] uppercase font-mono font-bold tracking-wider text-gray-500">
                  Real-time Actions
                </p>
                <div className="mt-2 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-gray-300">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      Checking Calendar...
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">Success</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-400 text-[11px]">
                    <span>Inbound flow: Dental emergency screening</span>
                    <span>1.2s Latency</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Sectors shelf / TRUSTED BY worldwide banner with real images & scrolling carousel */}
        <div className="mt-28 border-t border-white/5 pt-16 overflow-hidden relative w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
            <p className="text-xs sm:text-sm uppercase font-mono font-bold tracking-widest text-[#6366f1] bg-[#6366f1]/10 border border-[#6366f1]/20 px-4 py-1.5 rounded-full inline-block">
              🦾 Automating High-Value Conversations Across Sectors
            </p>
            <h3 className="mt-4 font-display font-black text-2xl sm:text-3xl text-white">
              Trusted By Growing Businesses Worldwide
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
              Hover over any industry to pause and explore the exact AI automation workflows we build.
            </p>
          </div>

          {/* Infinite Scrolling Ribbon */}
          <div className="relative w-full overflow-hidden py-4 select-none">
            {/* Ambient vignette overlays to fade edges */}
            <div className="absolute top-0 left-0 w-24 sm:w-48 h-full bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 sm:w-48 h-full bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex gap-6 px-4">
              {/* Double track lists to make loop seamless */}
              {[...CAROUSEL_INDUSTRIES, ...CAROUSEL_INDUSTRIES].map((item, index) => {
                const uniqueId = `carousel-item-${index}`;
                return (
                  <div
                    key={uniqueId}
                    className="group relative w-[310px] sm:w-[350px] h-[220px] rounded-2xl overflow-hidden border border-white/15 bg-slate-950/40 backdrop-blur-md flex flex-col justify-between p-5 transition-all duration-300 hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer flex-shrink-0"
                  >
                    {/* Background real image with overlay */}
                    <div className="absolute inset-0 z-0 select-none">
                      <img
                        src={item.image}
                        alt={`${item.name} scene`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-20 filter grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-30 transition-all duration-500 pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-slate-950/90 to-transparent" />
                    </div>

                    {/* Card Top: Branding and Icon */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl border flex items-center justify-center font-bold ${item.iconColor}`}>
                          {getIndustryIcon(item.name)}
                        </div>
                        <span className="font-display font-bold text-lg text-white">
                          {item.name}
                        </span>
                      </div>

                      {/* Small Active Badge */}
                      <span className="text-[9px] font-mono font-bold tracking-widest text-[#0B0F19] bg-indigo-400 px-2 py-0.5 rounded uppercase">
                        AI Active
                      </span>
                    </div>

                    {/* Card Mid: Specific workflow info */}
                    <div className="relative z-10 text-left pt-2">
                      <p className="text-[10px] font-mono text-gray-500">
                        AUTOMATED PIPELINE
                      </p>
                      <p className="text-xs font-semibold text-gray-300 mt-0.5 line-clamp-1 font-sans">
                        {item.workflow}
                      </p>
                    </div>

                    {/* Card Bottom: Metrics outcome */}
                    <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/5">
                      <span className="text-[10px] font-mono text-gray-500">
                        Typical Outcome:
                      </span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {item.metric}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
            <p className="text-xs text-slate-500 font-mono">
              Save time. Reduce costs. Capture more customers.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
