
import dom from './dom';
import createInput from './inputs';

const Fields = ({fields = [], validations = {}, config={}}) => {
  const {cssClass={}} = config;
  return fields.map(field => {
    const validation = validations[field.validation] || (() => true);
    const w = cssClass.wrapper || field.wrapper || '';
    const inputEl = createInput({ field, validation, config });
    return dom.div(
      { id: field.name, className: w, isValid: true },
      [inputEl]
    );
  });
}

export default Fields;
