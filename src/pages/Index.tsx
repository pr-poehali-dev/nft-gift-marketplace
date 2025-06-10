import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import StatsCard from "@/components/StatsCard";

const Index = () => {
  const features = [
    {
      title: "Покупка подарков",
      description:
        "Пошаговые инструкции по покупке звезд и отправке NFT-подарков в Telegram",
      icon: "ShoppingCart",
      link: "/buy",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      title: "Продажа подарков",
      description:
        "Все способы продажи ваших подарков: маркетплейсы, P2P и торговые стратегии",
      icon: "TrendingUp",
      link: "/sell",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      title: "Флор цены",
      description:
        "Актуальные цены, статистика и тренды по всем NFT-подаркам Telegram",
      icon: "BarChart3",
      link: "/floor",
      gradient: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
    {
      title: "Услуги выкупа",
      description:
        "Мгновенный выкуп ваших подарков по лучшим ценам с гарантией безопасности",
      icon: "Handshake",
      link: "/buyout",
      gradient: "bg-gradient-to-r from-orange-500 to-red-500",
    },
    {
      title: "Услуги гаранта",
      description:
        "Безопасные сделки через посредника с полной защитой от мошенничества",
      icon: "Shield",
      link: "/guarantor",
      gradient: "bg-gradient-to-r from-emerald-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Все для торговли NFT-подарками
          </h2>
          <p className="text-xl text-gray-600">
            Изучайте, покупайте, продавайте и зарабатывайте на Telegram подарках
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <StatsCard
            title="Активных трейдеров"
            value="2,847"
            change="+12.5%"
            isPositive={true}
          />
          <StatsCard
            title="Общий объем торгов"
            value="156.8K TON"
            change="+8.2%"
            isPositive={true}
          />
          <StatsCard
            title="Средняя цена подарка"
            value="12.4 TON"
            change="+15.7%"
            isPositive={true}
          />
          <StatsCard
            title="24ч сделки"
            value="423"
            change="-3.1%"
            isPositive={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
