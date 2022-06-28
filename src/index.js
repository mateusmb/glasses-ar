import React from "react";
import { render } from "react-dom";

import "./styles/index.scss";

import DemoVTOGlasses from "./js/components/VTOGlasses.js";

render(
  <>
    <DemoVTOGlasses />
  </>,
  document.querySelector("#root")
);
