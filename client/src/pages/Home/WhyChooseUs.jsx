import {
  Truck,
  UtensilsCrossed,
  HeartHandshake,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      title: "Fresh Meals",
      description:
        "Prepared daily with quality ingredients.",
      icon: UtensilsCrossed,
    },
    {
      title: "Fast Delivery",
      description:
        "Reliable delivery across Lagos.",
      icon: Truck,
    },
    {
      title: "Community Impact",
      description:
        "Support the Share To The Needy initiative.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Why Choose Tessy's Place
          </h2>

          <p className="mt-4 text-gray-600">
            Delicious food, reliable service and real impact.
          </p>
        </div>

        <div className="grid gap-8 mt-12 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-sm text-center"
              >
                <div className="flex justify-center">
                  <Icon size={40} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600">
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