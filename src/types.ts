export interface PainPoint {
  id: number;
  title: string;
  stat?: string;
  description: string;
  iconName: string;
}

export interface SolutionFeature {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Industry {
  name: string;
  description: string;
  useCase: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  logo: string;
  companyName?: string;
  rating?: number;
  avatarUrl?: string;
  initials?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
