import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-500 via-indigo-600 to-purple-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex space-x-2">
            <span className="text-6xl">🎁</span>
            <span className="text-6xl">💎</span>
            <span className="text-6xl">⭐</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          NFT Подарки
          <br />
          <span className="text-purple-200">Telegram</span>
        </h1>

        <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
          Полный гид по покупке, продаже и торговле NFT-подарками в Telegram.
          Изучайте рынок, отслеживайте цены и совершайте выгодные сделки.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/buy"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center space-x-2"
          >
            <Icon name="ShoppingCart" size={20} />
            <span>Начать покупку</span>
          </Link>

          <Link
            to="/floor"
            className="bg-purple-600 bg-opacity-20 backdrop-blur-sm border border-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-30 transition-colors flex items-center justify-center space-x-2"
          >
            <Icon name="BarChart3" size={20} />
            <span>Посмотреть цены</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
