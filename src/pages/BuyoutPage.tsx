import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const BuyoutPage = () => {
  const services = [
    {
      title: "Мгновенный выкуп",
      description: "Получите деньги за подарки в течение 5 минут",
      price: "от 95% рыночной цены",
      features: ["Автоматическая оценка", "Мгновенные выплаты", "Без комиссий"],
      icon: "Zap",
      popular: true,
    },
    {
      title: "Премиум выкуп",
      description: "Максимальные цены для редких подарков",
      price: "до 105% рыночной цены",
      features: [
        "Индивидуальная оценка",
        "Экспертный анализ",
        "Бонусы за редкость",
      ],
      icon: "Crown",
      popular: false,
    },
    {
      title: "Оптовый выкуп",
      description: "Специальные условия для больших коллекций",
      price: "Индивидуальные условия",
      features: ["Пакетные скидки", "Персональный менеджер", "VIP поддержка"],
      icon: "Package",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Услуги выкупа подарков
          </h1>
          <p className="text-xl text-gray-600">
            Продайте свои NFT-подарки быстро и по лучшим ценам
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative bg-white p-8 rounded-xl shadow-lg ${service.popular ? "ring-2 ring-purple-500" : ""}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Популярно
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-purple-600">
                  {service.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  service.popular
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Начать выкуп
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Как работает выкуп
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Отправьте подарки
              </h3>
              <p className="text-gray-600 text-sm">
                Пришлите нам список ваших NFT-подарков
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Получите оценку
              </h3>
              <p className="text-gray-600 text-sm">
                Мы оценим ваши подарки по текущим рыночным ценам
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Подтвердите сделку
              </h3>
              <p className="text-gray-600 text-sm">
                Согласитесь с предложенной ценой
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Получите деньги
              </h3>
              <p className="text-gray-600 text-sm">
                Средства поступят на ваш кошелек
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyoutPage;
