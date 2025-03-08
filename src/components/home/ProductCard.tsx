
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

interface ProductCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

const ProductCard = ({ icon, title, description, link }: ProductCardProps) => {
  return (
    <div className="product-card group">
      <div className="mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <Link to={link} className="inline-flex items-center text-primary font-medium group-hover:underline">
        Learn More <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
};

export default ProductCard;
