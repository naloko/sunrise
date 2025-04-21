
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../../components/AnimatedSection';

const CtaSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('public/lovable-uploads/12d67846-e9f9-4992-a6dc-ba767c86f62e.png')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block text-primary bg-primary/20 px-4 py-1 rounded-full text-sm font-medium mb-4">
              {t('about.joinUs')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t('about.ctaTitle')}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('about.ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg">
                {t('about.contactCta')}
              </Link>
              <Link to="/projects" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-white/20">
                {t('about.projectsCta')}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
export default CtaSection;
