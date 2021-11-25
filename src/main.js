const RenderPosition ={
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND:'beforeend',
  AFTEREND:'afterend'
}

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
