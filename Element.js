export class Element
{
  constructor(tag)
  {
    this.tag = tag;
    this.element = document.createElement(tag);
  }

  get()
  {
    return this.element;
  }

  remove()
  {
    return this.element.remove();
  }

  append(child)
  {
    return this.element.appendChild(child);
  }

}

import * as styles from './styles/styles';
import { bgColors, textColors, borderColors } from './styles/colors';

Object.entries(styles).map( ([name, func]) => Element.prototype[name] = func );

Object.entries(bgColors).map( ([name, func]) => Element.prototype[name] = func );
Object.entries(textColors).map( ([name, func]) => Element.prototype[name] = func );
Object.entries(borderColors).map( ([name, func]) => Element.prototype[name] = func );
