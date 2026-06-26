function MealModal({ meal, onClose }) {
  if (!meal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden">
        <div className="h-72 bg-gray-200">
          {meal.image && (
            <img
              src={meal.image}
              alt={meal.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold">
            {meal.name}
          </h2>

          <p className="text-gray-600 mt-4">
            {meal.description}
          </p>

          <p className="mt-6 text-red-600 text-2xl font-bold">
            ₦{meal.price.toLocaleString()}
          </p>

          <button
            onClick={onClose}
            className="mt-6 w-full bg-black text-white py-3 rounded-xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MealModal;