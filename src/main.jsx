import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./views/ErrorPage.jsx";
import Home from "./views/home/Home.jsx";
import Search from "./views/search/Search.jsx";
import Detail from "./views/detail/Detail.jsx";
import ComingSoon from "./views/ComingSoon.jsx";

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
        path: "/search",
        element: <Search />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/detail",
        element: <Detail />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/comingsoon",
        element: <ComingSoon />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
