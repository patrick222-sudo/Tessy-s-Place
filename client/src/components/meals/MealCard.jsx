import { useState } from "react";
import { Check, Plus } from "lucide-react";
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
    <article
      onClick={() => onOpenMeal(meal)}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-60 bg-gray-100 overflow-hidden">

        {meal.image ? (
          <img
            src={meal.image}
            alt={meal.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 text-sm">
              Image coming soon
            </span>
          </div>
        )}

        {SITE_SETTINGS.promoEnabled && originalPrice && (
          <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
            Special Price
          </span>
        )}

      </div>

      <div className="p-5 relative">

        <div className="pr-12">

          <p className="text-xs uppercase tracking-widest text-red-600 font-bold">
            {meal.category}
          </p>

          <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-red-600 transition">
            {meal.name}
          </h3>

          <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
            {meal.description}
          </p>

          <div className="mt-4">

            {originalPrice && (
              <p className="text-sm text-gray-400 line-through">
                ₦{originalPrice.toLocaleString()}
              </p>
            )}

            <p className="text-red-600 font-bold text-xl">
              ₦{currentPrice.toLocaleString()}
            </p>

          </div>

        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          aria-label={`Add ${meal.name} to cart`}
          className={`absolute bottom-5 right-5 w-11 h-11 rounded-full text-white flex items-center justify-center shadow-md transition-all duration-300 active:scale-90 ${
            added
              ? "bg-green-600 scale-110"
              : "bg-red-600 hover:bg-red-700 hover:scale-105"
          }`}
        >
          {added ? (
            <Check size={19} strokeWidth={3} />
          ) : (
            <Plus size={20} strokeWidth={2.5} />
          )}
        </button>

      </div>
    </article>
  );
}

export default MealCard;