import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home/Home";
import Homee from "../Pages/Homee/Homee.jsx";
import CatagoryNews from "../Pages/CatagoryNews/CatagoryNews.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <Homee></Homee>,
      },
      {
        path: "/catagory/:id",
        element: <CatagoryNews></CatagoryNews> ,
      },
      {
        path: "",
        element: <Homee></Homee>,
      },
    ],
  },
  {
    path: "/auth",
    element: <div>Authintic layout</div>,
  },
  {
    path: "/news",
    element: <div>News Layout</div>,
  },
  {
    path: "/*",
    element: <div>Error404</div>,
  },
]);

export default router;
