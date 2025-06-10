import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();

  const navigation = [
    { name: "Главная", path: "/", icon: "Home" as const },
    { name: "Покупка", path: "/buy", icon: "ShoppingCart" as const },
    { name: "Продажа", path: "/sell", icon: "TrendingUp" as const },
    { name: "Флор", path: "/floor", icon: "BarChart3" as const },
    { name: "Выкуп", path: "/buyout", icon: "Handshake" as const },
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NFT</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Telegram Gifts</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
