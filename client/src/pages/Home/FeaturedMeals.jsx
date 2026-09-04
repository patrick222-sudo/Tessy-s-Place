import { useState } from "react";
import { ArrowRight, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

import MealCard from "../../components/meals/MealCard";
import MealModal from "../../components/meals/MealModal";
import { meals } from "../../constants/data/meals";
import { useCart } from "../../context/CartContext";

function FeaturedMeals() {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const { addToCart } = useCart();

  const featuredMeals = meals.slice(0, 3);

  const handleOpenMeal = (meal) => {
    setSelectedMeal(meal);
  };

  const handleCloseMeal = () => {
    setSelectedMeal(null);
  };

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

          <div>
            <div className="inline-flex items-center gap-2 text-red-600 text-sm font-bold uppercase tracking-widest">
              <Utensils size={17} />
              From Our Kitchen
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Customer Favourites
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl leading-relaxed">
              Discover some of the delicious meals prepared by the Queen of
              Jollof and find something you'll love.
            </p>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition"
          >
            View Full Menu
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {featuredMeals.map((meal) => (
            <MealCard
              key={meal.id}
              meal={meal}
              onOpenMeal={handleOpenMeal}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Explore More Meals
            <ArrowRight size={18} />
          </Link>
        </div>

        <MealModal
          meal={selectedMeal}
          onClose={handleCloseMeal}
        />

      </div>
    </section>
  );
}

export default FeaturedMeals;