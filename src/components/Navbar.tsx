import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun } from 'lucide-react';

interface NavLink {
  path: string;
  label: string;
}

const navLinks: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/products', label: 'Products' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-primary" aria-hidden="true" />
            <span className={`text-xl font-bold ${isScrolled || isMenuOpen ? 'text-foreground' : 'text-white'}`}>
              SUNRISE
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  text-sm font-medium transition-colors relative
                  ${isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white/80 hover:text-white'}
                  ${location.pathname === link.path 
                    ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary' 
                    : ''}
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link
              to="/contact"
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${isScrolled 
                  ? 'bg-primary text-white hover:bg-primary/90' 
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'}
              `}
            >
              Get A Quote
            </Link>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-5 flex flex-col justify-between relative ${isMenuOpen ? 'transform' : ''}`}>
              <span 
                className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                } ${isScrolled ? 'bg-foreground' : 'bg-white'}`} 
              />
              <span 
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                } ${isScrolled ? 'bg-foreground' : 'bg-white'}`} 
              />
              <span 
                className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                } ${isScrolled ? 'bg-foreground' : 'bg-white'}`} 
              />
            </div>
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen py-4 shadow-lg' : 'max-h-0 overflow-hidden'
        }`}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`
                py-2 text-foreground text-base font-medium border-b border-gray-100
                ${location.pathname === link.path ? 'text-primary' : ''}
              `}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-white rounded-lg py-3 px-4 text-center font-medium mt-2"
          >
            Get A Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
