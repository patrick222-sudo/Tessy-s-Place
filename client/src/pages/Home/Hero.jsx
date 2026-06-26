function Hero() {
  return (
    <section className="bg-gray-50 min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <span className="text-red-600 font-semibold uppercase tracking-widest">
          Welcome To Tessy's Place
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold text-gray-900">
          Freshly Prepared Meals
          <span className="block text-red-600">
            By The Queen of Jollof
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Enjoy delicious Nigerian meals prepared with passion,
          delivered fresh across Lagos.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">

          <button className="bg-red-600 text-white px-8 py-4 rounded-lg">
            Order Now
          </button>

          <button className="border border-red-600 text-red-600 px-8 py-4 rounded-lg">
            View Menu
          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;