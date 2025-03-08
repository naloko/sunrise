
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../AnimatedSection';

const AboutSection = () => {
  const { t } = useTranslation();
  
  const stats = [
    { value: '10+', labelKey: 'about.stats.experience' },
    { value: '500+', labelKey: 'about.stats.projects' },
    { value: '50+', labelKey: 'about.stats.team' },
    { value: '10k+', labelKey: 'about.stats.co2' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-in-left">
            <div>
              <span className="section-subheading">{t('sections.about.subtitle')}</span>
              <h2 className="section-heading">{t('sections.about.title')}</h2>
              <p className="text-gray-600 mb-6">
                {t('sections.about.description1')}
              </p>
              <p className="text-gray-600 mb-6">
                {t('sections.about.description2')}
              </p>
              <div className="mt-8">
                <Link 
                  to="/about" 
                  className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-primary/90"
                >
                  {t('sections.about.cta')} <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-primary text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-800 font-medium">{t(stat.labelKey)}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
