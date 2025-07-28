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
          <div className="flex flex-col items-center text-center">
            <span className="inline-block bg-yellow-100 border border-yellow-200 text-yellow-700 text-xs sm:text-sm font-semibold rounded-full px-3 py-1 mb-2 tracking-wide" style={{letterSpacing:"0.08em"}}>
              {t('sections.trusted')}
            </span>
            <h2 className="text-gray-800 text-lg sm:text-xl md:text-2xl font-semibold mb-6">
              {t('sections.trustedBy')}
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
              <img
                src="public/lovable-uploads/7cb6da6e-d1a5-4945-9e9c-395ccdd074ea.png"
                alt="Trusted Companies"
                className="h-10 object-contain"
              />
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
