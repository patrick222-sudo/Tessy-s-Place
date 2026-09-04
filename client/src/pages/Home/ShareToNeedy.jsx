import { ArrowRight, Gift, Heart, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

function ShareToNeedy() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[2rem] bg-red-600">

          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-black/10 rounded-full"></div>

          <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-16">

            <div className="text-white">

              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-bold">
                <Heart size={16} fill="currentColor" />
                SHARE TO THE NEEDY
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Share a meal.
                <span className="block text-red-100">
                  Spread some love.
                </span>
              </h2>

              <p className="mt-6 text-red-50 text-lg leading-relaxed max-w-2xl">
                Food is better when it can be shared. Through Share To The
                Needy, you can choose to contribute a meal and make someone's
                day a little brighter.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg"
                >
                  Donate a Meal
                  <Gift size={18} />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

            <div className="relative">

              <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-3xl p-7 sm:p-8">

                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
                  <Utensils
                    size={26}
                    className="text-red-600"
                  />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white">
                  A simple act of kindness
                </h3>

                <p className="mt-4 text-red-50 leading-relaxed">
                  Whether it's one meal or more, your contribution can be a
                  simple way to show care and generosity.
                </p>

                <div className="mt-7 pt-6 border-t border-white/20">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Heart
                        size={18}
                        className="text-white"
                        fill="currentColor"
                      />
                    </div>

                    <div>
                      <p className="text-white font-semibold">
                        Give with heart
                      </p>

                      <p className="text-red-100 text-sm">
                        Share what you can
                      </p>
                    </div>

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

export default ShareToNeedy;