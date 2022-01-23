import AbstractView from './abstract-view.js';
export default class SmartView extends AbstractView {
  _data = {};
  updateData = (update, justDataUpdating) => {
    if (!update) {
      return;
    }
    this._data = { ...this._data, ...update };

    if (justDataUpdating) {
      return;
    }
    this.updateElement();
  };

  updateElement = () => {
    const prevElement = this.element;
    const scrollYPositon = prevElement.scrollTop;
    const parentElement = prevElement.parentElement;
    this.removeElement();
    const newElement = this.element;
    parentElement.replaceChild(newElement, prevElement);
    newElement.scrollTop = scrollYPositon;
    this.restoreHandlers();
  };

  restoreHandlers() {
    throw new Error('Abstract method not emplemented: restoreHandlers');
  }
}
