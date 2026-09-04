import { useState } from "react";
import {
  Check,
  Minus,
  Plus,
  ShoppingCart,
  X,
} from "lucide-react";
import { SITE_SETTINGS } from "../../constants/settings";
import { getDisplayPrice } from "../../utils/pricing";
import { useCart } from "../../context/CartContext";

function MealModal({ meal, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const { addToCart } = useCart();

  if (!meal) return null;

  const { originalPrice, currentPrice } = getDisplayPrice(
    meal.price,
    SITE_SETTINGS.promoEnabled,
    SITE_SETTINGS.promoMarkup
  );

  const totalPrice = currentPrice * quantity;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i += 1) {
      addToCart(meal);
    }

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  const handleClose = () => {
    setQuantity(1);
    setAdded(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition"
          aria-label="Close meal details"
        >
          <X size={20} />
        </button>

        <div className="h-64 sm:h-80 bg-gray-100 overflow-hidden">
          {meal.image ? (
            <img
              src={meal.image}
              alt={meal.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-400">
                Image coming soon
              </span>
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8">

          <p className="text-xs uppercase tracking-widest text-red-600 font-bold">
            {meal.category}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            {meal.name}
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {meal.description}
          </p>

          <div className="mt-6">

            {originalPrice && (
              <p className="text-gray-400 line-through text-sm">
                ₦{originalPrice.toLocaleString()}
              </p>
            )}

            <p className="text-red-600 text-3xl font-bold">
              ₦{currentPrice.toLocaleString()}
            </p>

          </div>

          <div className="mt-7 flex items-center justify-between gap-4">

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Quantity
              </p>

              <div className="flex items-center gap-3 mt-2">

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((value) =>
                      Math.max(1, value - 1)
                    )
                  }
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-red-500 hover:text-red-600 transition active:scale-90"
                  aria-label="Decrease quantity"
                >
                  <Minus size={17} />
                </button>

                <span className="w-8 text-center font-bold text-lg">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((value) => value + 1)
                  }
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-red-500 hover:text-red-600 transition active:scale-90"
                  aria-label="Increase quantity"
                >
                  <Plus size={17} />
                </button>

              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-500">
                Total
              </p>

              <p className="text-xl font-bold text-gray-900">
                ₦{totalPrice.toLocaleString()}
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className={`mt-8 w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-white transition-all duration-300 active:scale-[0.98] ${
              added
                ? "bg-green-600"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {added ? (
              <>
                <Check size={20} />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingCart size={20} />
                Add to Cart
              </>
            )}
          </button>

        </div>
      </div>
    </div>
  );
}

export default MealModal;