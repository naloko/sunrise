
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  image: string;
  categoryKey: string;
  titleKey: string;
  descriptionKey: string;
  link: string;
  ctaKey?: string;
}

const ProjectCard = ({ image, categoryKey, titleKey, descriptionKey, link, ctaKey = 'common.viewProject' }: ProjectCardProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="overflow-hidden rounded-xl shadow-md">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={t(titleKey)} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="mb-3">
          <span className="badge">{t(categoryKey)}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{t(titleKey)}</h3>
        <p className="text-gray-600 mb-4">{t(descriptionKey)}</p>
        <Link to={link} className="inline-flex items-center text-primary font-medium hover:underline">
          {t(ctaKey)} <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
