import React from "react";
import { motion } from "motion/react";

interface SectorLogo {
  id: string;
  category: string;
  brandName: string;
  icon: React.ReactNode;
  colorClass: string;
  hoverBg: string;
  borderColor: string;
}

const SECTOR_LOGOS: SectorLogo[] = [
  {
    id: "medical",
    category: "Healthcare",
    brandName: "MEDIC GROUP",
    colorClass: "text-emerald-400 group-hover:text-emerald-300",
    hoverBg: "hover:bg-emerald-500/[0.04] hover:border-emerald-550/20",
    borderColor: "border-white/[0.03]",
    icon: (
      <svg className="w-6 h-6 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    id: "realty",
    category: "Real Estate",
    brandName: "PRIME REALTY",
    colorClass: "text-cyan-400 group-hover:text-cyan-300",
    hoverBg: "hover:bg-cyan-500/[0.04] hover:border-cyan-550/20",
    borderColor: "border-white/[0.03]",
    icon: (
      <svg className="w-6 h-6 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 10h18M5 21V10M19 21V10M9 21V10M15 21V10M12 10V4M12 4l-4 3M12 4l4 3" />
      </svg>
    )
  },
  {
    id: "salon",
    category: "Wellness & Salons",
    brandName: "URBAN SALON",
    colorClass: "text-fuchsia-400 group-hover:text-fuchsia-300",
    hoverBg: "hover:bg-fuchsia-500/[0.04] hover:border-fuchsia-550/20",
    borderColor: "border-white/[0.03]",
    icon: (
      <svg className="w-6 h-6 text-fuchsia-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m16.2 7.8-8.4 8.4M12 8l4 4M8 12l4 4" />
      </svg>
    )
  },
  {
    id: "dental",
    category: "Dental Clinics",
    brandName: "ELITE DENTAL",
    colorClass: "text-pink-400 group-hover:text-pink-300",
    hoverBg: "hover:bg-pink-500/[0.04] hover:border-pink-550/20",
    borderColor: "border-white/[0.03]",
    icon: (
      <svg className="w-6 h-6 text-pink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5-1.25-2.5-3.5-2.5-6s1.5-5 5-5 3.5 1.5 5 1.5 1.5-1.5 5-1.5 5 2.5 5 5-1 4.75-2.5 6M12 6.5v13.5M9 14h6" />
      </svg>
    )
  },
  {
    id: "hotel",
    category: "Hospitality & Stay",
    brandName: "GRAND VISTA",
    colorClass: "text-indigo-400 group-hover:text-indigo-300",
    hoverBg: "hover:bg-indigo-500/[0.04] hover:border-indigo-550/20",
    borderColor: "border-white/[0.03]",
    icon: (
      <svg className="w-6 h-6 text-indigo-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v13M9 10H15M9 14H15" />
      </svg>
    )
  },
  {
    id: "auto",
    category: "Automotive dealerships",
    brandName: "AUTODRIVE",
    colorClass: "text-amber-500 group-hover:text-amber-400",
    hoverBg: "hover:bg-amber-500/[0.04] hover:border-amber-550/20",
    borderColor: "border-white/[0.03]",
    icon: (
      <svg className="w-6 h-6 text-amber-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    )
  },
  {
    id: "law",
    category: "Legal & Professional Services",
    brandName: "LAW ASSOC",
    colorClass: "text-purple-400 group-hover:text-purple-300",
    hoverBg: "hover:bg-purple-500/[0.04] hover:border-purple-550/20",
    borderColor: "border-white/[0.03]",
    icon: (
      <svg className="w-6 h-6 text-purple-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 16v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1M12 14V3M12 3 9 6M12 3l3 6M8 10h8" />
      </svg>
    )
  },
  {
    id: "fitness",
    category: "Wellness & Fitness hubs",
    brandName: "FITNESS HUB",
    colorClass: "text-teal-400 group-hover:text-teal-300",
    hoverBg: "hover:bg-teal-500/[0.04] hover:border-teal-550/20",
    borderColor: "border-white/[0.03]",
    icon: (
      <svg className="w-6 h-6 text-teal-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6.5 6.5 11 11M6.5 17.5l11-11M18 3v6h-6M6 21v-6h6" />
      </svg>
    )
  }
];

export default function TrustedByLogos() {
  return (
    <section className="bg-[#0B0F19] py-14 border-b border-white/[0.04] relative overflow-hidden">
      {/* Decorative background visual ambient bar */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/5 via-transparent to-purple-950/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Sleek Minimalist Label */}
        <p className="text-[10px] sm:text-xs font-mono font-black text-slate-500 uppercase tracking-[0.25em] mb-8">
          TRUSTED & IN SERVICE ACROSS MAJOR BUSINESS CATEGORIES
        </p>

        {/* Flex wrap / Grid of beautifully designed generic sector logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {SECTOR_LOGOS.map((logo) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`group flex items-center gap-3 bg-[#111827]/20 border ${logo.borderColor} ${logo.hoverBg} px-5 py-3.5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-md select-none`}
            >
              {/* Logo icon container */}
              <div className="p-1 rounded-lg bg-white/[0.02] border border-white/[0.05] group-hover:scale-105 group-hover:bg-white/[0.05] transition-all">
                {logo.icon}
              </div>

              {/* Logo text detail */}
              <div className="flex flex-col text-left">
                <span className={`font-sans font-black tracking-[0.14em] text-xs uppercase transition-colors ${logo.colorClass}`}>
                  {logo.brandName.split(" ")[0]}
                  <span className="text-white font-medium pl-0.5">
                    {logo.brandName.split(" ").slice(1).join(" ") || "INC"}
                  </span>
                </span>
                <span className="text-[9px] text-gray-500 font-medium tracking-tight mt-0.5 leading-none">
                  {logo.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
