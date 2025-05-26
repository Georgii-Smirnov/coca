import "/scss/activity-updates.scss";

// components
import { useTheme } from "./components/theme.js";
import { useBurger } from "./components/burger.js";
import { useAccordion } from "./components/home/accordion.js";
import { useActivityUpdatesSlider, useArticlesSlider } from "./components/activity-updates/slider.js";

useTheme();
useBurger();
useAccordion();
useActivityUpdatesSlider();
useArticlesSlider();
