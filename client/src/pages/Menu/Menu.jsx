import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import MealCard from "../../components/meals/MealCard";
import MealModal from "../../components/meals/MealModal";
import { meals } from "../../constants/data/meals";
import { useCart } from "../../context/CartContext";
import MainLayout from "../../layouts/MainLayout";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);

  const { addToCart } = useCart();

  const categories = [
    "All",
    "Foods",
    "Protein",
    "Salads",
    "Food By Litre",
    "Combos",
  ];

  const filteredMeals = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return meals.filter((meal) => {
      const matchesCategory =
        activeCategory === "All" ||
        meal.category === activeCategory;

      const matchesSearch =
        !search ||
        meal.name.toLowerCase().includes(search) ||
        meal.description.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const handleOpenMeal = (meal) => {
    setSelectedMeal(meal);
  };

  const handleCloseMeal = () => {
    setSelectedMeal(null);
  };

  const handleAddToCart = (meal) => {
    addToCart(meal);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <MainLayout>
      <main className="min-h-screen bg-gray-50">

        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">

            <div className="max-w-3xl mx-auto text-center">

              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                <SlidersHorizontal size={16} />
                Our Menu
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                Delicious meals,
                <span className="block text-red-600">
                  made with care.
                </span>
              </h1>

              <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                Explore our selection of freshly prepared meals from the
                Queen of Jollof.
              </p>

            </div>

            <div className="max-w-2xl mx-auto mt-10">

              <div className="relative">

                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search for a meal..."
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-12 py-4 text-gray-900 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                />

                {searchTerm && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center hover:bg-gray-300 transition"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}

              </div>

            </div>

          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`px-5 py-2.5 rounded-full whitespace-nowrap font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-red-500 hover:text-red-600"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

          <div className="flex items-center justify-between gap-4 mt-8">

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {activeCategory === "All"
                  ? "All Meals"
                  : activeCategory}
              </h2>

              <p className="text-gray-500 mt-1">
                {filteredMeals.length}{" "}
                {filteredMeals.length === 1
                  ? "meal"
                  : "meals"}{" "}
                available
              </p>
            </div>

          </div>

          {filteredMeals.length > 0 ? (
            <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredMeals.map((meal) => (
                <MealCard
                  key={meal.id}
                  meal={meal}
                  onOpenMeal={handleOpenMeal}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 bg-white border border-gray-100 rounded-3xl p-10 sm:p-16 text-center">

              <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
                <Search
                  size={28}
                  className="text-gray-400"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                No meals found
              </h3>

              <p className="mt-2 text-gray-500">
                Try searching for something else or choose another category.
              </p>

              {(searchTerm || activeCategory !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                  }}
                  className="mt-6 inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition"
                >
                  View All Meals
                </button>
              )}

            </div>
          )}

          <MealModal
            meal={selectedMeal}
            onClose={handleCloseMeal}
          />

        </section>

      </main>
    </MainLayout>
  );
}

export default Menu;