export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');

  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterPrice = document.querySelector('[data-price="enterPrice"]');

  const priceList = {
    starter: {
      default: "$" + 120,
      witchSale: "$" + 100,
    },
    popular: {
      default: "$" + 1680,
      witchSale: "$" + 1400,
    },
    enterprise: {
      default: "$" + 2520,
      witchSale: "$" + 2100,
    },
  };

  const setPricesWitchSale = () => {
    starterPrice.textContent = priceList.starter.witchSale;
    popularPrice.textContent = priceList.popular.witchSale;
    enterPrice.textContent = priceList.enterprise.witchSale;
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterPrice.textContent = priceList.enterprise.default;
  };

  switcher.checked = true;

  switcher.addEventListener("click", () => {
    if (switcher.checked) {
      setPricesWitchSale();
    } else {
      setDefaultPrices();
    }
  });
};
