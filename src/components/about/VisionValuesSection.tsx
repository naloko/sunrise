
import AnimatedSection from '../../components/AnimatedSection';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const VisionValuesSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block text-primary border border-primary/20 bg-primary/5 px-4 py-1 rounded-full text-sm font-medium mb-3">
              {t('about.coreValues')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              {t('about.visionValues')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
            <p className="max-w-3xl mx-auto text-gray-600 mt-6">
              {t('about.valuesSubtitle')}
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <AnimatedSection animation="fade-in" delay={100}>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{t('about.ourVision')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{t('about.visionText1')}</p>
              <p className="text-gray-600 leading-relaxed">{t('about.visionText2')}</p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{t('about.ourValues')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-primary/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('about.excellence')}</h4>
                    <p className="text-gray-600">{t('about.excellenceDesc')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-primary/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('about.innovation')}</h4>
                    <p className="text-gray-600">{t('about.innovationDesc')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-primary/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('about.sustainability')}</h4>
                    <p className="text-gray-600">{t('about.sustainabilityDesc')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-primary/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('about.customer')}</h4>
                    <p className="text-gray-600">{t('about.customerDesc')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default VisionValuesSection;
