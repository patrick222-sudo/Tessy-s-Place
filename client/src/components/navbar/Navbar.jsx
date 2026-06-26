import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  ShoppingCart,
  ChevronDown,
  User,
  X,
} from "lucide-react";

import logo from "../../assets/images/brand/tessys-place-logo.png";
import {
  NAVIGATION_LINKS,
  CATEGORY_LINKS,
} from "../../constants/navigation";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileCategories, setMobileCategories] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        <div className="flex items-center justify-between h-20">

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Tessy's Place"
              className="h-14 w-auto"
            />

            <div>
              <h1 className="font-bold text-xl text-red-600">
                Tessy's Place
              </h1>

              <p className="text-xs text-gray-500">
                The Queen of Jollof
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">

            <Link to="/">
              Home
            </Link>

            <Link to="/menu">
              Menu
            </Link>

            <div className="group relative">

              <button className="flex items-center gap-1">
                Categories
                <ChevronDown size={16} />
              </button>

              <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-xl min-w-[220px] overflow-hidden">

                {CATEGORY_LINKS.map((category) => (
                  <Link
                    key={category}
                    to="/menu"
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    {category}
                  </Link>
                ))}

              </div>
            </div>

            <Link to="/deals">
              Deals
            </Link>

          </div>

          <div className="flex items-center gap-4">

            <Link
              to="/cart"
              className="relative"
            >
              <ShoppingCart size={24} />

              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </Link>

            <Link
              to="/account"
              className="hidden md:flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-lg"
            >
              <User size={18} />
              Account
            </Link>

            <button
              onClick={() =>
                setMobileMenu(!mobileMenu)
              }
              className="lg:hidden"
            >
              {mobileMenu ? (
                <X size={26} />
              ) : (
                <Menu size={26} />
              )}
            </button>

          </div>
        </div>
      </div>

      {mobileMenu && (
        <div className="lg:hidden border-t bg-white">

          <div className="px-4 py-4 space-y-4">

            <Link
              to="/"
              className="block"
            >
              Home
            </Link>

            <Link
              to="/menu"
              className="block"
            >
              Menu
            </Link>

            <button
              onClick={() =>
                setMobileCategories(
                  !mobileCategories
                )
              }
              className="flex items-center justify-between w-full"
            >
              Categories
              <ChevronDown size={18} />
            </button>

            {mobileCategories && (
              <div className="pl-4 space-y-2">

                {categories.map((category) => (
                  <Link
                    key={category}
                    to="/menu"
                    className="block text-gray-600"
                  >
                    {category}
                  </Link>
                ))}

              </div>
            )}

            <Link
              to="/deals"
              className="block"
            >
              Deals
            </Link>

            <Link
              to="/account"
              className="block"
            >
              Account
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;