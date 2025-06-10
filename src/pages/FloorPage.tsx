import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const FloorPage = () => {
  const gifts = [
    {
      name: "Blue Star",
      emoji: "💙",
      rarity: "Common",
      price: "2.50 TON",
      change: "+5.2%",
      volume: "1,250",
      owners: "892",
    },
    {
      name: "Red Heart",
      emoji: "❤️",
      rarity: "Uncommon",
      price: "4.80 TON",
      change: "+12.1%",
      volume: "856",
      owners: "634",
    },
    {
      name: "Golden Star",
      emoji: "⭐",
      rarity: "Rare",
      price: "15.20 TON",
      change: "-2.3%",
      volume: "432",
      owners: "289",
    },
    {
      name: "Diamond",
      emoji: "💎",
      rarity: "Epic",
      price: "45.60 TON",
      change: "+28.5%",
      volume: "156",
      owners: "98",
    },
    {
      name: "Crown",
      emoji: "👑",
      rarity: "Legendary",
      price: "128.90 TON",
      change: "+45.8%",
      volume: "67",
      owners: "34",
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-gray-100 text-gray-700";
      case "Uncommon":
        return "bg-green-100 text-green-700";
      case "Rare":
        return "bg-blue-100 text-blue-700";
      case "Epic":
        return "bg-purple-100 text-purple-700";
      case "Legendary":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Флор цены подарков
          </h1>
          <p className="text-xl text-gray-600">
            Актуальные цены и статистика по всем NFT-подаркам Telegram
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="TrendingUp" size={16} className="text-green-500" />
              <span className="text-sm font-medium text-gray-500">
                Общий объем
              </span>
            </div>
            <span className="text-2xl font-bold text-gray-900">2,847 TON</span>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Users" size={16} className="text-blue-500" />
              <span className="text-sm font-medium text-gray-500">
                Владельцы
              </span>
            </div>
            <span className="text-2xl font-bold text-gray-900">1,947</span>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Activity" size={16} className="text-purple-500" />
              <span className="text-sm font-medium text-gray-500">
                24ч сделки
              </span>
            </div>
            <span className="text-2xl font-bold text-gray-900">156</span>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Gem" size={16} className="text-yellow-500" />
              <span className="text-sm font-medium text-gray-500">
                Средняя цена
              </span>
            </div>
            <span className="text-2xl font-bold text-gray-900">12.8 TON</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Подарок
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Редкость
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Флор цена
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    24ч изменение
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Объем
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Владельцы
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {gifts.map((gift, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{gift.emoji}</span>
                        <span className="font-medium text-gray-900">
                          {gift.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getRarityColor(gift.rarity)}`}
                      >
                        {gift.rarity}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">
                      {gift.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`font-medium ${gift.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                      >
                        {gift.change}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {gift.volume}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {gift.owners}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPage;
