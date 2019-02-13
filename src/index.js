import _ from "lodash";
import "./style.css";
import Icon from "./bige_pige.jpg";
import printMe from "./print.js";

function component() {
  let element = document.createElement("div");
  var btn = document.createElement("button");
  btn.innerHtml = "click this shit REEEEEEEEEEEE";
  btn.onclick = printMe;
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hellouuuuuuuuuaa", "webpack"], " ");
  element.classList.add("hello");
  element.appendChild(btn);
  //var myIcon = new Image();
  //myIcon.src = Icon;
  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    //document.body.removeChild(element);
    //element = component(); // Re-render the "component" to update the click handler
    //document.body.appendChild(element);
  });
}
