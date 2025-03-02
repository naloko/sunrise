
import { Link } from 'react-router-dom';
import { 
  Sun, 
  Battery, 
  Lightbulb, 
  Home, 
  Factory, 
  Leaf, 
  BarChart, 
  ArrowRight, 
  ChevronRight,
  Wrench,
  Zap,
  Users
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Index = () => {
  return (
    <main>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center">
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
            <div className="animate-fade-in">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">One-Stop</span> Solar Solutions
              </h1>
              <p className="text-white/80 text-lg md:text-xl mt-6 mb-8">
                Sunrise is dedicated to delivering all-encompassing solar solutions for both 
                residential and commercial sectors across Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/contact" 
                  className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg font-medium transition-all transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link 
                  to="/about" 
                  className="glass-button"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Embedded YouTube Video */}
              <div className="rounded-xl overflow-hidden shadow-2xl mt-6">
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/TzfnlPxCZv0" 
                  title="Sunrise Solar Solutions Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="section-subheading">Our Product Range</span>
              <h2 className="section-heading">One-Stop Solar Solution</h2>
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
              to="/products" 
              className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-primary/90"
            >
              View All Products <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="service-card">
                <Home className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Residential Installation</h3>
                <p className="text-gray-600 mb-4">
                  Custom solar solutions for homes, designed to reduce electricity bills and provide energy independence.
                </p>
                <Link to="/services/residential" className="inline-flex items-center text-primary font-medium hover:underline">
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="service-card">
                <Factory className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Commercial Installation</h3>
                <p className="text-gray-600 mb-4">
                  Large-scale solar solutions for businesses and industries, reducing operational costs and carbon footprint.
                </p>
                <Link to="/services/commercial" className="inline-flex items-center text-primary font-medium hover:underline">
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="service-card">
                <svg className="w-12 h-12 text-primary mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 16.2v-.8a2.5 2.5 0 0 1 5 0v.8"/>
                  <path d="M2 16h20M3 16c0 1 1 2 2 2h14c1 0 2-1 2-2"/>
                  <path d="M7 8v1"/>
                  <path d="M12 8v1"/>
                  <path d="M17 8v1"/>
                  <path d="M12 4V2"/>
                  <path d="m4 9 2-2"/>
                  <path d="M20 9 18 7"/>
                </svg>
                <h3 className="text-xl font-semibold mb-2">Panel Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Professional cleaning services to maintain optimal performance and extend the life of your solar panels.
                </p>
                <Link to="/services/panel-cleaning" className="inline-flex items-center text-primary font-medium hover:underline">
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={400}>
              <div className="service-card">
                <Battery className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Back-Up Power</h3>
                <p className="text-gray-600 mb-4">
                  Reliable energy storage solutions to keep your power on during grid outages or unstable electricity supply.
                </p>
                <Link to="/services/backup-power" className="inline-flex items-center text-primary font-medium hover:underline">
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={500}>
              <div className="service-card">
                <svg className="w-12 h-12 text-primary mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14v3a1 1 0 0 0 1 1h3"/>
                  <path d="M20 14v3a1 1 0 0 1-1 1h-3"/>
                  <path d="M14 4h3a1 1 0 0 1 1 1v3"/>
                  <path d="M4 10V7a1 1 0 0 1 1-1h3"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <h3 className="text-xl font-semibold mb-2">Product Sales</h3>
                <p className="text-gray-600 mb-4">
                  Quality solar products available for purchase, with expert advice on selecting the right equipment.
                </p>
                <Link to="/services/product-sales" className="inline-flex items-center text-primary font-medium hover:underline">
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={600}>
              <div className="service-card">
                <Wrench className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Maintenance & Repair</h3>
                <p className="text-gray-600 mb-4">
                  Regular maintenance and prompt repair services to ensure your solar system performs at its best.
                </p>
                <Link to="/services/maintenance" className="inline-flex items-center text-primary font-medium hover:underline">
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section with Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div>
                <span className="section-subheading">About Sunrise</span>
                <h2 className="section-heading">Experience Quality Solar Solutions</h2>
                <p className="text-gray-600 mb-6">
                  Sunrise New Energy Technology Co., Ltd., incorporated in Kano State, Nigeria, is dedicated to delivering all-encompassing 
                  one-stop solar solutions for both residential and commercial & industrial sectors across Nigeria.
                </p>
                <p className="text-gray-600 mb-6">
                  Its parent company, Shandong Longguang Tianxu Solar Energy Co., Ltd. is a global leader in advanced solar solutions. 
                  With advanced technologies and rich experience, we provide reliable and efficient solar energy solutions.
                </p>
                <div className="mt-8">
                  <Link 
                    to="/about" 
                    className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-primary/90"
                  >
                    Learn More About Us <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-primary text-4xl font-bold mb-2">10+</div>
                  <div className="text-gray-800 font-medium">Years of Experience</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-primary text-4xl font-bold mb-2">500+</div>
                  <div className="text-gray-800 font-medium">Projects Completed</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-primary text-4xl font-bold mb-2">50+</div>
                  <div className="text-gray-800 font-medium">Team Members</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-primary text-4xl font-bold mb-2">10k+</div>
                  <div className="text-gray-800 font-medium">Tons of CO₂ Saved</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
                <p className="text-gray-300">
                  Reduce your carbon footprint with clean, renewable solar energy that helps protect the environment.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
                <BarChart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cost Savings</h3>
                <p className="text-gray-300">
                  Significant reduction in electricity bills, with systems that typically pay for themselves in a few years.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
                <Battery className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Energy Independence</h3>
                <p className="text-gray-300">
                  Gain control over your energy needs with reduced dependence on the traditional power grid.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={400}>
              <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Reliable Power</h3>
                <p className="text-gray-300">
                  Enjoy uninterrupted power supply even during grid outages with our energy storage solutions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={500}>
              <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
                <Wrench className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Low Maintenance</h3>
                <p className="text-gray-300">
                  Solar systems require minimal maintenance, with most components designed to last 25+ years.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={600}>
              <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
                <p className="text-gray-300">
                  Access to a team of solar experts for consultation, design, installation, and ongoing support.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="section-subheading">Recent Work</span>
              <h2 className="section-heading">Featured Projects</h2>
              <p className="max-w-3xl mx-auto text-gray-600 mt-4">
                Explore some of our successful solar installations and see the positive impact we're making.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="scale-in" delay={100}>
              <div className="overflow-hidden rounded-xl shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="public/lovable-uploads/f2ea0a0a-b581-4c79-8d13-fa750a10608b.png" 
                    alt="Retail Store Solar Project" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="badge">Commercial</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Retail Store, Kano State</h3>
                  <p className="text-gray-600 mb-4">16 kWp PV + 8kW/15kWh battery system with average daily yield of 90 kWh.</p>
                  <Link to="/projects/retail-store" className="inline-flex items-center text-primary font-medium hover:underline">
                    View Project <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={200}>
              <div className="overflow-hidden rounded-xl shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="public/lovable-uploads/703f961f-3b5a-4ddf-87a8-2a2c189aa601.png" 
                    alt="Hotel Solar Project" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="badge">Commercial</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Hotel, Tashkent, Uzbekistan</h3>
                  <p className="text-gray-600 mb-4">20 kW Grid-tied PV Project + 5 kW/10 kWh Energy Storage System.</p>
                  <Link to="/projects/hotel-tashkent" className="inline-flex items-center text-primary font-medium hover:underline">
                    View Project <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={300}>
              <div className="overflow-hidden rounded-xl shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="public/lovable-uploads/e557b350-0f62-4ae4-9eeb-e456fa54cadb.png" 
                    alt="Sunbelt Group Solar Project" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="badge">Commercial</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Sunbelt Group, Kano State</h3>
                  <p className="text-gray-600 mb-4">221 kW Grid-tied PV Project with 360,000 kWh annual yield and ROI less than 2 years.</p>
                  <Link to="/projects/sunbelt-group" className="inline-flex items-center text-primary font-medium hover:underline">
                    View Project <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-primary/90"
            >
              View All Projects <ArrowRight className="w-5 h-5 ml-2" />
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

export default Index;
