
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { navLinks, languages } from './navbar/navData';
import NavLink from './navbar/NavLink';
import LanguageSelector from './navbar/LanguageSelector';
import MobileMenu from './navbar/MobileMenu';
import HamburgerButton from './navbar/HamburgerButton';

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
              <NavLink
                key={link.path}
                path={link.path}
                translationKey={link.translationKey}
                isScrolled={isScrolled}
                isActive={location.pathname === link.path}
              />
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
            
            <LanguageSelector 
              languages={languages}
              currentLanguage={currentLanguage}
              changeLanguage={changeLanguage}
            />
          </div>

          <HamburgerButton 
            isOpen={isMenuOpen}
            isScrolled={isScrolled}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      <MobileMenu 
        isOpen={isMenuOpen}
        navLinks={navLinks}
        currentPath={location.pathname}
        languages={languages}
        currentLanguage={currentLanguage}
        changeLanguage={changeLanguage}
      />
    </header>
  );
};

export default Navbar;
