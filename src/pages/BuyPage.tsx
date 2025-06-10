import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const BuyPage = () => {
  const steps = [
    {
      title: "Купите звезды",
      description:
        "Перейдите в настройки Telegram → Telegram Stars и купите звезды",
      icon: "Star",
    },
    {
      title: "Найдите получателя",
      description: "Выберите контакт, которому хотите отправить подарок",
      icon: "Users",
    },
    {
      title: "Выберите подарок",
      description: "Откройте профиль получателя и нажмите на иконку подарка",
      icon: "Gift",
    },
    {
      title: "Оплатите звездами",
      description: "Подтвердите покупку, звезды спишутся автоматически",
      icon: "CreditCard",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Как купить NFT-подарки
          </h1>
          <p className="text-xl text-gray-600">
            Пошаговая инструкция по покупке звезд и отправке подарков
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Icon
                    name={step.icon as any}
                    size={20}
                    className="text-purple-600"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-xl">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name="Lightbulb" size={24} />
            <h3 className="text-xl font-semibold">Полезные советы</h3>
          </div>
          <ul className="space-y-2 text-purple-100">
            <li>
              • Звезды можно купить через Apple Pay, Google Pay или банковскую
              карту
            </li>
            <li>• Минимальная покупка — 100 звезд за 1$</li>
            <li>
              • Подарки можно отправлять только контактам из вашего списка
            </li>
            <li>• После отправки подарок сразу появляется у получателя</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
