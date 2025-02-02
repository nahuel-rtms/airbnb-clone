import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ComingSoon from "./views/ComingSoon.jsx";
import DetailView from "./views/DetailView.jsx";
import ToggleView from "./views/ToggleView.jsx";
import ErrorView from "./views/ErrorView.jsx";
import SplitView from "./views/SplitView.jsx";
import BlogView from "./views/BlogView.jsx";
import Home from "./views/Home.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorView />,
      },
      {
        path: "/properties",
        element: <SplitView />,
        errorElement: <ErrorView />,
      },
      {
        path: "/toggle_view",
        element: <ToggleView />,
        errorElement: <ErrorView />,
      },
      {
        path: "/blog",
        element: <BlogView />,
        errorElement: <ErrorView />,
      },
      {
        path: "/propertydetail",
        element: <DetailView />,
        errorElement: <ErrorView />,
      },
      {
        path: "/comingsoon",
        element: <ComingSoon />,
        errorElement: <ErrorView />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
