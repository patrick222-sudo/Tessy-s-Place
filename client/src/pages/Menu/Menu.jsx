import { useMemo, useState } from "react";
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
    return meals.filter((meal) => {
      const matchesCategory =
        activeCategory === "All" ||
        meal.category === activeCategory;

      const matchesSearch = meal.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

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

  return (
    <MainLayout>
      <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Our Menu
          </h1>

          <p className="mt-4 text-gray-600">
            Freshly prepared meals from the Queen of Jollof
          </p>
        </div>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Search meals..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="w-full border rounded-xl px-4 py-3 bg-white"
          />
        </div>

        <div className="flex gap-3 overflow-x-auto mt-8 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category)
              }
              className={`px-5 py-2 rounded-full whitespace-nowrap transition ${
                activeCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-white border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMeals.map((meal) => (
            <MealCard
              key={meal.id}
              meal={meal}
              onOpenMeal={handleOpenMeal}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {filteredMeals.length === 0 && (
          <div className="text-center mt-20">
            <p className="text-gray-500">
              No meals found.
            </p>
          </div>
        )}

        <MealModal
          meal={selectedMeal}
          onClose={handleCloseMeal}
        />

      </div>
    </main>
    </MainLayout>
  );
}

export default Menu;