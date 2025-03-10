import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import YoutubeBackground from '../YoutubeBackground';
const HeroSection = () => {
  const {
    t
  } = useTranslation();
  return <section className="relative h-screen flex items-center">
      <YoutubeBackground videoFile="solar stock for hero.mp4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary">{t('hero.oneStop')}</span> {t('hero.solarSolutions')}
            </h1>
            <p className="text-white/80 text-lg md:text-xl mt-6 mb-8">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all transform hover:scale-105 my-0 mx-[100px] px-[20px] py-[10px]">
                {t('hero.getStarted')}
              </Link>
              <Link to="/about" className="glass-button">
                {t('hero.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;