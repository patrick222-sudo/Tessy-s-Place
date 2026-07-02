import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { SITE_SETTINGS } from "../../constants/settings";
import { getDisplayPrice } from "../../utils/pricing";

function MealCard({ meal, onOpenMeal, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const { originalPrice, currentPrice } = getDisplayPrice(
    meal.price,
    SITE_SETTINGS.promoEnabled,
    SITE_SETTINGS.promoMarkup
  );

  const handleAddToCart = (e) => {
    e.stopPropagation();

    onAddToCart(meal);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 800);
  };

  return (
    <div
      onClick={() => onOpenMeal(meal)}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div className="h-60 bg-gray-200">
        {meal.image && (
          <img
            src={meal.image}
            alt={meal.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-4 relative">
        <h3 className="font-semibold text-lg">
          {meal.name}
        </h3>

        {originalPrice && (
          <p className="text-gray-400 line-through mt-2">
            ₦{originalPrice.toLocaleString()}
          </p>
        )}

        <p className="text-red-600 font-bold text-lg">
          ₦{currentPrice.toLocaleString()}
        </p>

        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 right-4 w-10 h-10 rounded-full text-white flex items-center justify-center transition-all duration-300 active:scale-90 ${
            added
              ? "bg-green-600 scale-110"
              : "bg-red-600 hover:bg-red-700 hover:scale-105"
          }`}
        >
          {added ? <Check size={18} /> : <Plus size={18} />}
        </button>
      </div>
    </div>
  );
}

export default MealCard;