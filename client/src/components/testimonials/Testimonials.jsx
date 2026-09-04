import { Quote, Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Chioma A.",
      review:
        "The Jollof Rice was amazing. Delivery was fast and the food arrived fresh.",
    },
    {
      id: 2,
      name: "David O.",
      review:
        "Excellent service and delicious meals. Highly recommended.",
    },
    {
      id: 3,
      name: "Blessing K.",
      review:
        "Food By Litre was perfect for my family gathering.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-red-600 text-sm font-bold uppercase tracking-widest">
            <Star size={16} fill="currentColor" />
            Customer Experiences
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            A taste of the experiences shared by customers of Tessy's Place.
          </p>
        </div>

        <div className="grid gap-6 mt-14 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-gray-50 border border-gray-100 rounded-2xl p-7 sm:p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <Quote
                  size={18}
                  className="text-red-600"
                  fill="currentColor"
                />
              </div>

              <div className="flex gap-1 text-red-600">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                "{testimonial.review}"
              </p>

              <div className="mt-7 pt-5 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;