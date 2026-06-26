function FoodByLitre() {
  const litreMeals = [
    {
      id: 1,
      title: "Jollof Rice",
      quantity: "5 Litres",
    },
    {
      id: 2,
      title: "Fried Rice",
      quantity: "5 Litres",
    },
    {
      id: 3,
      title: "Peppered Turkey",
      quantity: "3 Litres",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Food By Litre
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Perfect for parties, family gatherings and special occasions.
          </p>
        </div>

        <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {litreMeals.map((meal) => (
            <div
              key={meal.id}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold">
                {meal.title}
              </h3>

              <p className="mt-2 text-gray-500">
                Available from {meal.quantity}
              </p>

              <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg">
                Select Litres
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoodByLitre;