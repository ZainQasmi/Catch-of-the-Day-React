import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router";
import "./css/style.css";

// 1. Takes a JSX 2. Mounting point (A DOM element to mount to the page)
ReactDOM.render(<Router />, document.getElementById("main"));
