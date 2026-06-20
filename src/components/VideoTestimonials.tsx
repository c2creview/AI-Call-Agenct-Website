import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";

interface VideoTestimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  videoUrl: string;
  industry: string;
  transcriptSteps: string[];
}

const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 1,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Prime Realty",
    industry: "Real Estate Brokers",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-talking-at-a-business-video-conference-40026-large.mp4",
    transcriptSteps: [
      "[00:02] Voxora automated 100% of our out-of-office property lead intakes.",
      "[00:08] The AI answers tours inquiries faster than any agent could.",
      "[00:14] We registered over 45 new qualified client viewings in the first week!",
      "[00:20] It feels completely natural, clients don't even know it's a voice robot.",
      "[00:26] Absolute game changer for real estate brokerage firms."
    ]
  },
  {
    id: 2,
    name: "Michael Vance",
    role: "Operations Head",
    company: "Elite Dental",
    industry: "Medical & Dental Practices",
    avatarUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=500&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-confident-businessman-talking-to-camera-40019-large.mp4",
    transcriptSteps: [
      "[00:02] Missing emergency dental requests at midnight was costing us thousands.",
      "[00:08] Voxora intercepts these requests instantly and qualifies them in real-time.",
      "[00:14] The calendar integration is tight, matching directly to our Dentrix CRM.",
      "[00:20] Our staff came in to a fully booked Saturday morning schedule.",
      "[00:26] We observed a massive 35% increase in lead captures."
    ]
  },
  {
    id: 3,
    name: "Jessica Mercer",
    role: "Customer Success Lead",
    company: "Hotel Grand Vista",
    industry: "Hospitality & Guest Booking",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-creative-woman-talking-to-camera-in-office-40403-large.mp4",
    transcriptSteps: [
      "[00:02] Guest check-ins and standard room upgrade queries are fully automated now.",
      "[00:08] Voxora answers frequent billing questions immediately.",
      "[00:14] It handles twenty concurrent calls during peak checking hours smoothly.",
      "[00:20] Our physical receptionist finally has space to focus on inside guests.",
      "[00:26] Outstanding implementation and high-fidelity call logic."
    ]
  },
  {
    id: 4,
    name: "Marcus Thorne",
    role: "Co-Founder",
    company: "Fitness Hub",
    industry: "Gyms & Wellness Studios",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-holding-a-smartphone-and-talking-40018-large.mp4",
    transcriptSteps: [
      "[00:02] Membership renewals and tour requests are mapped directly on autopilot.",
      "[00:08] Incoming callers hear the pricing, select a slot, and get a verification text.",
      "[00:14] No dev effort was required from our gym administrative team.",
      "[00:20] Voxora's team deployed our completed telephone tree in under 5 days.",
      "[00:26] Our reservation rates took a swift 40% absolute upward jump."
    ]
  }
];

export default function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Auto-slide effect every 5 seconds unless playing or hovered
  useEffect(() => {
    if (activeVideo || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % VIDEO_TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeVideo, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % VIDEO_TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + VIDEO_TESTIMONIALS.length) % VIDEO_TESTIMONIALS.length);
  };

  const handleOpenVideo = (item: VideoTestimonial) => {
    setActiveVideo(item);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  // Create infinite items pattern for smooth sliding transitions
  const visibleItems = [
    VIDEO_TESTIMONIALS[currentIndex % VIDEO_TESTIMONIALS.length],
    VIDEO_TESTIMONIALS[(currentIndex + 1) % VIDEO_TESTIMONIALS.length],
    VIDEO_TESTIMONIALS[(currentIndex + 2) % VIDEO_TESTIMONIALS.length]
  ];

  return (
    <section id="reels" className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
      {/* Visual Ambient Grid background & spots */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-indigo-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] bg-pink-600/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-400/20 px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-pink-400 animate-pulse animate-duration-1000" />
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400">
              Live Proof in Action
            </span>
          </div>
          <h2 className="text-white font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-sans">
            Hear Real AI Call Success.
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed font-sans font-medium">
            Listen to verified operations directors and co-founders share how they converted missed telephone opportunities into fully automated bookings.
          </p>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div 
          className="relative px-2 py-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Deck cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-center justify-center max-w-5xl mx-auto animate-duration-300">
            {visibleItems.map((item, index) => {
              // Highlight the first element of sliding window as the active focused testimonial
              const isActive = index === 0;
              return (
                <motion.div
                  key={item.id}
                  layout
                  className={`relative cursor-pointer group bg-gradient-to-b from-[#111827]/40 to-[#111827]/80 rounded-[32px] overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/5 ${
                    isActive 
                      ? "border-pink-500/40 ring-1 ring-pink-500/20 md:scale-[1.03] shadow-pink-500/10 shadow-lg" 
                      : "border-white/[0.04] opacity-80 md:opacity-75 hover:opacity-100"
                  } ${index === 1 ? 'hidden sm:block' : index === 2 ? 'hidden md:block' : ''}`}
                  onClick={() => handleOpenVideo(item)}
                >
                  {/* Portrait Visual Card Wrapper */}
                  <div className="aspect-[3/4] relative overflow-hidden">
                    {/* Background Visual Portrait overlaying image */}
                    <img 
                      src={item.avatarUrl} 
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none filter brightness-90 contrast-[1.05]"
                    />
                    
                    {/* Gradient Soft Overlay Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Badge showing corporate industry segment */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-rose-300">
                        {item.industry}
                      </span>
                    </div>

                    {/* Real-time AI check banner */}
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-1 rounded-lg backdrop-blur-sm shadow">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest leading-none">Verified</span>
                    </div>

                    {/* Bottom overlay with big bright neon play button and client details */}
                    <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col items-start text-left">
                      
                      {/* Play Button Icon Container with pink background flow */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/35 hover:scale-110 active:scale-95 transition-all mb-4">
                        <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                      </div>

                      {/* Name in bold font */}
                      <h4 className="text-white font-sans text-lg sm:text-xl font-bold tracking-tight leading-tight group-hover:text-pink-300 transition-colors">
                        {item.name}
                      </h4>
                      {/* Sub-cred */}
                      <p className="text-gray-300 text-xs sm:text-xs font-sans mt-0.5 flex items-center gap-1.5 opacity-90">
                        <span>{item.role}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400 font-semibold">{item.company}</span>
                      </p>
                    </div>

                    {/* Subtle branding placeholder bottom right */}
                    <div className="absolute bottom-6 right-6 z-10 text-[10px] font-mono font-black tracking-widest text-slate-500 select-none uppercase">
                      VOXORA REEL
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dots Indicator Controller Navigation */}
          <div className="flex items-center justify-center gap-5 mt-12">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-xl bg-[#111827]/50 border border-white/10 hover:border-pink-500/40 text-gray-400 hover:text-white transition-all cursor-pointer flex items-center justify-center shadow-lg active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {VIDEO_TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === i 
                      ? "w-8 bg-gradient-to-r from-pink-500 to-rose-500 shadow-md shadow-pink-500/20" 
                      : "w-2 bg-gray-700 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to item ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-xl bg-[#111827]/50 border border-white/10 hover:border-pink-500/40 text-gray-400 hover:text-white transition-all cursor-pointer flex items-center justify-center shadow-lg active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* FULLSCREEN POPUP VIDEO MODAL */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseVideo}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            >
              {/* Main inner modal panel container structured perfectly for PORTRAIT videos */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: "spring", duration: 0.35 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-[380px] sm:max-w-[420px] bg-black border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              >
                {/* Header info bar */}
                <div className="absolute top-0 inset-x-0 z-30 bg-gradient-to-b from-black/80 to-transparent px-5 py-4 flex items-center justify-between pointer-events-none">
                  <div>
                    <h4 className="text-white text-sm font-sans font-extrabold tracking-tight">
                      {activeVideo.name}
                    </h4>
                    <p className="text-[10px] text-gray-300 font-sans mt-0.5 opacity-90">
                      {activeVideo.role} &bull; {activeVideo.company}
                    </p>
                  </div>
                </div>

                {/* Close Button on top corner of modern popup design */}
                <button
                  onClick={handleCloseVideo}
                  className="absolute top-4 right-4 z-40 p-2 rounded-full bg-black/70 border border-white/10 text-gray-300 hover:text-white hover:bg-black/90 active:scale-95 transition-all cursor-pointer pointer-events-auto"
                  aria-label="Close video testimonial"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Video Stage */}
                <div className="relative aspect-[9/16] bg-black flex items-center justify-center w-full h-full">
                  <video
                    ref={videoRef}
                    src={activeVideo.videoUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    playsInline
                    loop
                    controls
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
