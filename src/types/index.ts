// Types for Project data
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category: 'frontend' | 'fullstack' | 'mobile' | 'ux-ui';
  status: 'completed' | 'in-progress' | 'archived';
  createdAt: Date;
  updatedAt: Date;
}

// Types for Case Study
export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  category: 'ux-ui' | 'research' | 'prototype';
  tags: string[];
  duration?: string;
  role?: string;
  tools?: string[];
  url?: string;
  featured?: boolean;
}

// Types for Navigation
export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  icon?: React.ReactNode;
}

// Types for SEO
export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  isArticle?: boolean;
  author?: string;
  keywords?: string[];
}

// Types for Social Links
export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
}

// Types for API responses
export interface APIResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  timestamp: Date;
}

// Types for Form data
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Types for Theme
export type Theme = 'light' | 'dark' | 'system';

// Types for Loading states
export interface LoadingState {
  isLoading: boolean;
  error?: string;
  data?: any;
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>; 