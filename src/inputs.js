
import dom from './dom';

const handler = (ev) => {
  const target = ev.target;
  const { validation, value, classes } = target;
  const isValid = validation(value);
  !isValid && target.classList.add(classes.error);
  isValid && target.classList.remove(classes.error);
  target.parentNode.isValid = isValid;
  return isValid;
}

const createLabel = ({ label = false, cssClass = {} }) => {
  const { label: className = '' } = cssClass;
  if (label && label.length) {
    return dom.label({ className }, label);
  }
  return '';
}


const button = (field) => {
  const { type, text } = field;
  return [dom[type](field, text)];
}


const datalist = (field) => {
  const { type, options = [], id = 'data-list' } = field;

  return [
    createLabel(field),
    dom.input({ list: id, ...field, type: 'text' }),
    dom.datalist({ id }, options.map(opt => dom.option({ value: opt }))),
  ]
}


const fieldset = (field) => {
  const { type, options = [], name, label = 'Select one' } = field;
  return [dom.fieldset({ name }, [
    dom.legend({}, label),
    ...options.flatMap(opt => {
      const id = Math.round(Math.random() * Date.now()).toString(20).substr(0, 4);
      return [
        dom.input({ id, type: 'radio', name: opt }),
        dom.label({ for: id }, opt),
        dom.br({})
      ]
    })
  ])]
}

const input = (field) => {
  const el = dom.input(field);
  el.addEventListener('input', handler);
  return [
    createLabel(field),
    el
  ];
}


const optgroup = (field) => {
  const { type, groups } = field;
  const createOptions = opts => dom.option({}, opts);

  const createGroup = (({ options, label }) => {
    return dom.optgroup({ label }, options.map(createOptions))
  });
  return [createLabel(field), dom.select({}, groups.map(createGroup))];
}


const progress = (field) => {
  const { type } = field;
  return [createLabel(field), dom[type](field)];
}


const select = (field) => {
  const { type, options, ...rest } = field;
  const createOption = val => dom.option({ value: val }, val);
  return [createLabel(field), dom.select(rest, options.map(createOption))];
}


const textarea = (field) => {
  const { type, ...rest } = field;
  return [createLabel(field), dom[type](rest)];
}



const inputMap = { button, datalist, fieldset, input, optgroup, progress, select, textarea }

const createInput = ({ field, validation, config: { cssClass = {} } }) => {
  const { input = {} } = cssClass;
  const { normal = '', error = '', success = '' } = input;
  const opts = { classes: { normal, error, success }, className: normal, ...field, validation, cssClass };
  const { type = 'input' } = opts;

  if (!inputMap[type]) {
    return inputMap.input(opts);
  }
  return inputMap[type](opts);
}

export default createInput;

