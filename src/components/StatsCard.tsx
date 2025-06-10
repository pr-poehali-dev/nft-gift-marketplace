interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive?: boolean;
}

const StatsCard = ({
  title,
  value,
  change,
  isPositive = true,
}: StatsCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        <span
          className={`text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}
        >
          {change}
        </span>
      </div>
    </div>
  );
};

export default StatsCard;
