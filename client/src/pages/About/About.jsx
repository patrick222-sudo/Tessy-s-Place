import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Heart,
  Leaf,
  ShieldCheck,
  Truck,
  Utensils,
} from "lucide-react";

import MainLayout from "../../layouts/MainLayout";
import founderImage from "../../assets/images/brand/founder/tessy.jpeg";

function About() {
  const values = [
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description:
        "We believe great meals begin with quality ingredients carefully selected for every dish.",
    },
    {
      icon: Utensils,
      title: "Premium Taste",
      description:
        "Every meal is prepared with attention to flavour, consistency and the experience on your plate.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "We make it easy to enjoy your favourite meals wherever you are.",
    },
    {
      icon: ShieldCheck,
      title: "Hygienic Preparation",
      description:
        "Clean and careful preparation is an important part of the Tessy's Place experience.",
    },
    {
      icon: Heart,
      title: "Made With Care",
      description:
        "From preparation to presentation, every order is handled with care.",
    },
    {
      icon: Check,
      title: "Customer Satisfaction",
      description:
        "Our goal is to make every experience with Tessy's Place worth coming back for.",
    },
  ];

  return (
    <MainLayout>
      <main className="bg-white min-h-screen">

        <section className="relative overflow-hidden bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  ABOUT TESSY'S PLACE
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Good food.
                  <span className="block text-red-600">
                    Great moments.
                  </span>
                </h1>

                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  At Tessy's Place, food is more than just a meal. It is about
                  creating delicious experiences that bring people together,
                  one carefully prepared plate at a time.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Built around a passion for delicious Nigerian cuisine,
                  Tessy's Place is committed to quality, great taste and
                  customer satisfaction.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/menu"
                    className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-red-700 transition shadow-lg shadow-red-600/20"
                  >
                    Explore Our Menu
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold border border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 transition"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-100 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-100 rounded-full blur-2xl"></div>

                <div className="relative">
                  <div className="absolute inset-0 bg-red-600 rounded-[2rem] rotate-3"></div>

                  <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl">
                    <img
                      src={founderImage}
                      alt="Tessy, founder of Tessy's Place"
                      className="w-full h-[450px] sm:h-[520px] object-cover"
                    />
                  </div>

                  <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-5 py-4">
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                      Proudly known as
                    </p>

                    <p className="text-xl font-bold text-red-600 mt-1">
                      The Queen of Jollof
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-red-600 uppercase tracking-[0.2em] text-sm font-bold">
              Our Story
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              A place where flavour comes first.
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Tessy's Place was created with a simple goal: to serve meals
              people genuinely enjoy. From the first bite to the last,
              everything is about delivering satisfying food and an experience
              customers can appreciate.
            </p>

            <div className="mt-10 w-20 h-1 bg-red-600 rounded-full mx-auto"></div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              <div className="order-2 lg:order-1">
                <p className="text-red-600 uppercase tracking-widest text-sm font-bold">
                  Meet The Founder
                </p>

                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Meet Tessy,
                  <span className="block text-red-600">
                    The Queen of Jollof.
                  </span>
                </h2>

                <div className="mt-6 space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    Tessy's Place is built around Tessy's passion for creating
                    meals that people can enjoy and share with the people who
                    matter to them.
                  </p>

                  <p>
                    Her commitment to quality, consistency and customer
                    satisfaction forms an important part of what Tessy's Place
                    represents.
                  </p>

                  <p>
                    Whether you're ordering a personal meal, feeding family
                    and friends, or simply craving a great plate of Nigerian
                    food, Tessy's Place is here to make the experience
                    memorable.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Heart
                      size={22}
                      className="text-red-600"
                      fill="currentColor"
                    />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      Made with passion
                    </p>

                    <p className="text-sm text-gray-500">
                      Served with care
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative max-w-lg mx-auto">
                  <div className="absolute -inset-4 border-2 border-red-100 rounded-3xl"></div>

                  <img
                    src={founderImage}
                    alt="Tessy"
                    className="relative w-full h-[480px] object-cover rounded-3xl shadow-xl"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-2xl mx-auto">
              <p className="text-red-600 uppercase tracking-widest text-sm font-bold">
                What We Stand For
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
                Why choose Tessy's Place?
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                We focus on the things that make a great food experience:
                quality, flavour, care and service.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition">
                      <Icon
                        size={22}
                        className="text-red-600 group-hover:text-white transition"
                      />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-gray-900">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        <section className="relative overflow-hidden bg-red-600 text-white">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-black/10 rounded-full"></div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 lg:py-24 text-center">
            <p className="text-red-100 uppercase tracking-[0.2em] text-sm font-bold">
              Our Mission
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
              Making every plate worth remembering.
            </h2>

            <p className="mt-7 text-lg text-red-50 leading-relaxed max-w-3xl mx-auto">
              Our mission is to provide delicious meals while maintaining
              quality, hygiene and excellent customer service. We want every
              customer to leave satisfied and excited to order again.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 sm:px-10 lg:px-16 py-14 lg:py-16 text-center">

              <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600/20 rounded-full"></div>
              <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-red-600/10 rounded-full"></div>

              <div className="relative">
                <p className="text-red-400 uppercase tracking-widest text-sm font-bold">
                  Taste The Difference
                </p>

                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  Ready for a delicious experience?
                </h2>

                <p className="mt-5 text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Explore our menu and discover your next favourite meal from
                  Tessy's Place.
                </p>

                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 mt-8 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition shadow-lg"
                >
                  Order Now
                  <ArrowRight size={18} />
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>
    </MainLayout>
  );
}

export default About;