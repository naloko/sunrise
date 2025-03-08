
import { Link } from 'react-router-dom';
import YoutubeBackground from '../YoutubeBackground';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      <YoutubeBackground videoFile="solar stock for hero.mp4" />

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
            <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
