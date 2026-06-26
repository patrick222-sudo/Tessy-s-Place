export const getDisplayPrice = (
  price,
  promoEnabled,
  promoMarkup
) => {
  if (!promoEnabled) {
    return {
      originalPrice: null,
      currentPrice: price,
    };
  }

  return {
    originalPrice: price + promoMarkup,
    currentPrice: price,
  };
};