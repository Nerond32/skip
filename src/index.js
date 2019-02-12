import _ from 'lodash';
import './style.css';
import Icon from './bige_pige.jpg';

function component() {
    let element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hellou', 'webpack'], ' ');
    element.classList.add('hello');
    var myIcon = new Image();
    myIcon.src = Icon;
    return element;
  }
  
  document.body.appendChild(component());