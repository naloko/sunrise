
import { Link } from 'react-router-dom';
import { 
  Home, 
  Factory, 
  Battery, 
  Wrench,
  ArrowRight 
} from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-primary mb-4" />,
      title: "Residential Installation",
      description: "Custom solar solutions for homes, designed to reduce electricity bills and provide energy independence.",
      link: "/services/residential"
    },
    {
      icon: <Factory className="w-12 h-12 text-primary mb-4" />,
      title: "Commercial Installation",
      description: "Large-scale solar solutions for businesses and industries, reducing operational costs and carbon footprint.",
      link: "/services/commercial"
    },
    {
      icon: <svg className="w-12 h-12 text-primary mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 16.2v-.8a2.5 2.5 0 0 1 5 0v.8"/>
              <path d="M2 16h20M3 16c0 1 1 2 2 2h14c1 0 2-1 2-2"/>
              <path d="M7 8v1"/>
              <path d="M12 8v1"/>
              <path d="M17 8v1"/>
              <path d="M12 4V2"/>
              <path d="m4 9 2-2"/>
              <path d="M20 9 18 7"/>
            </svg>,
      title: "Panel Cleaning",
      description: "Professional cleaning services to maintain optimal performance and extend the life of your solar panels.",
      link: "/services/panel-cleaning"
    },
    {
      icon: <Battery className="w-12 h-12 text-primary mb-4" />,
      title: "Back-Up Power",
      description: "Reliable energy storage solutions to keep your power on during grid outages or unstable electricity supply.",
      link: "/services/backup-power"
    },
    {
      icon: <svg className="w-12 h-12 text-primary mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 14v3a1 1 0 0 0 1 1h3"/>
              <path d="M20 14v3a1 1 0 0 1-1 1h-3"/>
              <path d="M14 4h3a1 1 0 0 1 1 1v3"/>
              <path d="M4 10V7a1 1 0 0 1 1-1h3"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>,
      title: "Product Sales",
      description: "Quality solar products available for purchase, with expert advice on selecting the right equipment.",
      link: "/services/product-sales"
    },
    {
      icon: <Wrench className="w-12 h-12 text-primary mb-4" />,
      title: "Maintenance & Repair",
      description: "Regular maintenance and prompt repair services to ensure your solar system performs at its best.",
      link: "/services/maintenance"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="section-subheading">What we offer</span>
            <h2 className="section-heading">Our Services</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-4">
              From initial consultation to installation and maintenance, we provide end-to-end solar energy solutions tailored to your needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="fade-in" delay={(index + 1) * 100}>
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
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
