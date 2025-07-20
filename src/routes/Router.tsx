import About from "@/components/about";
import BeautyAndBlush from "@/components/beautyAndBlush";
import Contact from "@/components/contact";

import Services from "@/components/service";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <BeautyAndBlush />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default Router;
