
export interface NavItem {
  name: string;
  path: string;
}

export interface Project {
  mediaType: string;
  id: string;
  title: string;
  category: 'Interior Design' | 'Graphic Design' | 'Web Design' ;
  description: string;
  imageUrls: string[]; // Changed from imageUrl: string
  // detailsUrl?: string; // Removed, preview is now internal
}

export interface Project {
  id: string
  title: string
  description: string
  category: string
  imageUrls: string[]
  mediaType?: string
  longDescription?: string
  technologies?: string[]
  liveUrl?: string
  githubUrl?: string
  features?: string[]
  challenges?: string[]
  duration?: string
  role?: string
}


export interface Skill {
  id: string;
  name: string;
  level: number; // e.g., 0-100 for proficiency bar
  category: 'Software' | 'Design Principles' | 'Languages' | 'Other';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

// Theme related types
export interface ThemeColors {
  bodyBg: string;
  textPrimary: string;
  textSecondary: string;
  accentPrimary: string;
  accentSecondary: string;
  accentTertiary: string;
  cardBg: string;
  cardBgLight: string;
  borderColor: string;
  buttonPrimaryBgGradientFrom: string;
  buttonPrimaryBgGradientTo: string;
  buttonPrimaryText: string;
  buttonPrimaryHoverBgGradientFrom: string;
  buttonPrimaryHoverBgGradientTo: string;
  selectionBg: string;
  selectionText: string;
  scrollbarTrack: string;
  scrollbarThumb: string;
  scrollbarThumbHover: string;
  shadowColorPrimary: string;
  shadowColorSecondary: string;
  shadowColorTertiary: string;
  navBg: string;
  footerBg: string;
  sectionTitleFrom: string;
  sectionTitleTo: string;
  sectionTitleUnderlineFrom: string;
  sectionTitleUnderlineTo: string;
  inputBg: string;
  inputBorder: string;
  inputFocusRing: string;
  filterButtonActiveBgGradientFrom: string;
  filterButtonActiveBgGradientTo: string;
  filterButtonActiveText: string;
  filterButtonBg: string;
  filterButtonText: string;
  filterButtonHoverBg: string;
  successMessageBg: string;
  successMessageText: string;
  successMessageBorder: string;
}

export interface Theme {
  id: string;
  name: string;
  colors: ThemeColors;
}

export interface ThemeContextType {
  theme: Theme;
  changeTheme: (themeId: string) => void;
  availableThemes: Theme[];
}