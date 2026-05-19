const element = React.createElement("h1", {}, "Hello, React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

// Nested elements
const nestedElement = React.createElement(
  "div",
  {},
  React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello, React!"),
  ),
);

// Sibling elements
const siblingElement = React.createElement(
  "div",
  {},
  [React.createElement("h1", {}, "Hello, React!"), React.createElement("h2", {}, "Welcome to React!")],
); 