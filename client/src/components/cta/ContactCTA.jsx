import { ArrowRight, Clock, ShoppingBag, Truck } from "lucide-react";
import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gray-900 text-white rounded-3xl px-6 py-14 sm:p-12 lg:p-16">

          <div className="absolute -right-20 -bottom-24 w-72 h-72 rounded-full bg-red-600/20 blur-3xl"></div>
          <div className="absolute right-20 top-0 w-40 h-40 rounded-full bg-red-500/10 blur-2xl"></div>

          <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

            <div>
              <div className="inline-flex items-center gap-2 text-red-400 text-sm font-bold uppercase tracking-widest">
                <ShoppingBag size={16} />
                Fresh Food Awaits
              </div>

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to enjoy a delicious meal?
              </h2>

              <p className="mt-5 text-gray-300 text-lg leading-relaxed max-w-2xl">
                Explore our menu, choose your favourite meals and place your
                order whenever you're ready.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-7 py-4 rounded-xl font-semibold hover:bg-red-700 hover:scale-[1.02] transition"
                >
                  Order Now
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold border border-gray-600 text-white hover:bg-white hover:text-gray-900 transition"
                >
                  Our Story
                </Link>
              </div>
            </div>

            <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-600/20 flex items-center justify-center">
                    <Clock size={20} className="text-red-400" />
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Order Anytime
                    </p>

                    <p className="text-sm text-gray-400">
                      Monday to Saturday
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-600/20 flex items-center justify-center">
                    <Truck size={20} className="text-red-400" />
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Lagos Delivery
                    </p>

                    <p className="text-sm text-gray-400">
                      Packages sent out from 12 PM
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;