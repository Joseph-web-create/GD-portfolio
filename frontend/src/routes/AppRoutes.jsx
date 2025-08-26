import AboutMe from "../pages/AboutMe";
import HomePage from "../pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../pages/Layout";
function AppRoutes() {
  const route = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "about-me",
          element: <AboutMe />,
        },
      ],
    },
  ];

  const routes = createBrowserRouter(route);
  return <RouterProvider router={routes} />;
}

export default AppRoutes;
