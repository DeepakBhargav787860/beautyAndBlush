import HeaderNavbar from "@/components/navbar";
import BeautyAndBlush from "@/components/navbar";
//edfgh
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderNavbar />,
  },
  // {
  //   path: "/services",
  //   element: <Services />,
  // },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);

export default Router;
