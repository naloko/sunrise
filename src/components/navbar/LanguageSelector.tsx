
import { useTranslation } from 'react-i18next';

export interface LanguageFlag {
  code: string;
  name: string;
  flag: string;
  translationKey: string;
}

interface LanguageSelectorProps {
  languages: LanguageFlag[];
  currentLanguage: string;
  changeLanguage: (code: string) => void;
}

const LanguageSelector = ({ languages, currentLanguage, changeLanguage }: LanguageSelectorProps) => {
  const { t } = useTranslation();

  return (
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
  );
};

export default LanguageSelector;
