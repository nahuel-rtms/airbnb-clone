import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home.jsx";
import ErrorPage from "./views/ErrorPage.jsx";
import Properties from "./views/Properties.jsx";
import PropertyDetail from "./views/PropertyDetail.jsx";
import ComingSoon from "./views/ComingSoon.jsx";
import ToggleView from "./views/ToggleView.jsx";
import BlogView from "./views/BlogView.jsx";
import ThreeDView from "./views/ThreeDView.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/properties",
        element: <Properties />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/propertydetail",
        element: <PropertyDetail />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/comingsoon",
        element: <ComingSoon />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/toggle_view",
        element: <ToggleView />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/blog",
        element: <BlogView />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/3d_view",
        element: <ThreeDView />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
