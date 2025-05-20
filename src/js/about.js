import "/scss/about.scss";

// components
import { useTheme } from "./components/theme.js";
import { useBurger } from "./components/burger.js";
import { useAccordion } from "./components/home/accordion.js";
import { useAboutSlider } from "./components/about/slider.js";


useTheme();
useBurger();
useAccordion();
useAboutSlider();

