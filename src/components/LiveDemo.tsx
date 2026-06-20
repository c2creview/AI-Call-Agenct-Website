import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, PhoneOff, Volume2, VolumeX, ShieldCheck, Play, ArrowRight, User, Sparkles, Smartphone, Check, MessageSquare } from "lucide-react";

interface SpeechStep {
  sender: "customer" | "ai";
  text: string;
  triggerOption?: string;
  actionTaken?: string;
}

const CONVERSATION_STEPS: SpeechStep[] = [
  {
    sender: "ai",
    text: "Thanks for calling elite dental and wellness clinic! My name is Clara, your virtual AI assistant. How can I help you today?",
    actionTaken: "Answering instant"
  },
  {
    sender: "customer",
    text: "Hi Clara! I need to book an appointment for tomorrow if possible.",
    triggerOption: "Book Appointment"
  },
  {
    sender: "ai",
    text: "Absolutely. I can help with that. Let me look at our live calendar... We have open slots tomorrow at 2 PM and 4 PM. Which of those works better for your calendar?",
    actionTaken: "Google Calendar sync check"
  },
  {
    sender: "customer",
    text: "2 PM works perfect for me.",
    triggerOption: "Pick 2:00 PM"
  },
  {
    sender: "ai",
    text: "Wonderful, I've secured 2 PM tomorrow for you. Could you please state your first name and phone number to finalize your booking?",
    actionTaken: "Gathers intake fields"
  },
  {
    sender: "customer",
    text: "Sure! My name is David, and my number is 555-0199.",
    triggerOption: "Provide Details"
  },
  {
    sender: "ai",
    text: "Perfect, David. Your appointment has been officially confirmed on our side. You will receive an instant SMS text confirmation in a moment. Is there anything else I can help with?",
    actionTaken: "Booking confirmed & SMS sent"
  }
];

export default function LiveDemo() {
  const [callActive, setCallActive] = useState(false);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [waves, setWaves] = useState<number[]>([20, 20, 20, 20, 20]);
  const [lastStepSender, setLastStepSender] = useState<"ai" | "customer">("ai");
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Simulated audio wave height randomizer when AI speaks
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (callActive && lastStepSender === "ai") {
      interval = setInterval(() => {
        setWaves(Array.from({ length: 18 }, () => Math.floor(Math.random() * 45) + 15));
      }, 100);
    } else {
      setWaves(Array.from({ length: 18 }, () => 6));
    }
    return () => clearInterval(interval);
  }, [callActive, lastStepSender]);

  // Speech triggers and typing simulation of current dialogue card
  useEffect(() => {
    if (!callActive) {
      setTypedText("");
      return;
    }

    const currentMsg = CONVERSATION_STEPS[currentStepIdx];
    setLastStepSender(currentMsg.sender);
    
    // Type out effect representing dynamic audio streaming transcription
    let index = 0;
    setTypedText("");
    
    const textToType = currentMsg.text;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + textToType.charAt(index));
      index++;
      if (index >= textToType.length) {
        clearInterval(interval);
        
        // Trigger browser's local TTS synthesis if speaking of AI and not muted
        if (currentMsg.sender === "ai" && !isMuted && "speechSynthesis" in window) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(textToType);
          utterance.rate = 1.05;
          utterance.pitch = 1.05;
          // Find a clean female voice if available
          const voices = window.speechSynthesis.getVoices();
          const selectedVoice = voices.find(v => v.name.includes("Google US English") || v.name.includes("Female") || v.lang.startsWith("en"));
          if (selectedVoice) utterance.voice = selectedVoice;
          window.speechSynthesis.speak(utterance);
        }
      }
    }, 15);

    return () => {
      clearInterval(interval);
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentStepIdx, callActive, isMuted]);

  const handleStartCall = () => {
    setCallActive(true);
    setCurrentStepIdx(0);
  };

  const handleEndCall = () => {
    setCallActive(false);
    setCurrentStepIdx(0);
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  };

  const handleNextStep = () => {
    if (currentStepIdx < CONVERSATION_STEPS.length - 1) {
      setCurrentStepIdx(currentStepIdx + 1);
    } else {
      // Loop or end
      handleEndCall();
    }
  };

  const currentMsg = CONVERSATION_STEPS[currentStepIdx];

  return (
    <section id="demo" className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
      {/* Background orbs */}
      <div className="absolute top-[25%] left-[-5%] w-[450px] h-[450px] bg-purple-600/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 rounded-full">
            Conversational Sandbox
          </span>
          <h2 className="mt-4 text-white font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
            Listen How AI Talks Like A <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Real Human Operator.
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            No robotic delays. Experience our natural language voice pipeline inside this simulated dashboard. Start the virtual dialer to begin.
          </p>
        </div>

        {/* INTERACTIVE BOARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Column A: Explanation Content (Copy, bullet benefits) */}
          <div className="lg:col-span-5 text-left space-y-6 lg:pr-6">
            <div className="bg-[#111827]/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <Play className="w-4 h-4 fill-indigo-400" />
                </div>
                <h3 className="text-white font-bold font-display text-lg">Interactive Simulator Guide</h3>
              </div>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                Click the primary call button in the virtual smartphone pane. Clara will introduce herself, and you can step through our custom appointment scheduler.
              </p>
              
              <ul className="mt-4 space-y-2.5 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>Ultra-low Latency (under 1.2 seconds)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>Bidirectional Google Calendar syncs slots live</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>Supports voice interruptions during answers</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              {!callActive ? (
                <button
                  onClick={handleStartCall}
                  className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-center text-sm transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2.5 cursor-pointer border border-white/10"
                >
                  <Phone className="w-4 h-4 text-white animate-bounce" />
                  <span>Try Live Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button
                  onClick={handleEndCall}
                  className="group px-7 py-3.5 rounded-xl bg-rose-600 text-white font-bold text-center text-sm transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <PhoneOff className="w-4 h-4 text-white" />
                  <span>Disconnect Call</span>
                </button>
              )}

              {/* Sound Voice speaker feedback */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`px-4 py-3.5 rounded-xl border transition-all text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer ${
                  isMuted 
                    ? "bg-slate-900 border-white/10 text-gray-500" 
                    : "bg-white/5 border-indigo-500/20 text-indigo-300 hover:bg-white/10"
                }`}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isMuted ? "Audio Muted" : "Speaker Switched On"}</span>
              </button>
            </div>
            
            <p className="text-[11px] text-gray-500 font-mono">
              * Note: Enable Speaker On for computer synthesized speech audio output.
            </p>
          </div>

          {/* Column B: Interactive Smartphone Virtual Dialing Panel */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <div className="relative w-full max-w-[480px] rounded-[42px] bg-slate-950 p-4 border-[6px] border-slate-800 shadow-2xl relative overflow-hidden">
              {/* Dynamic glossy light reflexions */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-black rounded-full" />
                <div className="w-2.5 h-2.5 bg-black rounded-full ml-3" />
              </div>

              {/* Internal Screen Area */}
              <div className="bg-[#0e1322] rounded-[34px] p-6 pt-10 min-h-[460px] flex flex-col justify-between relative overflow-hidden text-left. z-10">
                {/* Embedded Grid background inside Dialer Screen */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

                <AnimatePresence mode="wait">
                  {!callActive ? (
                    /* SCREEN STATE: CALL IDLE / WAITING */
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 flex flex-col items-center justify-center text-center py-10"
                    >
                      <div className="w-18 h-18 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20 animate-pulse">
                        <Smartphone className="w-10 h-10 text-indigo-400" />
                      </div>
                      
                      <h4 className="text-white font-display text-lg font-bold">Voxora Dialer Shell</h4>
                      <p className="text-gray-400 text-xs px-6 mt-1.5 leading-relaxed">
                        Ready to simulate are standard dental clinic, restaurant booking, or general FAQ conversation trees.
                      </p>

                      <button
                        onClick={handleStartCall}
                        className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20"
                      >
                        <Phone className="w-3.5 h-3.5 fill-white" />
                        <span>Dial Simulated Call</span>
                      </button>
                    </motion.div>
                  ) : (
                    /* SCREEN STATE: CALL ACTIVE */
                    <motion.div
                      key="active"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 flex flex-col justify-between h-full space-y-4"
                    >
                      {/* Active Connection Title */}
                      <div className="flex items-center justify-between bg-black/40 border border-white/5 p-3 rounded-2xl">
                        <div className="flex items-center gap-2.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-xs font-semibold text-white tracking-wide">Clara AI Online</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-indigo-400">
                          Step {currentStepIdx + 1} of {CONVERSATION_STEPS.length}
                        </span>
                      </div>

                      {/* Animated Sound Peak Bars on Dialer Screen */}
                      <div className="flex items-center justify-center gap-1 h-14 bg-black/20 rounded-xl py-2">
                        {waves.map((h, i) => (
                          <div
                            key={i}
                            className="w-1 bg-[#4f46e5] rounded-full transition-all duration-100"
                            style={{ height: `${h}px` }}
                          />
                        ))}
                      </div>

                      {/* Subtitles & Transcribing Output bubble */}
                      <div className="flex-1 flex flex-col justify-center my-2 space-y-2.5">
                        <span className="text-[10px] uppercase font-mono font-bold text-gray-500 tracking-wider">
                          {currentMsg.sender === "ai" ? "Clara (AI Assistant)" : "David (Customer)"}
                        </span>
                        
                        <div className={`p-4 rounded-2xl relative ${
                          currentMsg.sender === "ai"
                            ? "bg-[#1e1b4b]/60 border border-indigo-500/20 text-gray-200"
                            : "bg-slate-900 border border-white/5 text-gray-300"
                        }`}>
                          <p className="text-xs leading-relaxed font-sans font-medium min-h-[44px]">
                            {typedText}
                            <span className="w-1 h-3.5 bg-indigo-400 animate-ping inline-block align-middle ml-0.5" />
                          </p>
                        </div>

                        {/* Visual tag describing the database / calendar action */}
                        {currentMsg.sender === "ai" && currentMsg.actionTaken && (
                          <div className="self-start inline-flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-md">
                            <ShieldCheck className="w-3 h-3" />
                            <span>Action: {currentMsg.actionTaken}</span>
                          </div>
                        )}
                      </div>

                      {/* Interactive Trigger options for user choice to advance */}
                      <div className="border-t border-white/5 pt-4">
                        {currentMsg.sender === "ai" ? (
                          // If AI spoke, user advances dialogue
                          <div className="space-y-2">
                            {currentStepIdx < CONVERSATION_STEPS.length - 1 ? (
                              <button
                                onClick={handleNextStep}
                                className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-center text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-indigo-600/30 border border-indigo-400/30"
                              >
                                <span>{CONVERSATION_STEPS[currentStepIdx + 1]?.triggerOption || "Respond Next"}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-white" />
                              </button>
                            ) : (
                              <button
                                onClick={handleEndCall}
                                className="w-full py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-center text-xs transition-all cursor-pointer"
                              >
                                Close call & Reset
                              </button>
                            )}
                          </div>
                        ) : (
                          // If customer spoke, user clicks to play AI's response
                          <button
                            onClick={handleNextStep}
                            className="w-full py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-center text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-orange-600/30 border border-orange-400/30 animate-pulse"
                          >
                            <span>Click to hear AI reply</span>
                            <MessageSquare className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
