import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Header from "./components/Header";
import UserContext from "./utils/context/UserContext";
import appStore from "./utils/redux/store";

const Body = lazy(() => import("./components/Body"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const NotFound = lazy(() => import("./components/NotFound"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));
const About = lazy(() => import("./pages/About"));
const Cart = lazy(() => import("./pages/Cart"));

const AppLayout = () => (
  <Provider store={appStore}> 
    <UserContext.Provider value={{ loggedInUser: "coderafce" }}>
      <div className="app">
        {/* <Playgounrd /> */}
        <UserContext.Provider value={{ loggedInUser: "Hello" }}>
          <Header />
        </UserContext.Provider>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </UserContext.Provider>
  </Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: "/",
        Component: Body,
        children: [],
      },
      { path: "/about", Component: About },
      { path: "/cart", Component: Cart },

      { path: "/restaurant/:resId", Component: RestaurantMenu },
    ],
  },
  { path: "*", Component: NotFound },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
