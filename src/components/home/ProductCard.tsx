
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  icon: ReactNode;
  titleKey: string;
  descriptionKey: string;
  link: string;
  ctaKey?: string;
}

const ProductCard = ({ icon, titleKey, descriptionKey, link, ctaKey = 'common.learnMore' }: ProductCardProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="product-card group">
      <div className="mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{t(titleKey)}</h3>
      <p className="text-gray-600 mb-4">
        {t(descriptionKey)}
      </p>
      <Link to={link} className="inline-flex items-center text-primary font-medium group-hover:underline">
        {t(ctaKey)} <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
};

export default ProductCard;
