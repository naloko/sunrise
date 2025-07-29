
import { Link } from 'react-router-dom';
import { 
  Sun, 
  Battery, 
  Lightbulb, 
  ChevronRight,
  Wrench,
  Zap,
  ArrowRight 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../AnimatedSection';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const { t } = useTranslation();
  
  const products = [
    {
      icon: <Sun className="w-12 h-12" />,
      titleKey: "products.panel.title",
      descriptionKey: "products.panel.description",
      link: "/products/solar-panel"
    },
    {
      icon: <Battery className="w-12 h-12" />,
      titleKey: "products.battery.title",
      descriptionKey: "products.battery.description",
      link: "/products/energy-storage"
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      titleKey: "products.inverter.title",
      descriptionKey: "products.inverter.description",
      link: "/products/inverter"
    },
    {
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.5 2 9.24 2.65 8.5 3.65L8.35 3.85C7.65 4.8 7 5.9 7 7V10H5C3.9 10 3 10.9 3 12V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V12C21 10.9 20.1 10 19 10H17V7C17 5.9 16.35 4.8 15.65 3.85L15.5 3.65C14.76 2.65 13.5 2 12 2ZM9 7C9 6.45 9.3 5.8 9.7 5.3L9.85 5.1C10.35 4.45 11.15 4 12 4C12.85 4 13.65 4.45 14.15 5.1L14.3 5.3C14.7 5.8 15 6.45 15 7V10H9V7ZM5 12H19V20H5V12Z" fill="currentColor"/>
              <circle cx="12" cy="16" r="2" fill="currentColor"/>
            </svg>,
      titleKey: "products.heater.title",
      descriptionKey: "products.heater.description",
      link: "/products/solar-water-heater"
    }
  ];

  return (
    <section className="product-section-container">
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
                icon={product.icon}
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
