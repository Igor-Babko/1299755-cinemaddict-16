import {createElement} from '../utils/render.js';

export class AbstractView {
  #element = null;
  _callback = {};

  constructor (){
    if (new.target === AbstractView ){
      throw new Error ('Cant instiate AbctractView, only concreate one.');
    }
  }

  get element (){
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template () {
    throw new Error ('Abstract menhod not implented: get template');
  }

  removeElement() {
    this.#element = null;
  }
}
