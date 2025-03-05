
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageFlag } from './LanguageSelector';

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: Array<{ path: string; translationKey: string }>;
  currentPath: string;
  languages: LanguageFlag[];
  currentLanguage: string;
  changeLanguage: (code: string) => void;
}

const MobileMenu = ({ 
  isOpen, 
  navLinks, 
  currentPath, 
  languages, 
  currentLanguage, 
  changeLanguage 
}: MobileMenuProps) => {
  const { t } = useTranslation();

  return (
    <div 
      className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
        isOpen ? 'max-h-screen py-4 shadow-lg' : 'max-h-0 overflow-hidden'
      }`}
    >
      <nav className="container mx-auto px-4 flex flex-col space-y-4">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`
              py-2 text-blue-600 text-base font-medium border-b border-gray-100
              ${currentPath === link.path ? 'text-primary' : ''}
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
  );
};

export default MobileMenu;
