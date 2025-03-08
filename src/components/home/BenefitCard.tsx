
import { ReactNode } from 'react';

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
      {icon}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
