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
      <div className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <span className="section-badge">
              {t('sections.trusted')}
            </span>
            <h2 className="section-heading">
              {t('sections.trustedBy')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/lovable-uploads/05822799-e8e6-4cc1-86b8-838ca2484eed.png"
                  alt="Specialized SME Enterprise Certificate"
                  className="w-full h-24 object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/lovable-uploads/36b7d319-c20d-4b3e-83fd-dbbc9703c1ba.png"
                  alt="Advanced Enterprise Award"
                  className="w-full h-24 object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/lovable-uploads/2aed2729-a216-4776-94a9-0588d6cbd476.png"
                  alt="Advanced Unit Certificate"
                  className="w-full h-24 object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/lovable-uploads/9520725d-3f76-44d6-a272-2c2ba6bb4623.png"
                  alt="High-Tech Enterprise Certificate"
                  className="w-full h-24 object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/lovable-uploads/ebfb769c-bdd5-4212-bed7-a28d13bf686b.png"
                  alt="Shandong Province Enterprise Certificate"
                  className="w-full h-24 object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/lovable-uploads/7f93e562-d838-4501-8fd4-69fb4ca90289.png"
                  alt="Technical Research Center Certificate"
                  className="w-full h-24 object-contain"
                />
              </div>
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
