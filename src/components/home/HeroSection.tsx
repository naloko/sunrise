
// Updated to reduce button sizes and center them on mobile

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import YoutubeBackground from '../YoutubeBackground';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center">
      <YoutubeBackground videoFile="solar stock for hero.mp4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-primary">{t('hero.oneStop')}</span> {t('hero.solarSolutions')}
            </h1>
            <p className="text-white/80 text-lg md:text-xl mt-4 mb-8 max-w-2xl">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all transform hover:scale-105 px-6 py-2 text-center w-full sm:w-auto text-sm sm:text-base"
              >
                {t('hero.getStarted')}
              </Link>
              <Link 
                to="/about" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-medium transition-all hover:bg-white/20 px-6 py-2 text-center w-full sm:w-auto text-sm sm:text-base"
              >
                {t('hero.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
