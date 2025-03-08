
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ image, category, title, description, link }: ProjectCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-md">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="mb-3">
          <span className="badge">{category}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={link} className="inline-flex items-center text-primary font-medium hover:underline">
          View Project <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
