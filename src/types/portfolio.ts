export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'engineering' | 'design';
  tags: string[];
  imageSrc: string;
  features: string[];
  challenge: string;
  solution: string;
  githubUrl?: string;
  liveUrl?: string;
  behanceUrl?: string;
  isPlaceholder?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'layout' | 'cpu' | 'smartphone' | 'palette' | 'wrench';
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    description: string;
    featured?: boolean;
  }[];
}

export interface PricingTier {
  id: string;
  badge?: string;
  title: string;
  price: string;
  priceSubtitle: string;
  description: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
  type: string;
}

export interface QuickFixItem {
  title: string;
  description: string;
}
