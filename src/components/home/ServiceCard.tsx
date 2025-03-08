
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <div className="service-card">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <Link to={link} className="inline-flex items-center text-primary font-medium hover:underline">
        View Details <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
