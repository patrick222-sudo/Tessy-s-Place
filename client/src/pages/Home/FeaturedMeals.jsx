import { useState } from "react";
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
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured Meals
          </h2>

          <p className="mt-4 text-gray-600">
            Taste meals prepared by the Queen of Jollof
          </p>
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

        <MealModal
          meal={selectedMeal}
          onClose={handleCloseMeal}
        />
      </div>
    </section>
  );
}

export default FeaturedMeals;