
import dom from './dom';

const handler = (ev) => {
  const target = ev.target;
  const { validation, value } = target;
  const isValid = validation(value);
  !isValid && target.classList.add('error');
  isValid && target.classList.remove('error');
  target.parentNode.isValid = isValid;
  return isValid;
}
const createInput = (field = {}) => {
  const el = dom.input(field);
  // el.addEventListener('blur', handler);
  el.addEventListener('input', handler);
  return el;
}

const Fields = (inputfields = [], validations = {}) => {
  return inputfields.map(field => {
    const validation = validations[field.validation] || (() => true);
    const w = field.wrapper || '';
    const inputEl = createInput({ ...field, validation });
    return dom.div(
      { id: field.name, className: w, isValid: true },
      [inputEl]
    );
  });
}

export default Fields;
