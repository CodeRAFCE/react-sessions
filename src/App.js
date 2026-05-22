import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Playgounrd from "./components/Playground";



const AppLayout = () => (
  <div className="app">
    {/* <Playgounrd /> */}
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
