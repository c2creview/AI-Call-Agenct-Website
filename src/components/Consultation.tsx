import { Check, Calendar, Smile } from "lucide-react";

export default function Consultation() {
  return (
    <section id="consultation" className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
      {/* Background radial soft highlights */}
      <div className="absolute top-[20%] left-[-5%] w-[450px] h-[450px] bg-indigo-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Offer details & Value bullets (5 columns) */}
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4f46e5] bg-indigo-500/10 border border-indigo-400/20 px-3.5 py-1.5 rounded-full inline-block">
              Free Strategy Discovery Session
            </span>
            <h2 className="text-white font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-tighter font-sans">
              Book Your Free AI <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Automation Demo.
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
              Speak directly with an AI automation engineer. We will review your client metrics, draw up a custom phone logic map, and run a live demo answering calls for your specific industry.
            </p>

            {/* Strategic Benefits List */}
            <div className="space-y-4 pt-4">
              {[
                { title: "Free consultation", desc: "No fee analysis mapping your inbound call pipeline" },
                { title: "Custom business strategy", desc: "We blueprint dynamic FAQs and calendar action flows" },
                { title: "Live AI demo", desc: "Hear a virtual assistant configured to answer calls using your real name" },
                { title: "Zero obligation", desc: "No contracts, no credit card, no risk" }
              ].map((bullet, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-400/25 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm leading-tight font-sans">{bullet.title}</h4>
                    <p className="text-xs text-gray-500 font-sans mt-0.5">{bullet.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#111827]/40 border border-white/5 rounded-2xl p-4 flex gap-3 items-center">
              <Smile className="w-5 h-5 text-indigo-400 shrink-0" />
              <p className="text-[11px] text-gray-500 font-mono tracking-wide leading-relaxed">
                OVER 140+ SMALL BUSINESSES SECURED LEADS WITH MOCK DEMOS THIS MONTH.
              </p>
            </div>
          </div>

          {/* Right Column: Calendly Interactive Booking Scheduler Widget (7 columns) */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <div className="relative w-full max-w-[620px] bg-gradient-to-b from-slate-900/60 to-slate-950/90 rounded-[32px] border border-white/5 p-3 sm:p-4 shadow-2xl overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[80px] pointer-events-none" />

              <div className="px-4 pt-4 pb-2">
                <h3 className="text-white font-sans font-extrabold text-lg sm:text-xl flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-indigo-400 animate-pulse" />
                  <span>Choose Your Consultation Slot</span>
                </h3>
                <p className="text-xs text-gray-400 mt-1 font-sans">
                  Pick an available date and time from the secure Calendly calendar below.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden w-full bg-[#0B0F19] mt-3">
                <iframe
                  src="https://calendly.com/ramphoolgangwal/30min?background_color=0b0f19&text_color=ffffff&primary_color=4f46e5"
                  width="100%"
                  height="650"
                  style={{ minHeight: "650px", border: "none" }}
                  className="w-full rounded-2xl"
                  title="Schedule consultation call with Calendly"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
