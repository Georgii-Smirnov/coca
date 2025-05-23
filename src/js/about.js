import "/scss/about.scss";

// components
import { useTheme } from "./components/theme.js";
import { useBurger } from "./components/burger.js";
import { useAccordion } from "./components/home/accordion.js";
import { useOurServiceSlider } from "./components/about/ourServiceslider.js";
import { useTeamBlockSlider } from "./components/about/teamBlockSlider.js";


useTheme();
useBurger();
useAccordion();
useOurServiceSlider();
useTeamBlockSlider();

