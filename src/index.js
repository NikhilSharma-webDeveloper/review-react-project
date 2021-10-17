import React from "react";
import ReactDom from "react-dom";
import { App } from "./components/app";

// importing css
import "./index.css";
const Main = () => {
    return (<App></App>);
}
ReactDom.render(<Main></Main>, document.getElementById("root"))