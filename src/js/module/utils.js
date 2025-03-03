const createElementTag = (tag, body, classList) => {
  const element = document.createElement(tag);
  if (body) element.innerText = body;
  if (classList) element.classList.add(classList);
  return element;
};
export default createElementTag;