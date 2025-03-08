
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface BenefitCardProps {
  icon: ReactNode;
  titleKey: string;
  descriptionKey: string;
}

const BenefitCard = ({ icon, titleKey, descriptionKey }: BenefitCardProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
      {icon}
      <h3 className="text-xl font-semibold mb-3">{t(titleKey)}</h3>
      <p className="text-gray-300">
        {t(descriptionKey)}
      </p>
    </div>
  );
};

export default BenefitCard;
