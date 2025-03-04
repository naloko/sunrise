import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
const About = () => {
  return <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="hero-video-container">
          <video className="hero-video" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
            <source src="https://www.pexels.com/video/solar-panel-farm-use-for-energy-production-4324109/" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-in">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                About <span className="text-primary">Sunrise</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl mt-6 mb-8">
                Learn about our mission, vision, and the team behind Sunrise Solar Solutions.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div>
                <span className="section-subheading">Our Story</span>
                <h2 className="section-heading">Experience Quality Solar Solutions</h2>
                <p className="text-gray-600 mb-6">
                  Sunrise New Energy Technology Co., Ltd., incorporated in Kano State, Nigeria, is dedicated to delivering all-encompassing 
                  one-stop solar solutions for both residential and commercial & industrial sectors across Nigeria.
                </p>
                <p className="text-gray-600 mb-6">
                  Its parent company, Shandong Longguang Tianxu Solar Energy Co., Ltd. is a global leader in advanced solar solutions. 
                  With advanced technologies and rich experience, we provide reliable and efficient solar energy solutions.
                </p>
                <p className="text-gray-600 mb-6">
                  Our mission is to accelerate Nigeria's transition to sustainable energy through innovative solar solutions, 
                  exceptional customer service, and unwavering commitment to quality.
                </p>
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

      {/* Vision & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="section-subheading">Our Foundation</span>
              <h2 className="section-heading">Vision & Values</h2>
              <p className="max-w-3xl mx-auto text-gray-600 mt-4">
                Our vision and values guide everything we do at Sunrise Solar.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  To be Nigeria's leading provider of sustainable energy solutions, empowering communities, 
                  businesses, and individuals with clean, reliable, and affordable solar energy.
                </p>
                <p className="text-gray-600">
                  We envision a future where renewable energy is accessible to all Nigerians, 
                  reducing dependence on fossil fuels and creating a cleaner, more sustainable environment.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Excellence</h4>
                      <p className="text-gray-600">We strive for excellence in every aspect of our business.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Innovation</h4>
                      <p className="text-gray-600">We embrace innovative technologies and approaches.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Sustainability</h4>
                      <p className="text-gray-600">We are committed to environmental sustainability in all we do.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Customer Focus</h4>
                      <p className="text-gray-600">We put customer needs at the center of our operations.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="section-subheading">Meet Our Team</span>
              <h2 className="section-heading">The People Behind Sunrise</h2>
              <p className="max-w-3xl mx-auto text-gray-600 mt-4">
                Our team of experts is committed to delivering the best solar solutions for our clients.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="scale-in" delay={100}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Erin Xing</h3>
                  <p className="text-primary font-medium mb-3">Chief Executive Officer</p>
                  <p className="text-gray-600 mb-4">
                    With over 15 years of experience in the renewable energy sector, John leads our team with vision and expertise.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={200}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                  <p className="text-primary font-medium mb-3">Technical Director</p>
                  <p className="text-gray-600 mb-4">
                    Sarah brings innovation and technical excellence to all our solar installation projects.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={300}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Michael Adebayo</h3>
                  <p className="text-primary font-medium mb-3">Operations Manager</p>
                  <p className="text-gray-600 mb-4">
                    Michael ensures that all our operations run smoothly and efficiently to deliver the best customer experience.
                  </p>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Join Us in Creating a Sustainable Future</h2>
              <p className="text-lg text-gray-300 mb-8">
                Partner with Sunrise Solar and be part of the renewable energy revolution in Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg font-medium transition-all transform hover:scale-105">
                  Contact Us Now
                </Link>
                <Link to="/projects" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-white/20">
                  View Our Projects
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>;
};
export default About;