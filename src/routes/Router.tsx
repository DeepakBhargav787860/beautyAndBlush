import LandingPage from "@/components/LandingPage";

import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

export default Router;
