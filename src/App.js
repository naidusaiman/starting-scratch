import React from "react";
import {createRoot} from "react-dom/client";

const Pizza = (props) => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  );
};

const App = () => {
  return React.createElement(
    "div",
    {},
    "Visit My Store",
    React.createElement(Pizza, {
      name: "Pizza 1",
      description: "Description 1",
    }),
    React.createElement(Pizza, {
      name: "Pizza 2",
      description: "Description 2",
    }),
    React.createElement(Pizza, {
      name: "Pizza 3",
      description: "Description 3",
    }),
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
