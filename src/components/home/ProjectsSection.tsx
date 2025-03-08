
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      image: "public/lovable-uploads/f2ea0a0a-b581-4c79-8d13-fa750a10608b.png",
      category: "Commercial",
      title: "Retail Store, Kano State",
      description: "16 kWp PV + 8kW/15kWh battery system with average daily yield of 90 kWh.",
      link: "/projects/retail-store"
    },
    {
      image: "public/lovable-uploads/703f961f-3b5a-4ddf-87a8-2a2c189aa601.png",
      category: "Commercial",
      title: "Hotel, Tashkent, Uzbekistan",
      description: "20 kW Grid-tied PV Project + 5 kW/10 kWh Energy Storage System.",
      link: "/projects/hotel-tashkent"
    },
    {
      image: "public/lovable-uploads/e557b350-0f62-4ae4-9eeb-e456fa54cadb.png",
      category: "Commercial",
      title: "Sunbelt Group, Kano State",
      description: "221 kW Grid-tied PV Project with 360,000 kWh annual yield and ROI less than 2 years.",
      link: "/projects/sunbelt-group"
    }
  ];

  return (
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
          {projects.map((project, index) => (
            <AnimatedSection key={index} animation="scale-in" delay={(index + 1) * 100}>
              <ProjectCard 
                image={project.image}
                category={project.category}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </AnimatedSection>
          ))}
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
  );
};

export default ProjectsSection;
