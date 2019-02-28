import _ from "lodash";
import "./style.css";

function component() {
  let element = document.createElement("div");
  element.innerHTML = "Hellouuuuuuuuuaa webpackaa";
  element.classList.add("hello");
  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);
