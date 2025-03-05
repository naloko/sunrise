
export interface NavLink {
  path: string;
  label: string;
  translationKey: string;
}

export const navLinks: NavLink[] = [
  { path: '/', label: 'Home', translationKey: 'navigation.home' },
  { path: '/about', label: 'About Us', translationKey: 'navigation.about' },
  { path: '/products', label: 'Products', translationKey: 'navigation.products' },
  { path: '/projects', label: 'Projects', translationKey: 'navigation.projects' },
  { path: '/contact', label: 'Contact', translationKey: 'navigation.contact' },
];

export interface LanguageFlag {
  code: string;
  name: string;
  flag: string;
  translationKey: string;
}

export const languages: LanguageFlag[] = [
  { 
    code: 'en', 
    name: 'English', 
    translationKey: 'language.english',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg' 
  },
  { 
    code: 'zh', 
    name: 'Chinese', 
    translationKey: 'language.chinese',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg' 
  }
];
