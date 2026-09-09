export type PricingType = 'Free' | 'Freemium' | 'Paid' | 'Open Source';

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface Review {
  id: string;
  authorName: string;
  authorAvatar?: string;
  userRole?: string;
  rating: number; // 1 - 5
  date: string;
  title: string;
  comment: string;
  helpfulCount: number;
}

export interface ToolAlternative {
  name: string;
  slug: string;
  category: string;
  pricingType: PricingType;
  comparisonNote: string;
}

export interface Tool {
  id: string;
  name: string;
  slug: string;
  logo: string;
  brandColor?: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  pricingType: PricingType;
  startingPrice: string;
  isVerified: boolean;
  isFeatured?: boolean;
  rating: number;
  reviewCount: number;
  bookmarksCount: number;
  websiteUrl: string;
  launchYear: number;
  companyName: string;
  companyUrl?: string;
  apiAvailable: boolean;
  contextWindow?: string;
  features: string[];
  pros: string[];
  cons: string[];
  pricingTiers: PricingTier[];
  reviews: Review[];
  promptExample?: {
    task: string;
    input: string;
    outputSnippet: string;
  };
  alternatives: ToolAlternative[];
}

export interface EcosystemStats {
  totalTools: number;
  totalCategories: number;
  verifiedTools: number;
  monthlyUsers: string;
  activeToday: number;
}
