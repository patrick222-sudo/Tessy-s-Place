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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-gray-600">
            Real feedback from happy customers.
          </p>
        </div>

        <div className="grid gap-8 mt-12 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h3 className="font-semibold text-lg">
                {testimonial.name}
              </h3>

              <p className="mt-4 text-gray-600">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;