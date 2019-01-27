
const defaultElements = [
  'div',
  'section',
  'form',
  'ul',
  'li',
  'tr',
  'td',
  'table',
  'tbody',
  'thead',
  'script',
  'style',
  'img',
  'input',
  'select',
  'p',
  'label',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'i',
  'br',
  'b',
  'button',
  ];
  
const DomApi = (list = []) => {
  const elements = Array.isArray(list) ? [...defaultElements, ...list] : defaultElements;

  const setAttributes = (el, attrs) => {
    for (let attr in attrs) {
      el[attr] = attrs[attr];
    }
  }

  const isString = val => val && val.match;

  const setChildren = (el, children) => {
    if (children.map) {
      children.forEach(c => {
        if (!isString(c)) {
          el.append(c);
        }
        if (isString(c)) {
          el.innerHTML = c;
        }
      })
    }
    if (isString(children)) {
      el.innerHTML = children;
    }
  }

  const createComponent = name => (attrs = null, children = '') => {
    const el = document.createElement(name);
    attrs && setAttributes(el, attrs);
    children && setChildren(el, children);
    return el;
  }

  const api = elements => {
    elements.forEach(e => {
      createComponent[e.toLowerCase()] = createComponent.bind(null, e)();
    })
    return createComponent;
  }

  return api(elements);
}

export default DomApi;