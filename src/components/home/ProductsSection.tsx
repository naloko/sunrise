
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../AnimatedSection';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const { t } = useTranslation();
  
  const products = [
    {
      image: "/lovable-uploads/be0620a9-b789-464b-b554-66d4c2376130.png",
      titleKey: "products.panel.title",
      descriptionKey: "products.panel.description",
      link: "/products/solar-panel"
    },
    {
      image: "/lovable-uploads/425045d0-781c-4a14-a59f-41dfee50cafb.png",
      titleKey: "products.battery.title",
      descriptionKey: "products.battery.description",
      link: "/products/energy-storage"
    },
    {
      image: "/lovable-uploads/bced3021-9887-4089-9d49-11947726533b.png",
      titleKey: "products.inverter.title",
      descriptionKey: "products.inverter.description",
      link: "/products/inverter"
    },
    {
      image: "/lovable-uploads/1ab8907a-e014-4416-ba4b-2f7217002d9a.png",
      titleKey: "products.heater.title",
      descriptionKey: "products.heater.description",
      link: "/products/solar-water-heater"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="section-header">
          <AnimatedSection animation="fade-in">
            <span className="section-badge">
              {t('sections.products.subtitle')}
            </span>
            <h2 className="section-heading">
              {t('sections.products.title')}
            </h2>
            <p className="section-description mx-auto">
              {t('sections.products.description')}
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={(index + 1) * 100}>
              <ProductCard 
                image={product.image}
                titleKey={product.titleKey}
                descriptionKey={product.descriptionKey}
                link={product.link}
              />
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-primary/90"
          >
            {t('sections.products.viewAll')} <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
