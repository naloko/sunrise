
import { 
  Leaf, 
  BarChart, 
  Battery, 
  Zap, 
  Wrench, 
  Users 
} from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import BenefitCard from './BenefitCard';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Leaf className="w-12 h-12 text-primary mb-4" />,
      title: "Eco-Friendly",
      description: "Reduce your carbon footprint with clean, renewable solar energy that helps protect the environment."
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary mb-4" />,
      title: "Cost Savings",
      description: "Significant reduction in electricity bills, with systems that typically pay for themselves in a few years."
    },
    {
      icon: <Battery className="w-12 h-12 text-primary mb-4" />,
      title: "Energy Independence",
      description: "Gain control over your energy needs with reduced dependence on the traditional power grid."
    },
    {
      icon: <Zap className="w-12 h-12 text-primary mb-4" />,
      title: "Reliable Power",
      description: "Enjoy uninterrupted power supply even during grid outages with our energy storage solutions."
    },
    {
      icon: <Wrench className="w-12 h-12 text-primary mb-4" />,
      title: "Low Maintenance",
      description: "Solar systems require minimal maintenance, with most components designed to last 25+ years."
    },
    {
      icon: <Users className="w-12 h-12 text-primary mb-4" />,
      title: "Expert Support",
      description: "Access to a team of solar experts for consultation, design, installation, and ongoing support."
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm md:text-base uppercase tracking-wider font-medium mb-2">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">The Sunrise Advantage</h2>
            <p className="max-w-3xl mx-auto text-gray-300 mt-4">
              Experience the benefits of choosing Sunrise for your solar energy needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} animation="fade-in" delay={(index + 1) * 100}>
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
