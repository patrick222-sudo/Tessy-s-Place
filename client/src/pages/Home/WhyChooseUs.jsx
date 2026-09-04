import {
  HeartHandshake,
  ShieldCheck,
  Truck,
  UtensilsCrossed,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      title: "Freshly Prepared",
      description:
        "Enjoy meals prepared with quality ingredients and attention to flavour.",
      icon: UtensilsCrossed,
    },
    {
      title: "Reliable Delivery",
      description:
        "Get your order delivered conveniently so you can enjoy your meal wherever you are.",
      icon: Truck,
    },
    {
      title: "Quality & Care",
      description:
        "Every order is handled with care from preparation through delivery.",
      icon: ShieldCheck,
    },
    {
      title: "Made With Heart",
      description:
        "We believe good food should be prepared with passion and served with care.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-red-600 text-sm font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            Why Tessy's Place
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Good food is only the beginning.
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            From the kitchen to your doorstep, we focus on creating a food
            experience you can enjoy and trust.
          </p>
        </div>

        <div className="grid gap-6 mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group bg-white border border-gray-100 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                  <Icon
                    size={25}
                    className="text-red-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;