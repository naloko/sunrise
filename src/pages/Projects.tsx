
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Projects = () => {
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
                Our <span className="text-primary">Projects</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl mt-6 mb-8">
                Explore our portfolio of successful solar installations and see the positive impact we're making.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="section-heading">Featured Projects</h2>
              <p className="max-w-3xl mx-auto text-gray-600 mt-4">
                Browse through our diverse range of solar installations across residential and commercial sectors.
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
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Completed: June 2022</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Kano, Nigeria</span>
                    </div>
                  </div>
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
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Completed: March 2023</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Tashkent, Uzbekistan</span>
                    </div>
                  </div>
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
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Completed: December 2022</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Kano, Nigeria</span>
                    </div>
                  </div>
                  <Link to="/projects/sunbelt-group" className="inline-flex items-center text-primary font-medium hover:underline">
                    View Project <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={400}>
              <div className="overflow-hidden rounded-xl shadow-md">
                <div className="h-64 overflow-hidden bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80" 
                    alt="Residential Solar Project" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="badge">Residential</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Luxury Villa, Lagos</h3>
                  <p className="text-gray-600 mb-4">10 kWp PV System with 10 kWh Battery Storage for complete energy independence.</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Completed: September 2022</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Lagos, Nigeria</span>
                    </div>
                  </div>
                  <Link to="/projects/luxury-villa" className="inline-flex items-center text-primary font-medium hover:underline">
                    View Project <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={500}>
              <div className="overflow-hidden rounded-xl shadow-md">
                <div className="h-64 overflow-hidden bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1531071877152-7317d7980b52?auto=format&fit=crop&w=800&q=80" 
                    alt="School Solar Project" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="badge">Educational</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">University Campus, Abuja</h3>
                  <p className="text-gray-600 mb-4">125 kW Grid-tied system powering multiple campus buildings with real-time monitoring.</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Completed: February 2023</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Abuja, Nigeria</span>
                    </div>
                  </div>
                  <Link to="/projects/university-campus" className="inline-flex items-center text-primary font-medium hover:underline">
                    View Project <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={600}>
              <div className="overflow-hidden rounded-xl shadow-md">
                <div className="h-64 overflow-hidden bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80" 
                    alt="Hospital Solar Project" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="badge">Healthcare</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Medical Center, Port Harcourt</h3>
                  <p className="text-gray-600 mb-4">50 kW Solar System with 100 kWh Battery Backup for critical medical equipment.</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Completed: July 2023</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Port Harcourt, Nigeria</span>
                    </div>
                  </div>
                  <Link to="/projects/medical-center" className="inline-flex items-center text-primary font-medium hover:underline">
                    View Project <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-primary/90">
              Load More Projects <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Project Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="section-subheading">Our Process</span>
              <h2 className="section-heading">How We Deliver Excellence</h2>
              <p className="max-w-3xl mx-auto text-gray-600 mt-4">
                Our proven project delivery process ensures quality, efficiency, and customer satisfaction.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="relative">
                <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
                  <div className="bg-primary h-12 w-12 flex items-center justify-center text-white rounded-full text-xl font-bold mb-4">1</div>
                  <h3 className="text-xl font-semibold mb-3">Consultation</h3>
                  <p className="text-gray-600">We assess your needs and provide tailored recommendations for your solar solution.</p>
                </div>
                <div className="absolute top-1/2 left-full w-16 h-1 bg-primary hidden lg:block" style={{ transform: "translateY(-50%)" }}></div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="relative">
                <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
                  <div className="bg-primary h-12 w-12 flex items-center justify-center text-white rounded-full text-xl font-bold mb-4">2</div>
                  <h3 className="text-xl font-semibold mb-3">Design</h3>
                  <p className="text-gray-600">Our engineers create a custom system design optimized for your specific requirements.</p>
                </div>
                <div className="absolute top-1/2 left-full w-16 h-1 bg-primary hidden lg:block" style={{ transform: "translateY(-50%)" }}></div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="relative">
                <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
                  <div className="bg-primary h-12 w-12 flex items-center justify-center text-white rounded-full text-xl font-bold mb-4">3</div>
                  <h3 className="text-xl font-semibold mb-3">Installation</h3>
                  <p className="text-gray-600">Our professional team installs your system with precision and attention to detail.</p>
                </div>
                <div className="absolute top-1/2 left-full w-16 h-1 bg-primary hidden lg:block" style={{ transform: "translateY(-50%)" }}></div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={400}>
              <div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-primary h-12 w-12 flex items-center justify-center text-white rounded-full text-xl font-bold mb-4">4</div>
                  <h3 className="text-xl font-semibold mb-3">Support</h3>
                  <p className="text-gray-600">We provide ongoing maintenance and support to ensure optimal system performance.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="section-subheading">Client Feedback</span>
              <h2 className="section-heading">What Our Clients Say</h2>
              <p className="max-w-3xl mx-auto text-gray-600 mt-4">
                Hear from our satisfied clients about their experience working with Sunrise Solar.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="bg-gray-50 p-6 rounded-xl relative">
                <div className="text-primary text-5xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <div className="relative z-10">
                  <p className="text-gray-600 mb-6 italic">
                    "Sunrise Solar exceeded our expectations. The team was professional, the installation was flawless, 
                    and we're now saving significantly on our energy bills."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">John Okafor</h4>
                      <p className="text-gray-500 text-sm">CEO, Okafor Enterprises</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="bg-gray-50 p-6 rounded-xl relative">
                <div className="text-primary text-5xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <div className="relative z-10">
                  <p className="text-gray-600 mb-6 italic">
                    "The solar system installed by Sunrise has been a game-changer for our hotel. We've reduced our energy costs 
                    by 70% and our guests appreciate our commitment to sustainability."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah Adeyemi</h4>
                      <p className="text-gray-500 text-sm">Manager, Sunshine Hotel</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="bg-gray-50 p-6 rounded-xl relative">
                <div className="text-primary text-5xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <div className="relative z-10">
                  <p className="text-gray-600 mb-6 italic">
                    "We chose Sunrise Solar for our campus project because of their reputation for quality. They delivered on time, 
                    within budget, and the system has been performing flawlessly."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Prof. Ibrahim Mohammed</h4>
                      <p className="text-gray-500 text-sm">Director, University of Abuja</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Solar Journey?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today to discuss your project and discover how we can help you harness the power of the sun.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg font-medium transition-all transform hover:scale-105"
                >
                  Contact Us Now
                </Link>
                <Link 
                  to="/products" 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-white/20"
                >
                  Explore Products
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
