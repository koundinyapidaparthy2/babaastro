import Home from "../components/Home.jsx";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";

export const routerList = [
  {
    path: "/",
    Element: Home,
  },
  {
    path: "/services",
    Element: Services,
  },
  {
    path: "/about",
    Element: About,
  },
  {
    path: "/contact",
    Element: Contact,
  },
];
