
const defaultElements = [
  'div',
  'section',
  'button',
];

const DomApi = (list = []) => {
  const elements = Array.isArray(list) ? [...defaultElements, ...list] : defaultElements;

  const setAttributes = (el, attrs) => {
    const readonly = ['list'];
    const uniqueId = Math.round(Math.random() * Date.now()).toString(20).substr(0, 4);

    Object.keys(attrs).forEach(key => {
    const notFn = (['function'].indexOf(typeof (attrs[key])) < 0);
      if (readonly.includes(key) && notFn) {
        el.setAttribute(key, attrs[key]);
      } else {
        el[key] = attrs[key];
      }
    });


    el.setAttribute('uid', uniqueId);
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