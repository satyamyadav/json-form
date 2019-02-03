
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
  'option',
  'datalist',
  'legend',
  'fieldset',
  'optgroup',
  'progress',
  'textarea'
];

const DomApi = (list = []) => {
  const elements = Array.isArray(list) ? [...defaultElements, ...list] : defaultElements;

  const setAttributes = (el, attrs) => {
    // for (let attr in attrs) {
    //   el[attr] = attrs[attr];
    // }
    const readonly = ['list'];
    const uniqueId = Math.round(Math.random() * Date.now()).toString(20).substr(0, 4);
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIE = /Trident/.test(userAgent);
    const isSafari = /safari/.test(userAgent) && !(/chrome/.test(userAgent));
    const isIos = /iphone|ipod|ipad/.test(userAgent);
    const isOldBrowser = isIE || isSafari || isIos;

    if (isOldBrowser) {
      Object.keys(attrs).forEach(key => {
        if (['function'].indexOf(typeof (attrs[key])) < 0 && ['className', 'classList', 'linkText'].indexOf(key) < 0) {
          el.setAttribute(key, attrs[key]);
        } else {
          // if passed attr value is of type function, attach it to el object instead of set attribute
          el[key] = attrs[key];
        }
      });
    } else {
      Object.keys(attrs).forEach(key => {
        if(readonly.includes(key)) {
          el.setAttribute(key, attrs[key]);
        } else {
          el[key] = attrs[key];
        }
      });
    }
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