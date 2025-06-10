import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  gradient: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  link,
  gradient,
}: FeatureCardProps) => {
  return (
    <Link
      to={link}
      className="group block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div
        className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
      >
        <Icon name={icon as any} size={24} className="text-white" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">{description}</p>

      <div className="mt-4 flex items-center text-purple-600 font-medium group-hover:text-purple-700">
        <span>Узнать больше</span>
        <Icon
          name="ArrowRight"
          size={16}
          className="ml-2 group-hover:translate-x-1 transition-transform"
        />
      </div>
    </Link>
  );
};

export default FeatureCard;
