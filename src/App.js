import { lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import About from "./pages/About";

import Header from "./components/Header";
import Body from "./components/Body";
import Playgounrd from "./components/Playground";
import ErrorPage from "./components/ErrorPage";

const AppLayout = () => (
  <div className="app">
    {/* <Playgounrd /> */}
    <Header />
    <Body />
  </div>
);

const appRouter = createBrowserRouter([
  { path: "/", Component: AppLayout, ErrorBoundary: lazy(() => import("./components/ErrorPage")) },
  { path: "/about", Component: lazy(() => import("./pages/About")) },
  // { path: "*", Component: lazy(() => import("./components/NotFound")) }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
