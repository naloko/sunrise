
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
      icon: <Zap className="w-12 h-12" />,
      titleKey: "products.pump.title",
      descriptionKey: "products.pump.description",
      link: "/products/pv-water-pump"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      titleKey: "products.cabinet.title",
      descriptionKey: "products.cabinet.description",
      link: "/products/pv-ess-cabinet"
    },
    {
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 6C22 4.9 21.1 4 20 4H15V2H9V4H4C2.9 4 2 4.9 2 6V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V6ZM20 6V9H4V6H20ZM4 20V11H20V20H4Z" fill="currentColor"/>
              <path d="M12 12H6V14H12V12Z" fill="currentColor"/>
              <path d="M18 12H14V14H18V12Z" fill="currentColor"/>
              <path d="M12 16H6V18H12V16Z" fill="currentColor"/>
              <path d="M18 16H14V18H18V16Z" fill="currentColor"/>
            </svg>,
      titleKey: "products.rack.title",
      descriptionKey: "products.rack.description",
      link: "/products/cable-rack"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
