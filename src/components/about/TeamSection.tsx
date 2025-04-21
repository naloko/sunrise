
import AnimatedSection from '../../components/AnimatedSection';
import { useTranslation } from 'react-i18next';

const TeamSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block text-primary border border-primary/20 bg-primary/5 px-4 py-1 rounded-full text-sm font-medium mb-3">
              {t('about.team')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              {t('about.teamTitle')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
            <p className="max-w-3xl mx-auto text-gray-600 mt-6">
              {t('about.teamSubtitle')}
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedSection animation="scale-in" delay={100}>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" alt="Team Member" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">Erin Xing</h3>
                <p className="text-primary font-medium mb-3">{t('about.ceo')}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t('about.ceoDesc')}
                </p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="scale-in" delay={300}>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80" alt="Team Member" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">Umar Amin</h3>
                <p className="text-primary font-medium mb-3">{t('about.operations')}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t('about.operationsDesc')}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
