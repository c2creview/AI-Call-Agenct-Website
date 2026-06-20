import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";
import { ChevronDown, ChevronUp, HelpCircle, ShieldCheck } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
      {/* Background soft lighting spotlights */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-blue-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-600/5 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4f46e5]">
            Knowledge Depository
          </span>
          <h2 className="mt-2 text-white font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-none">
            Frequently Asked Questions.
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Everything you need to know about our low latency conversational virtual reception agents.
          </p>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-[#111827]/40 border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "border-indigo-500/50 bg-[#111827]/60" 
                    : "border-white/5 hover:border-white/10"
                }`}
              >
                {/* Trigger Button bar */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left cursor-pointer outline-none"
                >
                  <span className="text-white font-display font-bold text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                    isOpen ? "bg-indigo-505 text-indigo-400" : "bg-white/5 text-gray-500"
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Answer area */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-gray-400 leading-relaxed text-left border-t border-white/[0.03] pt-4 font-sans font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
