
import { Link } from 'react-router-dom';
import { Sun, Battery, Lightbulb, Zap, Wrench, ArrowRight, ChevronRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Products = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="hero-video-container">
          <video 
            className="hero-video"
            autoPlay 
            muted 
            loop 
            playsInline
            poster="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          >
            <source src="https://www.pexels.com/video/solar-panel-farm-use-for-energy-production-4324109/" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-in">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Our <span className="text-primary">Solar</span> Products
              </h1>
              <p className="text-white/80 text-lg md:text-xl mt-6 mb-8">
                Explore our comprehensive range of solar energy products designed to provide efficient, 
                reliable, and sustainable power solutions for homes and businesses.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="section-heading">Our Product Range</h2>
              <p className="max-w-3xl mx-auto text-gray-600 mt-4">
                Our comprehensive range of solar energy products designed to provide efficient, 
                reliable, and sustainable power solutions for homes and businesses.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="product-card group">
                <div className="mb-4 text-primary">
                  <Sun className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Solar Panel</h3>
                <p className="text-gray-600 mb-4">
                  High-efficiency photovoltaic panels that convert sunlight into electricity for your home or business.
                </p>
                <Link to="/products/solar-panel" className="inline-flex items-center text-primary font-medium group-hover:underline">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <div className="product-card group">
                <div className="mb-4 text-primary">
                  <Battery className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Energy Storage Battery</h3>
                <p className="text-gray-600 mb-4">
                  Advanced battery systems that store excess solar energy for use when the sun isn't shining.
                </p>
                <Link to="/products/energy-storage" className="inline-flex items-center text-primary font-medium group-hover:underline">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={300}>
              <div className="product-card group">
                <div className="mb-4 text-primary">
                  <Lightbulb className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inverter</h3>
                <p className="text-gray-600 mb-4">
                  Converts DC electricity generated by solar panels into AC electricity for your appliances.
                </p>
                <Link to="/products/inverter" className="inline-flex items-center text-primary font-medium group-hover:underline">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={400}>
              <div className="product-card group">
                <div className="mb-4 text-primary">
                  <Zap className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">PV Water Pump</h3>
                <p className="text-gray-600 mb-4">
                  Solar-powered water pumping solutions for agricultural irrigation and water supply.
                </p>
                <Link to="/products/pv-water-pump" className="inline-flex items-center text-primary font-medium group-hover:underline">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={500}>
              <div className="product-card group">
                <div className="mb-4 text-primary">
                  <Wrench className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">PV-ESS Integrated Cabinet</h3>
                <p className="text-gray-600 mb-4">
                  All-in-one solutions that combine solar power generation with energy storage capabilities.
                </p>
                <Link to="/products/pv-ess-cabinet" className="inline-flex items-center text-primary font-medium group-hover:underline">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={600}>
              <div className="product-card group">
                <div className="mb-4 text-primary">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 6C22 4.9 21.1 4 20 4H15V2H9V4H4C2.9 4 2 4.9 2 6V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V6ZM20 6V9H4V6H20ZM4 20V11H20V20H4Z" fill="currentColor"/>
                    <path d="M12 12H6V14H12V12Z" fill="currentColor"/>
                    <path d="M18 12H14V14H18V12Z" fill="currentColor"/>
                    <path d="M12 16H6V18H12V16Z" fill="currentColor"/>
                    <path d="M18 16H14V18H18V16Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cable Rack</h3>
                <p className="text-gray-600 mb-4">
                  Professional cable management systems for clean and safe solar installations.
                </p>
                <Link to="/products/cable-rack" className="inline-flex items-center text-primary font-medium group-hover:underline">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-primary/90"
            >
              Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Harness the Power of the Sun?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Take the first step towards energy independence and sustainability. Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg font-medium transition-all transform hover:scale-105"
                >
                  Contact Us Now
                </Link>
                <Link 
                  to="/about" 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-white/20"
                >
                  Learn More
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
