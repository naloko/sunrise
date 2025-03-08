
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../AnimatedSection';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      image: "public/lovable-uploads/f2ea0a0a-b581-4c79-8d13-fa750a10608b.png",
      categoryKey: "projects.categories.commercial",
      titleKey: "projects.retail.title",
      descriptionKey: "projects.retail.description",
      link: "/projects/retail-store"
    },
    {
      image: "public/lovable-uploads/703f961f-3b5a-4ddf-87a8-2a2c189aa601.png",
      categoryKey: "projects.categories.commercial",
      titleKey: "projects.hotel.title",
      descriptionKey: "projects.hotel.description",
      link: "/projects/hotel-tashkent"
    },
    {
      image: "public/lovable-uploads/e557b350-0f62-4ae4-9eeb-e456fa54cadb.png",
      categoryKey: "projects.categories.commercial",
      titleKey: "projects.sunbelt.title",
      descriptionKey: "projects.sunbelt.description",
      link: "/projects/sunbelt-group"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="section-subheading">{t('sections.projects.subtitle')}</span>
            <h2 className="section-heading">{t('sections.projects.title')}</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-4">
              {t('sections.projects.description')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} animation="scale-in" delay={(index + 1) * 100}>
              <ProjectCard 
                image={project.image}
                categoryKey={project.categoryKey}
                titleKey={project.titleKey}
                descriptionKey={project.descriptionKey}
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
            {t('sections.projects.viewAll')} <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
