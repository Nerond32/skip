import _ from 'lodash';
import './style.css';
import Icon from './bige_pige.jpg';
import printMe from './print.js';

function component() {
    let element = document.createElement('div');
    var btn = document.createElement('button');
    btn.innerHtml = "click this shit REEEEEEEEEEEE";
    btn.onclick = printMe;
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hellou', 'webpack'], ' ');
    element.classList.add('hello');
    element.appendChild(btn);
    var myIcon = new Image();
    myIcon.src = Icon;
    return element;
  }
  
  document.body.appendChild(component());