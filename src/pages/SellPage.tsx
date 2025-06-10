import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const SellPage = () => {
  const platforms = [
    {
      name: "Fragment",
      description: "Официальная площадка Telegram для торговли",
      fees: "5% + 2 TON",
      features: ["Безопасные сделки", "Поддержка TON", "Верификация"],
      icon: "Shield",
    },
    {
      name: "GetGems",
      description: "NFT маркетплейс с поддержкой Telegram подарков",
      fees: "2.5%",
      features: ["Низкие комиссии", "Быстрые сделки", "Мобильное приложение"],
      icon: "Gem",
    },
    {
      name: "P2P торговля",
      description: "Прямые сделки между пользователями",
      fees: "0%",
      features: ["Нет комиссий", "Полный контроль", "Личные переговоры"],
      icon: "Users",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Продажа NFT-подарков
          </h1>
          <p className="text-xl text-gray-600">
            Все способы продать ваши Telegram подарки с максимальной выгодой
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Icon
                    name={platform.icon as any}
                    size={20}
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {platform.name}
                </h3>
              </div>

              <p className="text-gray-600 mb-4">{platform.description}</p>

              <div className="bg-purple-50 p-3 rounded-lg mb-4">
                <span className="text-sm font-medium text-purple-700">
                  Комиссия: {platform.fees}
                </span>
              </div>

              <ul className="space-y-2">
                {platform.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-sm text-gray-600"
                  >
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
            <Icon name="TrendingUp" size={24} className="text-purple-600" />
            <span>Стратегии продажи</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Быстрая продажа
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ставьте цену на 5-10% ниже рыночной</li>
                <li>• Используйте Fragment для скорости</li>
                <li>• Продавайте популярные подарки в первую очередь</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Максимальная прибыль
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Держите редкие подарки для роста цены</li>
                <li>• Следите за трендами и событиями</li>
                <li>• Используйте P2P для больших сумм</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellPage;
