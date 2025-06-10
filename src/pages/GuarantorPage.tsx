import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const GuarantorPage = () => {
  const steps = [
    {
      number: "01",
      title: "Заявка на сделку",
      description: "Продавец или покупатель оставляет заявку с деталями сделки",
      icon: "FileText",
    },
    {
      number: "02",
      title: "Проверка сторон",
      description: "Верифицируем личности участников и проверяем активы",
      icon: "Shield",
    },
    {
      number: "03",
      title: "Безопасная сделка",
      description: "Средства поступают гаранту, NFT передается покупателю",
      icon: "HandHeart",
    },
    {
      number: "04",
      title: "Завершение",
      description:
        "После подтверждения получения, средства передаются продавцу",
      icon: "CheckCircle",
    },
  ];

  const tariffs = [
    {
      title: "Стандарт",
      commission: "3%",
      features: [
        "Базовая проверка сторон",
        "Стандартная поддержка",
        "Сделки до 100 TON",
      ],
      popular: false,
    },
    {
      title: "Премиум",
      commission: "2%",
      features: [
        "Расширенная верификация",
        "Приоритетная поддержка",
        "Сделки до 500 TON",
        "Страхование сделки",
      ],
      popular: true,
    },
    {
      title: "VIP",
      commission: "1.5%",
      features: [
        "Персональный менеджер",
        "Мгновенное обслуживание",
        "Безлимитные сделки",
        "Полное страхование",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Icon name="Shield" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Услуги гаранта
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Безопасные сделки с NFT-подарками при посредничестве
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Подать заявку
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Узнать больше
            </button>
          </div>
        </div>
      </div>

      {/* Why Use Guarantor */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Почему стоит использовать гаранта?
          </h2>
          <p className="text-xl text-gray-600">
            Защита от мошенничества и гарантия выполнения сделки
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="ShieldCheck" size={32} className="text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">100% безопасность</h3>
            <p className="text-gray-600">
              Средства находятся под защитой до завершения сделки
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Проверенные участники
            </h3>
            <p className="text-gray-600">
              Верификация всех сторон сделки перед началом
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Headphones" size={32} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Поддержка 24/7</h3>
            <p className="text-gray-600">
              Круглосуточная помощь на всех этапах сделки
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Как проходит сделка
            </h2>
            <p className="text-xl text-gray-600">
              Простой и безопасный процесс в 4 этапа
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={step.icon as any}
                      size={24}
                      className="text-emerald-600"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tariffs */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Тарифы и комиссии
          </h2>
          <p className="text-xl text-gray-600">
            Выберите подходящий тариф для ваших сделок
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tariffs.map((tariff) => (
            <div
              key={tariff.title}
              className={`relative p-8 rounded-2xl border-2 ${
                tariff.popular
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              {tariff.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{tariff.title}</h3>
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  {tariff.commission}
                </div>
                <p className="text-gray-600">комиссия с сделки</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tariff.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-emerald-500 mr-3"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  tariff.popular
                    ? "bg-emerald-500 text-white hover:bg-emerald-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готовы к безопасной сделке?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Подайте заявку и наш гарант свяжется с вами в течение 15 минут
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
              Подать заявку на сделку
            </button>
            <button className="border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Связаться с поддержкой
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuarantorPage;
