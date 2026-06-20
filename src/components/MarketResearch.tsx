import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { STATS } from "../data";
import { TrendingDown, ShieldCheck, Sparkles, BarChart3, PieChart, Star } from "lucide-react";

interface CounterProps {
  value: string;
}

function AnimatedCounter({ value }: CounterProps) {
  const [displayVal, setDisplayVal] = useState("0");
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    let active = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated && active) {
          setHasAnimated(true);
          triggerAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      active = false;
      observer.disconnect();
    };
  }, [value, hasAnimated]);

  const triggerAnimation = () => {
    let prefix = "";
    let suffix = "";
    let targetNum = 0;
    let decimals = 0;

    let raw = value;
    if (raw.startsWith("$")) {
      prefix = "$";
      raw = raw.slice(1);
    }
    if (raw.startsWith("-")) {
      prefix += "-";
      raw = raw.slice(1);
    }
    if (raw.endsWith("%")) {
      suffix = "%";
      raw = raw.slice(0, -1);
    } else if (raw.endsWith("k")) {
      suffix = "k";
      raw = raw.slice(0, -1);
    } else if (raw.endsWith("x")) {
      suffix = "x";
      raw = raw.slice(0, -1);
    }

    targetNum = parseFloat(raw);
    if (isNaN(targetNum)) {
      setDisplayVal(value);
      return;
    }

    // Capture decimal places
    if (raw.includes(".")) {
      const parts = raw.split(".");
      decimals = parts[1] ? parts[1].length : 1;
    }

    const duration = 1800; // Smoother 1.8s count up
    const startTime = performance.now();

    const updateVal = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out expo for high premium aesthetic style
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentNum = targetNum * easeProgress;
      
      const formattedNum = currentNum.toFixed(decimals);
      setDisplayVal(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(updateVal);
      } else {
        setDisplayVal(value); // guarantee exact match
      }
    };

    requestAnimationFrame(updateVal);
  };

  return <span ref={elementRef}>{displayVal}</span>;
}

export default function MarketResearch() {
  return (
    <section className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
      {/* Background visual elements */}
      <div className="absolute top-[20%] right-[-5%] w-[450px] h-[450px] bg-indigo-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4f46e5] bg-indigo-500/10 border border-indigo-400/20 px-3.5 py-1.5 rounded-full inline-block">
            Market Demographics & Insights
          </span>
          <h2 className="mt-4 text-white font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
            An Unanswered Inbound Phone Line <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Is A Direct Financial Leak.
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Data sourced from national local-business audits proves that today's consumers rate speed and immediate routing as the primary indicator of trust. Here are the core statistics:
          </p>
        </div>

        {/* METRICS DASHBOARD LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-gradient-to-b from-slate-900/50 to-slate-950/70 border border-white/5 hover:border-white/10 rounded-2xl p-5 hover:bg-[#111827]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-gray-500 tracking-wider">
                  {stat.label}
                </span>
                
                {/* Big Metric Display */}
                <h3 className={`mt-3 font-display font-black text-3xl sm:text-4xl tracking-tight leading-none ${
                  stat.value.startsWith("-") || stat.value === "62%" || stat.value === "85%"
                    ? "bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                    : "text-white"
                }`}>
                  <AnimatedCounter value={stat.value} />
                </h3>
              </div>

              <div className="mt-6">
                <p className="text-xs sm:text-sm text-gray-400 leading-normal">
                  {stat.description}
                </p>
                
                {/* Visual tiny indicator line */}
                <div className="w-full bg-white/5 h-1 rounded-full mt-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className={`h-full rounded-full ${
                      idx % 2 === 0 ? "bg-indigo-500" : "bg-purple-500"
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard styled banner */}
        <div className="bg-gradient-to-br from-slate-900/40 via-indigo-950/20 to-slate-950 p-6 sm:p-8 rounded-3xl border border-indigo-500/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="text-left max-w-xl">
            <h4 className="text-white font-bold font-display text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span>Ready to plug the leak?</span>
            </h4>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              We compile and analyze your customized business parameters to design automated FAQ and booking trees that resolve client phone inquiries within seconds.
            </p>
          </div>

          <button
            onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 hover:from-pink-600 hover:via-rose-600 hover:to-fuchsia-700 hover:scale-[1.02] active:scale-[0.98] text-white font-extrabold text-xs sm:text-[13px] tracking-widest transition-all duration-200 uppercase flex items-center justify-center gap-1.5 cursor-pointer shadow-xl shadow-pink-500/35 hover:shadow-2xl hover:shadow-pink-500/50 border border-pink-400/30 shrink-0 self-stretch sm:self-auto"
          >
            <span>Run Free Strategy Audit</span>
          </button>
        </div>

      </div>
    </section>
  );
}
