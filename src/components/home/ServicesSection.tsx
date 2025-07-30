
import { Link } from 'react-router-dom';
import { 
  Home, 
  Factory, 
  Battery, 
  Wrench,
  ArrowRight 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../AnimatedSection';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: <img src="/lovable-uploads/3d0d2bd7-3c44-405c-8551-3fb6a83a3b5a.png" alt="Residential Solar" className="w-16 h-12 object-cover rounded mb-4" />,
      titleKey: "footer.residential",
      descriptionKey: "services.residential.description",
      link: "/services/residential"
    },
    {
      icon: <img src="/lovable-uploads/54962123-de4d-433b-be8b-6d55426d4143.png" alt="Commercial Solar" className="w-16 h-12 object-cover rounded mb-4" />,
      titleKey: "footer.commercial",
      descriptionKey: "services.commercial.description",
      link: "/services/commercial"
    },
    {
      icon: <img src="/lovable-uploads/a713538a-7822-448e-9542-5f3b15d4178d.png" alt="Panel Cleaning" className="w-16 h-12 object-cover rounded mb-4" />,
      titleKey: "footer.cleaning",
      descriptionKey: "services.cleaning.description",
      link: "/services/panel-cleaning"
    },
    {
      icon: <img src="/lovable-uploads/f00c9af0-421a-4458-826b-a14a7301b7c0.png" alt="Maintenance" className="w-16 h-12 object-cover rounded mb-4" />,
      titleKey: "services.maintenance.title",
      descriptionKey: "services.maintenance.description",
      link: "/services/maintenance"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="section-subheading">{t('services.whatWeOffer')}</span>
            <h2 className="section-heading">{t('common.ourServices')}</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-4">
              {t('services.description')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="fade-in" delay={(index + 1) * 100}>
              <ServiceCard 
                icon={service.icon}
                titleKey={service.titleKey}
                descriptionKey={service.descriptionKey}
                link={service.link}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
