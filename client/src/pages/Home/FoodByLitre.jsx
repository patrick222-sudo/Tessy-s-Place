import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChefHat,
  Users,
} from "lucide-react";

function FoodByLitre() {
  const litreOptions = ["2L", "3L", "5L", "10L", "Custom"];

  const litreMeals = [
    {
      id: 1,
      title: "Jollof Rice",
      description:
        "Smoky, flavourful jollof rice prepared for sharing.",
    },
    {
      id: 2,
      title: "Fried Rice",
      description:
        "Rich and delicious fried rice perfect for gatherings.",
    },
    {
      id: 3,
      title: "Peppered Turkey",
      description:
        "Tender, well-seasoned turkey with a delicious peppered finish.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold">
              <ChefHat size={17} />
              FOOD BY LITRE
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Feeding more than one?
              <span className="block text-red-600">
                We've got you covered.
              </span>
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Order your favourite meals in larger quantities. Perfect for
              family gatherings, parties, celebrations and special occasions.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
                  <Check size={18} className="text-red-600" />
                </div>

                <p className="text-gray-700">
                  Available from 2 litres
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
                  <Check size={18} className="text-red-600" />
                </div>

                <p className="text-gray-700">
                  Choose from multiple quantities
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
                  <Users size={18} className="text-red-600" />
                </div>

                <p className="text-gray-700">
                  Perfect for groups and events
                </p>
              </div>

            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 mt-8 bg-red-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-red-700 transition shadow-lg shadow-red-600/20"
            >
              Order Food By Litre
              <ArrowRight size={18} />
            </Link>
          </div>


          <div className="grid sm:grid-cols-2 gap-5">

            {litreMeals.map((meal, index) => (
              <div
                key={meal.id}
                className={`bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <span className="text-xs uppercase tracking-widest text-red-600 font-bold">
                      Food By Litre
                    </span>

                    <h3 className="mt-3 text-2xl font-bold text-gray-900">
                      {meal.title}
                    </h3>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <ChefHat
                      size={21}
                      className="text-red-600"
                    />
                  </div>

                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {meal.description}
                </p>

                <div className="mt-6">

                  <p className="text-sm text-gray-500 font-medium">
                    Available quantities
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">

                    {litreOptions.map((option) => (
                      <span
                        key={option}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                      >
                        {option}
                      </span>
                    ))}

                  </div>

                </div>

                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 mt-7 text-red-600 font-semibold hover:text-red-700 transition"
                >
                  Select quantity
                  <ArrowRight size={17} />
                </Link>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default FoodByLitre;