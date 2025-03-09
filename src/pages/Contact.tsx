
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';

const Contact = () => {
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
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl mt-6 mb-8">
                Get in touch with our team for inquiries, quotes, or to learn more about our solar solutions.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-in-left">
              <div>
                <h2 className="section-heading">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We'd love to hear from you. Whether you have a question about our products, services, 
                  or would like to request a quote, our team is ready to assist you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <p className="text-gray-600">+234 (0) 803 123 4567</p>
                      <p className="text-gray-600">+234 (0) 703 987 6543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-gray-600">info@sunrisesolarnigeria.com</p>
                      <p className="text-gray-600">sales@sunrisesolarnigeria.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Office Location</h3>
                      <p className="text-gray-600">123 Solar Lane, Kano State, Nigeria</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="section-heading">Find Us</h2>
              <p className="max-w-3xl mx-auto text-gray-600 mt-4">
                Visit our office in Kano State, Nigeria.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in">
            <div className="h-[400px] rounded-xl overflow-hidden shadow-md">
              {/* Insert Google Map iframe here */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Google Map will be embedded here</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="section-heading">Frequently Asked Questions</h2>
              <p className="max-w-3xl mx-auto text-gray-600 mt-4">
                Find answers to some of the most common questions about our solar solutions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">How much does a solar installation cost?</h3>
                <p className="text-gray-600">
                  The cost varies depending on your energy needs, property size, and system specifications. 
                  We provide free consultations to give you an accurate quote tailored to your requirements.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">How long does installation take?</h3>
                <p className="text-gray-600">
                  Residential installations typically take 1-3 days, while commercial projects may take 1-2 weeks 
                  depending on the system size and complexity.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">What maintenance is required?</h3>
                <p className="text-gray-600">
                  Solar systems require minimal maintenance. We recommend annual inspections and cleaning 
                  to ensure optimal performance. We offer maintenance packages for worry-free operation.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={400}>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Do you provide warranties?</h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive warranties on all our products and installations. 
                  Our solar panels typically come with a 25-year performance warranty.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              View All FAQs <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
