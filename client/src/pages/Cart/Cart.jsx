import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    cartTotal,
  } = useCart();

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-3xl font-bold">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="mt-10">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="mt-8 space-y-4">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-xl flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-bold">
                    ₦
                    {(
                      item.price *
                      item.quantity
                    ).toLocaleString()}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-10 bg-white p-6 rounded-xl">

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>

                <span>
                  ₦{cartTotal.toLocaleString()}
                </span>
              </div>

              <Link
                to="/checkout"
                className="block w-full mt-6 bg-red-600 text-white py-4 rounded-xl text-center">
                Proceed to Checkout
              </Link>

            </div>
          </>
        )}

      </div>
    </main>
  );
}

export default Cart;