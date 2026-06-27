import { 
  PainPoint, 
  SolutionFeature, 
  Industry, 
  Testimonial, 
  PricingPlan, 
  FAQItem 
} from "./types";

export const CUSTOMER_LOGOS = [
  "Restaurant",
  "Dental Clinic",
  "Real Estate Agency",
  "Hotel",
  "Salon",
  "Insurance Company"
];

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 1,
    title: "Missed Calls After Hours",
    stat: "62%",
    description: "of calls go to voicemail after 5 PM. Most of those prospects will hang up and immediately call your nearest competitor.",
    iconName: "PhoneOff"
  },
  {
    id: 2,
    title: "Forget Follow-up Calls",
    stat: "1 in 3",
    description: "leads are never followed up on because staff get busy with in-person customers or daily administrative tasks.",
    iconName: "Clock"
  },
  {
    id: 3,
    title: "Slow Support Response",
    stat: "85%",
    description: "of customers expect an immediate response. If they wait more than 5 minutes on hold, customer satisfaction plunges.",
    iconName: "ZapOff"
  },
  {
    id: 4,
    title: "Lost Bookings & Revenue",
    stat: "$4,200",
    description: "average monthly revenue lost by local services purely from missed inbound calls and slow booking processes.",
    iconName: "AlertTriangle"
  },
  {
    id: 5,
    title: "Exorbitant Hiring Costs",
    stat: "$45k+",
    description: "annual cost of hiring full-time reception staff for 24/7 call dispatching, including benefits, vacations, and sick days.",
    iconName: "DollarSign"
  },
  {
    id: 6,
    title: "Leaking Lead Funnels",
    stat: "70%",
    description: "of modern consumers will leave a business if their first call goes unanswered, taking their lifetime value with them.",
    iconName: "Users"
  }
];

export const SOLUTIONS: SolutionFeature[] = [
  {
    id: 1,
    title: "Answers Calls Instantly",
    description: "Zero hold time. Our AI assistant handles multiple simultaneous calls simultaneously, never keeping a client waiting.",
    iconName: "PhoneCall"
  },
  {
    id: 2,
    title: "Books Appointments Automatically",
    description: "Bidirectionally syncs with your Google Calendar, Calendly, or CRM to lock in slots and schedule appointments inside the call.",
    iconName: "CalendarDays"
  },
  {
    id: 3,
    title: "Handles Customer Questions",
    description: "Instantly answers pricing, services, parking, business hours, and operational questions using custom knowledge bases.",
    iconName: "HelpCircle"
  },
  {
    id: 4,
    title: "Works 24/7 Without Breaks",
    description: "Maintains optimal peak performance late at night, on national holidays, or during weekends. Never misses a beat.",
    iconName: "ShieldAlert"
  },
  {
    id: 5,
    title: "Transfers Calls to Your Team",
    description: "Intelligently routing high-priority calls, warm leads, or complex issues to direct human extensions smoothly.",
    iconName: "Shuffle"
  },
  {
    id: 6,
    title: "Speaks Naturally Like Humans",
    description: "Powered by modern ultra-low latency voice models. Natural breathing, intelligent pacing, and polite tones.",
    iconName: "MessageSquareText"
  },
  {
    id: 7,
    title: "Supports Multiple Languages",
    description: "Detects and speaks native English, Spanish, French, German, or Mandarin fluently to cater to local community demographics.",
    iconName: "Globe"
  },
  {
    id: 8,
    title: "Qualifies Leads Automatically",
    description: "Asks custom questions to determine project budgets, urgency, and customer intent prior to scheduling a call.",
    iconName: "Filter"
  },
  {
    id: 9,
    title: "Collects Customer Information",
    description: "Transcribes calls, gathers safe names, emails, and phone numbers, and injects them instantly to your CRM.",
    iconName: "Database"
  },
  {
    id:10,
    title: "Zero Salary or Overhead",
    description: "No recruitment, no holidays, no sick leave, and zero benefits. Consistent elite performance at a fraction of the cost.",
    iconName: "Sparkles"
  }
];

export const INDUSTRIES: Industry[] = [
  {
    name: "Dental Clinics",
    description: "Emergency booking and follow-ups",
    useCase: "Confirms appointment times, updates patient records, and screens for urgent dental emergencies 24/7.",
    iconName: "Activity"
  },
  {
    name: "Restaurants",
    description: "Reservations and takeout orders",
    useCase: "Takes table bookings, guides clients through diet menus, and handles pickup questions during busy dinner hours.",
    iconName: "Utensils"
  },
  {
    name: "Hotels",
    description: "Guest services and booking inquiries",
    useCase: "Coordinates early check-ins, provides Wi-Fi passwords, and confirms room availability instantly.",
    iconName: "Hotel"
  },
  {
    name: "Real Estate Agents",
    description: "Lead qualification & tour bookings",
    useCase: "Qualifies buyer budgets, captures contact details, and schedules direct home tours on agent calendar.",
    iconName: "Home"
  },
  {
    name: "Insurance Companies",
    description: "Claims filing and premium quotes",
    useCase: "Enables customer intake for basic accident filings and gathers initial policy details dynamically.",
    iconName: "Briefcase"
  },
  {
    name: "Salons",
    description: "Stylist calendar synchronization",
    useCase: "Schedules haircuts, tracks dynamic pricing ranges, and sends immediate text-message confirmations.",
    iconName: "Scissors"
  },
  {
    name: "Gyms & Studios",
    description: "Class signups and memberships",
    useCase: "Answers queries about monthly class times, registers new trial members, and manages cancels.",
    iconName: "Dumbbell"
  },
  {
    name: "Car Dealerships",
    description: "Test drive booking & service alerts",
    useCase: "Schedules mechanic inspections, quotes standard oil changes, and triggers trade-in assessment callbacks.",
    iconName: "Car"
  },
  {
    name: "Medical Clinics",
    description: "Triaging and telehealth bookings",
    useCase: "Fills slots for daily general practitioners and handles basic prescription refill queries safely.",
    iconName: "Stethoscope"
  },
  {
    name: "Law Firms",
    description: "Initial intake and screening",
    useCase: "Captures high-priority case descriptions and qualifies client budgets before attorney discovery.",
    iconName: "Scale"
  },
  {
    name: "Consultants",
    description: "High-ticket call scheduling",
    useCase: "Determines business size, qualifies marketing budgets, and links high-ticket strategy calls.",
    iconName: "TrendingUp"
  },
  {
    name: "Service Businesses",
    description: "HVAC, plumbing, and electric dispatch",
    useCase: "Handles emergency dispatch calls in middle of night, logging plumbing leaks and scheduling tech visits.",
    iconName: "Wrench"
  }
];

export const STATS = [
  {
    value: "62%",
    label: "Lost Opportunities",
    description: "of customers never call a business twice if their first call goes unanswered."
  },
  {
    value: "85%",
    label: "Immediate Demands",
    description: "of searchers expect instant answers and turn to Google Maps competitors next."
  },
  {
    value: "$4.5k",
    label: "Leaking Revenue",
    description: "average monthly lost value from unanswered calls for small service agencies."
  },
  {
    value: "-60%",
    label: "Operational Savings",
    description: "reduction in manual phone operations costs by substituting automated call flows."
  },
  {
    value: "3x",
    label: "Closer Connections",
    description: "increase in customer happiness scores by maintaining lightning-fast 24/7 support."
  }
];

export const TRUST_PARTNERS = [
  "Medical Group",
  "Prime Realty",
  "Urban Salon",
  "Elite Dental",
  "Hotel Grand Vista",
  "AutoDrive Motors",
  "Fitness Hub",
  "Law Associates"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Voxora AI exceeded our expectations! We stopped missing customer bookings entirely. Since deploying this voice assistant, we have increased scheduled appointments by 35% and captured warm emergency leads at midnight with zero human overhead.",
    author: "Dr. David Vance",
    role: "Lead Clinician",
    logo: "Elite Dental",
    companyName: "Elite Dental Group",
    rating: 5.0,
    initials: "DV",
    avatarUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 2,
    quote: "Absolute game-changer for hospitality! The AI assistant handles customer booking inquiries and guides guests after hours flawlessly. It booked premium suite slots at midnight when our daytime staff was asleep.",
    author: "Emma Harrington",
    role: "General Manager",
    logo: "Hotel Grand Vista",
    companyName: "Hotel Grand Vista",
    rating: 5.0,
    initials: "EH",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 3,
    quote: "Our intake pipeline is vastly more streamlined now. We reduced manual telephone answering overhead by 60% and secured dozens of qualified buyer tours directly into our active CRM pipeline.",
    author: "Michael S. Chen",
    role: "Principal Broker",
    logo: "Prime Realty",
    companyName: "Prime Realty Holdings",
    rating: 5.0,
    initials: "MC",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 4,
    quote: "Excellent voice AI service! The conversational flows are natural, fast, and respond to pricing queries without delay. We observed a direct 40% uplift in customer reservation rates during busy weekend peaks.",
    author: "Christine Nathan",
    role: "Director of Operations",
    logo: "Urban Salon",
    companyName: "Urban Salon & Wellness",
    rating: 5.0,
    initials: "CN",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 5,
    quote: "Outstanding integration pipeline support! The calendar mappings are robust, sync instantly to our Google Calendars, and schedule calls flawlessly. Our incoming lead response time is now exactly zero seconds.",
    author: "Zander Caldwell",
    role: "Co-Founder",
    logo: "Fitness Hub",
    companyName: "Fitness Hub & Studios",
    rating: 5.0,
    initials: "ZC",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 6,
    quote: "Voxora's AI assistant transformed our inbound screening! It qualifies prospective legal clients and scheduling consults at all hours. Our intake team saves 15+ hours weekly in manual discovery calls.",
    author: "Sarah Jenkins",
    role: "Legal Administrator",
    logo: "Law Associates",
    companyName: "Jenkins & Law Associates",
    rating: 5.0,
    initials: "SJ",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Complete Business Setup",
    price: "$499",
    period: "One-Time Setup",
    description: "The complete, turnkey AI phone receptionist customized to capture missed calls, answer questions, qualify leads, and book appointments 24/7.",
    features: [
      "Highly customized voice, tone, & conversation logic",
      "Real-time appointment booking (Google Calendar/Calendly)",
      "Intelligent lead qualification checklists & intake sheets",
      "Instant FAQ voice answering with custom business knowledge base",
      "Smart live call transferring to human agents",
      "Live call analytics and call history with conversation",
      "Standard system testing, custom model training, & setup review"
    ],
    isPopular: true,
    ctaText: "Get Complete Setup"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Can AI really answer customer calls naturally?",
    answer: "Yes. Our assistants run on ultra-low latency conversational streaming engines. They use natural speech fillers, pause logically, and adapt their tone to sound polite, professional, and entirely indistinguishable from a standard remote front-office receptionist."
  },
  {
    question: "Can AI book appointments automatically?",
    answer: "Absolutely. The assistant integrates directly with Google Calendar, Calendly, Acuity, or custom CRMs. It queries live availability, reads open slots to the customer, validates their preference, and books the event immediately into your calendar without any double-booking."
  },
  {
    question: "Do I need technical knowledge?",
    answer: "None at all. We handle the entire engineering, prompt crafting, call flow design, and calendar integrations for you. You are given a simple custom phone number or we easily forward your existing line to the AI. You own 100% of the asset."
  },
  {
    question: "How long does setup take?",
    answer: "A standard setup takes from 3 to 7 business days, depending on the complexity of your custom knowledge base and booking pathways. We build, thoroughly test, and optimize the assistant before giving you the final key."
  },
  {
    question: "Can AI transfer calls to humans?",
    answer: "Yes, easily. If a customer demands a human specialist, files an urgent complaint, or requires high-level intervention, the AI assistant will warmly put them on hold and dynamically route the call to any human cell phone or office phone line."
  },
  {
    question: "Can AI answer after business hours?",
    answer: "Yes. The AI assistant functions 24 hours a day, 12 months a year. It operates perfectly when your office is closed, on weekends, late at night, or on major holidays, capturing leads and booking bookings when everyone else is away."
  },
  {
    question: "Can it support multiple languages?",
    answer: "Yes. Our systems are equipped with automated multi-lingual routing. They can detect the customer's preferred dialect (e.g. English, Spanish, French, German) and instantly transition the conversation smoothly to maintain high local engagement."
  }
];
