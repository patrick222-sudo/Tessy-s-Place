import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import MainLayout from "../../layouts/MainLayout";
import { useCart } from "../../context/CartContext";
import { SITE_SETTINGS } from "../../constants/settings";
import { getDisplayPrice } from "../../utils/pricing";

function Cart() {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <MainLayout>
      <main className="min-h-screen bg-gray-50 py-10 lg:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3">
            <ShoppingBag
              size={28}
              className="text-red-600"
            />

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Your Cart
              </h1>

              <p className="text-gray-500 mt-1">
                Review your meals before checkout.
              </p>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="mt-10 bg-white rounded-3xl border border-gray-100 p-10 sm:p-16 text-center shadow-sm">

              <div className="w-20 h-20 mx-auto rounded-full bg-red-50 flex items-center justify-center">
                <ShoppingBag
                  size={34}
                  className="text-red-600"
                />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-gray-900">
                Your cart is empty
              </h2>

              <p className="mt-2 text-gray-500 max-w-md mx-auto">
                You haven't added any meals yet. Explore our menu and find
                something delicious.
              </p>

              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 mt-7 bg-red-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-red-700 transition"
              >
                Explore Menu
              </Link>

            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_380px] gap-8 mt-10">

              <div className="space-y-4">

                <div className="flex items-center justify-between gap-4">
                  <p className="text-gray-600">
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}{" "}
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    ) === 1
                      ? "item"
                      : "items"}
                  </p>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-sm text-red-600 font-semibold hover:text-red-700 transition"
                  >
                    Clear Cart
                  </button>
                </div>

                {cartItems.map((item) => {
                  const { currentPrice } = getDisplayPrice(
                    item.price,
                    SITE_SETTINGS.promoEnabled,
                    SITE_SETTINGS.promoMarkup
                  );

                  const itemTotal =
                    currentPrice * item.quantity;

                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm"
                    >
                      <div className="flex gap-4">

                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-xs text-gray-400 text-center px-2">
                              Image coming soon
                            </div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">

                          <div className="flex items-start justify-between gap-3">

                            <div>
                              <p className="text-xs uppercase tracking-widest text-red-600 font-bold">
                                {item.category}
                              </p>

                              <h2 className="mt-1 text-lg sm:text-xl font-bold text-gray-900">
                                {item.name}
                              </h2>
                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                removeFromCart(item.id)
                              }
                              className="text-gray-400 hover:text-red-600 transition"
                              aria-label={`Remove ${item.name} from cart`}
                            >
                              <Trash2 size={19} />
                            </button>

                          </div>

                          <p className="mt-2 text-red-600 font-bold">
                            ₦{currentPrice.toLocaleString()}
                          </p>

                          <div className="flex items-center justify-between gap-4 mt-4">

                            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">

                              <button
                                type="button"
                                onClick={() =>
                                  decreaseQuantity(item.id)
                                }
                                className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition active:scale-90"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={16} />
                              </button>

                              <span className="w-9 text-center font-semibold">
                                {item.quantity}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  increaseQuantity(item.id)
                                }
                                className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition active:scale-90"
                                aria-label="Increase quantity"
                              >
                                <Plus size={16} />
                              </button>

                            </div>

                            <p className="font-bold text-gray-900">
                              ₦{itemTotal.toLocaleString()}
                            </p>

                          </div>

                        </div>

                      </div>
                    </div>
                  );
                })}

                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition mt-2"
                >
                  <ArrowLeft size={18} />
                  Continue Shopping
                </Link>

              </div>

              <div className="lg:sticky lg:top-28 h-fit">

                <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-7 shadow-sm">

                  <h2 className="text-xl font-bold text-gray-900">
                    Order Summary
                  </h2>

                  <div className="mt-6 space-y-4">

                    <div className="flex justify-between gap-4 text-gray-600">
                      <span>Subtotal</span>

                      <span>
                        ₦{cartTotal.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4 text-gray-600">
                      <span>Delivery</span>

                      <span className="text-sm">
                        Calculated at checkout
                      </span>
                    </div>

                    <div className="border-t border-gray-100 pt-4 flex justify-between gap-4">
                      <span className="text-lg font-bold text-gray-900">
                        Total
                      </span>

                      <span className="text-xl font-bold text-red-600">
                        ₦{cartTotal.toLocaleString()}
                      </span>
                    </div>

                  </div>

                  <Link
                    to="/checkout"
                    className="mt-7 w-full flex items-center justify-center gap-2 bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition shadow-lg shadow-red-600/20"
                  >
                    Proceed to Checkout
                  </Link>

                  <p className="mt-4 text-xs text-gray-500 text-center leading-relaxed">
                    You will select your delivery date and provide your
                    delivery details at checkout.
                  </p>

                </div>

              </div>

            </div>
          )}

        </div>
      </main>
    </MainLayout>
  );
}

export default Cart;