
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface NavLink {
  path: string;
  label: string;
  translationKey: string;
}

const navLinks: NavLink[] = [
  { path: '/', label: 'Home', translationKey: 'navigation.home' },
  { path: '/about', label: 'About Us', translationKey: 'navigation.about' },
  { path: '/products', label: 'Products', translationKey: 'navigation.products' },
  { path: '/projects', label: 'Projects', translationKey: 'navigation.projects' },
  { path: '/contact', label: 'Contact', translationKey: 'navigation.contact' },
];

interface LanguageFlag {
  code: string;
  name: string;
  flag: string;
  translationKey: string;
}

const languages: LanguageFlag[] = [
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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language || 'en');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // This ensures the state is in sync with i18n's language
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const changeLanguage = (langCode: string) => {
    if (langCode === currentLanguage) return; // Don't change if already selected
    
    i18n.changeLanguage(langCode)
      .then(() => {
        setCurrentLanguage(langCode);
        document.documentElement.lang = langCode;
      })
      .catch(error => console.error("Language change failed:", error));
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-primary" aria-hidden="true" />
            <span className={`text-xl font-bold ${isScrolled || isMenuOpen ? 'text-foreground gradient-text' : 'text-white gradient-text'}`}>
              SUNRISE
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  text-sm font-medium transition-colors relative hover-underline
                  ${isScrolled 
                    ? 'text-gradient text-blue-600 hover:text-primary' 
                    : 'text-white/80 hover:text-white'}
                  ${location.pathname === link.path 
                    ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary text-amber-400' 
                    : ''}
                `}
              >
                {t(link.translationKey)}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${isScrolled 
                  ? 'bg-primary text-white hover:bg-primary/90' 
                  : 'glass-button'}
              `}
            >
              {t('cta.quote')}
            </Link>
            
            <div className="flex items-center space-x-2 ml-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all flag-button ${
                    currentLanguage === lang.code 
                      ? 'border-primary scale-110' 
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Switch to ${t(lang.translationKey)}`}
                >
                  <img 
                    src={lang.flag} 
                    alt={t(lang.translationKey)} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-5 flex flex-col justify-between relative ${isMenuOpen ? 'transform' : ''}`}>
              <span 
                className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                } ${isScrolled ? 'bg-foreground' : 'bg-white'}`} 
              />
              <span 
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                } ${isScrolled ? 'bg-foreground' : 'bg-white'}`} 
              />
              <span 
                className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                } ${isScrolled ? 'bg-foreground' : 'bg-white'}`} 
              />
            </div>
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen py-4 shadow-lg' : 'max-h-0 overflow-hidden'
        }`}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`
                py-2 text-blue-600 text-base font-medium border-b border-gray-100
                ${location.pathname === link.path ? 'text-primary' : ''}
              `}
            >
              {t(link.translationKey)}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-white rounded-lg py-3 px-4 text-center font-medium mt-2"
          >
            {t('cta.quote')}
          </Link>
          
          <div className="flex items-center space-x-3 py-2">
            <span className="text-sm text-gray-500">{t('common.language')}</span>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all ${
                  currentLanguage === lang.code 
                    ? 'border-primary' 
                    : 'border-transparent opacity-70'
                }`}
                aria-label={`Switch to ${t(lang.translationKey)}`}
              >
                <img 
                  src={lang.flag} 
                  alt={t(lang.translationKey)} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
