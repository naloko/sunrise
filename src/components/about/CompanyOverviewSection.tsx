
import AnimatedSection from '../../components/AnimatedSection';
import { useTranslation } from 'react-i18next';

const CompanyOverviewSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-in-left">
            <div>
              <div className="mb-6">
                <span className="inline-block text-primary border border-primary/20 bg-primary/5 px-4 py-1 rounded-full text-sm font-medium">
                  {t('about.ourStory')}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-800">
                  {t('about.experienceTitle')}
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.paragraph1')}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.paragraph2')}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.paragraph3')}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-primary text-4xl font-bold mb-2">10+</div>
                <div className="text-gray-800 font-medium">{t('about.years')}</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-primary text-4xl font-bold mb-2">500+</div>
                <div className="text-gray-800 font-medium">{t('about.projects')}</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-primary text-4xl font-bold mb-2">50+</div>
                <div className="text-gray-800 font-medium">{t('about.team')}</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-primary text-4xl font-bold mb-2">10k+</div>
                <div className="text-gray-800 font-medium">{t('about.co2')}</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
