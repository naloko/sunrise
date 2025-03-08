
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const AboutSection = () => {
  const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '50+', label: 'Team Members' },
    { value: '10k+', label: 'Tons of CO₂ Saved' }
  ];

  return (
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
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-primary text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-800 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
