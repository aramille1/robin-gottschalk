// Common Types
export interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

// Page Types
export interface Page {
  _id: string;
  _type: 'page';
  title: string;
  slug: {
    current: string;
  };
  description?: string;
  hero?: HeroSection;
  content?: any[]; // Portable Text
  seo?: SEO;
  publishedAt: string;
  updatedAt?: string;
}

export interface HeroSection {
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: Image;
}

// Program Types
export interface Program {
  _id: string;
  _type: 'program';
  title: string;
  slug: {
    current: string;
  };
  description: string;
  duration?: string;
  format?: 'online' | 'in-person' | 'hybrid';
  benefits?: string[];
  pricing?: {
    amount?: number;
    currency?: string;
    note?: string;
  };
  image?: Image;
  featured?: boolean;
  order?: number;
}

// Testimonial Types
export interface Testimonial {
  _id: string;
  _type: 'testimonial';
  clientName: string;
  clientRole?: string;
  clientCompany?: string;
  content: string;
  rating?: number;
  image?: Image;
  featured?: boolean;
  order?: number;
}

// SEO Types
export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  ogImage?: Image;
  noIndex?: boolean;
  noFollow?: boolean;
}

// Site Settings Types
export interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  title: string;
  description: string;
  logo?: Image;
  favicon?: Image;
  email?: string;
  phone?: string;
  address?: string;
  socialLinks?: SocialLink[];
  footerText?: string;
}

export interface SocialLink {
  _key: string;
  platform: 'linkedin' | 'twitter' | 'facebook' | 'instagram' | 'youtube';
  url: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
