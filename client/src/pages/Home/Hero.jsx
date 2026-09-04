import { Link } from "react-router-dom";
import { ArrowRight, Utensils } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-20">
        <div className="w-full text-center">

          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
            <Utensils size={16} />
            Welcome to Tessy's Place
          </div>

          <h1 className="mt-7 text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Delicious meals,
            <span className="block text-red-600">
              unforgettable flavours.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Enjoy freshly prepared Nigerian meals made with care and served
            with the signature taste of the Queen of Jollof.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition shadow-lg shadow-red-600/20"
            >
              Order Now
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/menu"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold border border-gray-300 bg-white text-gray-700 hover:border-red-600 hover:text-red-600 transition"
            >
              View Menu
            </Link>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500">

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Freshly Prepared
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Premium Taste
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Reliable Delivery
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;