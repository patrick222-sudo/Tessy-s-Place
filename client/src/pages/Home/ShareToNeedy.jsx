function ShareToNeedy() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-red-600 rounded-3xl p-8 md:p-16 text-center text-white">

          <h2 className="text-3xl md:text-5xl font-bold">
            Share A Meal, Spread Love
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg">
            Support someone in need by donating a meal through
            Tessy's Place. Every contribution helps put food on
            someone's table.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold">
              Donate A Meal
            </button>

            <button className="border border-white px-8 py-4 rounded-xl font-semibold">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ShareToNeedy;