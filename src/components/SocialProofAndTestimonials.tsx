import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS, TRUST_PARTNERS } from "../data";
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  CheckCircle2, 
  ShieldCheck,
  Stethoscope,
  Building2,
  Scissors,
  Heart,
  Hotel,
  Car,
  Dumbbell,
  Scale
} from "lucide-react";

// Gorgeous custom vector brand logos for the premium logo slider
const getBrandLogo = (partner: string) => {
  switch (partner) {
    case "Medical Group":
      return (
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <span className="font-sans font-black tracking-[0.16em] text-gray-400 group-hover:text-emerald-400 transition-colors uppercase text-xs">
            MEDIC<span className="text-white">GROUP</span>
          </span>
        </div>
      );
    case "Prime Realty":
      return (
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18M3 10h18M5 21V10M19 21V10M9 21V10M15 21V10M12 10V4M12 4l-4 3M12 4l4 3" />
          </svg>
          <span className="font-sans font-black tracking-[0.16em] text-gray-400 group-hover:text-cyan-400 transition-colors uppercase text-xs">
            PRIME<span className="text-white">REALTY</span>
          </span>
        </div>
      );
    case "Urban Salon":
      return (
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-fuchsia-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="m16.2 7.8-8.4 8.4M12 8l4 4M8 12l4 4" />
          </svg>
          <span className="font-sans font-black tracking-[0.16em] text-gray-400 group-hover:text-fuchsia-400 transition-colors uppercase text-xs">
            URBAN<span className="text-white">SALON</span>
          </span>
        </div>
      );
    case "Elite Dental":
      return (
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-pink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5-1.25-2.5-3.5-2.5-6s1.5-5 5-5 3.5 1.5 5 1.5 1.5-1.5 5-1.5 5 2.5 5 5-1 4.75-2.5 6M12 6.5v13.5M9 14h6" />
          </svg>
          <span className="font-sans font-black tracking-[0.16em] text-gray-400 group-hover:text-pink-400 transition-colors uppercase text-xs">
            ELITE<span className="text-white">DENTAL</span>
          </span>
        </div>
      );
    case "Hotel Grand Vista":
      return (
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-indigo-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18M5 21V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v13M9 10H15M9 14H15" />
          </svg>
          <span className="font-sans font-black tracking-[0.16em] text-gray-400 group-hover:text-indigo-400 transition-colors uppercase text-xs">
            GRAND<span className="text-white">VISTA</span>
          </span>
        </div>
      );
    case "AutoDrive Motors":
      return (
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-amber-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
          </svg>
          <span className="font-sans font-black tracking-[0.16em] text-gray-400 group-hover:text-amber-500 transition-colors uppercase text-xs">
            AUTO<span className="text-white">DRIVE</span>
          </span>
        </div>
      );
    case "Fitness Hub":
      return (
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-teal-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6.5 6.5 11 11M6.5 17.5l11-11M18 3v6h-6M6 21v-6h6" />
          </svg>
          <span className="font-sans font-black tracking-[0.16em] text-gray-400 group-hover:text-teal-400 transition-colors uppercase text-xs">
            FITNESS<span className="text-white">HUB</span>
          </span>
        </div>
      );
    case "Law Associates":
      return (
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-purple-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 16v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1M12 14V3M12 3 9 6M12 3l3 6M8 10h8" />
          </svg>
          <span className="font-sans font-black tracking-[0.16em] text-gray-400 group-hover:text-purple-400 transition-colors uppercase text-xs">
            LAW<span className="text-white">ASSOC</span>
          </span>
        </div>
      );
    default:
      return (
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-indigo-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8M8 12h8" />
          </svg>
          <span className="font-sans font-black tracking-[0.16em] text-gray-400 group-hover:text-indigo-300 transition-colors uppercase text-xs">
            {partner.replace(" ", "")}
          </span>
        </div>
      );
  }
};

export default function SocialProofAndTestimonials() {
  const [isLarge, setIsLarge] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);

  // Check viewport width for responsive paging limits
  useEffect(() => {
    const checkSize = () => {
      setIsLarge(window.innerWidth >= 1024);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const itemsPerPage = isLarge ? 3 : 1;
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  // Auto-carousel timing advancement
  useEffect(() => {
    const timer = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % totalPages);
    }, 5500); // Advances automatically every 5.5 seconds
    return () => clearInterval(timer);
  }, [totalPages]);

  // Adjust page index if window resizing invalidates it
  useEffect(() => {
    if (pageIndex >= totalPages) {
      setPageIndex(0);
    }
  }, [pageIndex, totalPages]);

  const prevPage = () => {
    setPageIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  const showingTestimonials = TESTIMONIALS.slice(
    pageIndex * itemsPerPage,
    pageIndex * itemsPerPage + itemsPerPage
  );

  const getPartnerIcon = (partner: string) => {
    switch (partner) {
      case "Elite Dental":
        return <Heart className="w-5 h-5 text-pink-400" />;
      case "Hotel Grand Vista":
        return <Hotel className="w-5 h-5 text-indigo-400" />;
      case "Prime Realty":
        return <Building2 className="w-5 h-5 text-cyan-400" />;
      case "Urban Salon":
        return <Scissors className="w-5 h-5 text-fuchsia-400" />;
      case "Fitness Hub":
        return <Dumbbell className="w-5 h-5 text-emerald-400" />;
      case "Law Associates":
        return <Scale className="w-5 h-5 text-amber-500" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-indigo-300" />;
    }
  };

  return (
    <section className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
      {/* Background glow spotlights */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-indigo-900/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-pink-900/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* SECTION 7: TRUST PARTNERS SHELF WITH INFINITE MARQUEE */}
        <div className="mb-24 overflow-hidden w-full relative">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4 text-pink-400 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-300 uppercase">
              GROWING LOCAL BUSINESSES TRUST VOXORA AI
            </span>
          </div>

          <h2 className="text-white font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-12">
            Answering Inbound Calls Fully Automated.
          </h2>

          {/* Infinite auto-scrolling marquee ribbon */}
          <div className="relative w-full overflow-hidden py-4 select-none">
            {/* Vignette fade shading on the marquee boundaries */}
            <div className="absolute top-0 left-0 w-24 sm:w-48 h-full bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 sm:w-48 h-full bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex gap-6 px-4 w-max items-center">
              {[...TRUST_PARTNERS, ...TRUST_PARTNERS, ...TRUST_PARTNERS].map((partner, index) => {
                const partnerId = `partner-logo-${partner}-${index}`;
                return (
                  <div
                    key={partnerId}
                    className="bg-[#111827]/20 border border-white/[0.04] hover:border-pink-500/20 px-6 py-4 rounded-2xl flex items-center justify-center min-w-[200px] h-16 transition-all duration-300 hover:bg-[#111827]/50 hover:-translate-y-0.5 group cursor-pointer shadow-md select-none"
                  >
                    {getBrandLogo(partner)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SECTION 8: TESTIMONIALS SLIDER PLATFORM */}
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
            Verified Field Success
          </span>
          <h2 className="mt-2 text-white font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-16">
            Hear From Our AI-Powered Partners
          </h2>

          {/* SLIDER WRAPPER - Transparent slider page transitions */}
          <div className="relative min-h-[380px] lg:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={pageIndex + "-" + isLarge}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 text-left"
              >
                {showingTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="group relative bg-[#111827]/30 hover:bg-[#121829]/70 border border-white/5 hover:border-pink-500/30 rounded-[28px] p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:shadow-pink-500/5 hover:-translate-y-1 block flex flex-col justify-between overflow-hidden backdrop-blur-xl h-full min-h-[340px]"
                  >
                    {/* Glowing Accent Spotlights */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 blur-[50px] -z-10 group-hover:bg-pink-500/10 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/5 blur-[50px] -z-10 group-hover:bg-indigo-500/10 transition-colors duration-300" />

                    {/* Card Top Banner Glow */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/0 via-pink-500/20 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Top Row: Business Logo icon box and Business Partner Name */}
                      <div className="flex items-center gap-3.5 mb-6">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/10 to-pink-500/10 border border-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-all">
                          {getPartnerIcon(testimonial.logo)}
                        </div>
                        <div>
                          <h4 className="text-white font-display font-extrabold text-sm sm:text-base tracking-tight leading-tight">
                            {testimonial.companyName || testimonial.logo}
                          </h4>
                          <span className="text-[10px] text-pink-400 font-mono font-bold tracking-widest block uppercase mt-0.5">
                            VERIFIED CLIENT
                          </span>
                        </div>
                      </div>

                      {/* Middle Row: Quote Text */}
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic font-medium relative pr-4">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>

                    {/* Bottom Row: Client User details formatted perfectly */}
                    <div className="flex items-center gap-3.5 pt-4 border-t border-white/[0.04] mt-8">
                      {/* Profile avatar image circle with pink/blue gradient border flow */}
                      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 p-[1.5px] flex items-center justify-center shadow-md overflow-hidden shrink-0">
                        {testimonial.avatarUrl ? (
                          <img 
                            src={testimonial.avatarUrl} 
                            alt={testimonial.author}
                            referrerPolicy="no-referrer"
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full rounded-full bg-[#0c101c] flex items-center justify-center">
                            <span className="text-xs font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-300">
                              {testimonial.initials || "CL"}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Author credentials with highly visible green ratings */}
                      <div className="text-left">
                        <h5 className="text-white font-extrabold text-sm font-sans tracking-tight">
                          {testimonial.author}
                        </h5>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[11px] text-gray-400 font-mono">{testimonial.role}</span>
                          <span className="text-gray-600 font-mono text-xs">•</span>
                          {/* Rich highlighted rating section */}
                          <div className="flex items-center gap-1 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 shadow-sm leading-none">
                            <Star className="w-3 h-3 text-emerald-400 fill-emerald-400 shrink-0" />
                            <span className="text-[10px] text-emerald-400 font-bold font-mono leading-none">
                              {testimonial.rating?.toFixed(1) || "5.0"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Control Paging Indicators & Arrows */}
          <div className="flex items-center justify-center gap-5 mt-12">
            <button
              onClick={prevPage}
              className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 hover:border-pink-500/40 hover:bg-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer active:scale-95 shadow-md shadow-black/10"
              aria-label="Previous testimonials page"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            </button>
            
            {/* Slides indicators dots matching screenshot page concept */}
            <div className="flex items-center gap-2.5">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPageIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    pageIndex === i 
                      ? "w-8 bg-gradient-to-r from-indigo-500 to-pink-500 shadow-md shadow-pink-500/20" 
                      : "w-2 bg-gray-700 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 hover:border-pink-500/40 hover:bg-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer active:scale-95 shadow-md shadow-black/10"
              aria-label="Next testimonials page"
            >
              <ChevronRight className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
