import "/scss/pricing.scss";

// components 
import { useTheme } from "./components/theme.js";
import { useBurger } from "./components/burger.js";
import { useAccordion } from "./components/home/accordion.js";
import { usePriceSwitcher } from "./components/pricing/priceSwticher.js";

useTheme();
useBurger();
useAccordion();
usePriceSwitcher();
