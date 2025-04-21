
import HeroSection from '../components/home/HeroSection';
import ProductsSection from '../components/home/ProductsSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import BenefitsSection from '../components/home/BenefitsSection';
import ProjectsSection from '../components/home/ProjectsSection';
import CtaSection from '../components/home/CtaSection';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <div className="bg-gradient-to-b from-white to-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="inline-block text-primary border border-primary/20 bg-primary/5 px-4 py-1 rounded-full text-sm font-medium mb-2">
              {t('sections.trusted')}
            </span>
            <h2 className="text-2xl font-medium text-gray-700 mb-8">{t('sections.trustedBy')}</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
              <img src="public/lovable-uploads/7cb6da6e-d1a5-4945-9e9c-395ccdd074ea.png" alt="Trusted Companies" className="h-12 object-contain" />
              {/* Add more partner logos if you have them */}
            </div>
          </div>
        </div>
      </div>
      <ProductsSection />
      <ServicesSection />
      <AboutSection />
      <BenefitsSection />
      <ProjectsSection />
      <CtaSection />
    </main>
  );
};

export default Index;
