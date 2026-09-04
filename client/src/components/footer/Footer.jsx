import {
  ArrowUp,
  Clock,
  Mail,
  MapPin,
  Phone,
  Truck,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappLink = "https://wa.me/2348165255543";

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <Link
              to="/"
              className="inline-block text-2xl font-bold"
            >
              Tessy's Place
            </Link>

            <p className="mt-2 text-red-500 font-semibold">
              The Queen of Jollof
            </p>

            <p className="mt-5 text-gray-400 leading-relaxed">
              Delicious meals prepared with care, flavour and a passion for
              creating memorable food experiences.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-red-600 px-5 py-3 rounded-xl font-semibold hover:bg-red-700 transition"
            >
              <FaWhatsapp size={17} />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h3 className="font-bold text-lg">
              Explore
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                to="/"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                Our Story
              </Link>

              <Link
                to="/menu"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                Menu
              </Link>

              <Link
                to="/deals"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                Deals
              </Link>

              <Link
                to="/cart"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                Cart
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg">
              Customer
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                to="/account"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                My Account
              </Link>

              <Link
                to="/cart"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                My Cart
              </Link>

              <Link
                to="/menu"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                Order Food
              </Link>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg">
              Contact & Delivery
            </h3>

            <div className="mt-5 space-y-5">

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 text-red-500 shrink-0"
                />

                <div>
                  <p className="text-gray-300 font-medium">
                    Location
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Yaba, Shomolu, Kolex Bustop,
                    <br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-1 text-red-500 shrink-0"
                />

                <div>
                  <p className="text-gray-300 font-medium">
                    Phone
                  </p>

                  <a
                    href="tel:08165255543"
                    className="text-gray-500 text-sm mt-1 block hover:text-red-500 transition"
                  >
                    08165255543
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-1 text-red-500 shrink-0"
                />

                <div>
                  <p className="text-gray-300 font-medium">
                    Email
                  </p>

                  <a
                    href="mailto:tessydan2000@gmail.com"
                    className="text-gray-500 text-sm mt-1 block hover:text-red-500 transition"
                  >
                    tessydan2000@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock
                  size={18}
                  className="mt-1 text-red-500 shrink-0"
                />

                <div>
                  <p className="text-gray-300 font-medium">
                    Ordering
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Monday – Saturday
                  </p>

                  <p className="text-gray-500 text-sm">
                    Orders can be placed anytime
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Truck
                  size={18}
                  className="mt-1 text-red-500 shrink-0"
                />

                <div>
                  <p className="text-gray-300 font-medium">
                    Delivery
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Lagos only
                  </p>

                  <p className="text-gray-500 text-sm">
                    Packages sent out from 12 PM daily
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-14 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div className="flex items-center gap-3">

              <a
                href="https://www.facebook.com/profile.php?id=61550918142455"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-500 hover:bg-red-600 transition"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="https://www.instagram.com/tessys_food"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-500 hover:bg-red-600 transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.tiktok.com/@iamtessydan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-500 hover:bg-red-600 transition"
              >
                <FaTiktok size={17} />
              </a>

              <a
                href="https://youtube.com/@tessyplace"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-500 hover:bg-red-600 transition"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-500 hover:bg-red-600 transition"
              >
                <FaWhatsapp size={18} />
              </a>

            </div>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
            >
              Back to top
              <ArrowUp size={16} />
            </button>

          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} Tessy's Place. All rights reserved.
            </p>

            <p className="text-sm text-gray-500 text-center">
              Designed & Developed by{" "}
              <span className="text-gray-300 font-medium">
                Patricode
              </span>
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;