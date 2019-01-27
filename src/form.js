import dom from './dom';
import { ActionButton } from './buttons';
import createFields from './fields';

const isFieldsValid = list => list.every(l => l.isValid);

const Form = ({ attributes = {}, actionButton = {}, fields = [], validations }) => {
  const submit = ActionButton(actionButton);
  const inputFields = createFields(fields, validations);
  const form = dom.form(attributes, [...inputFields, submit]);
  form.addEventListener('input', (ev) => {
    console.log('is form valid', ev.currentTarget.checkValidity())
    submit.disabled = !ev.currentTarget.checkValidity();
  })
  form.addEventListener('submit', ev => {
    const isFormValid = ev.currentTarget.checkValidity();
    const isInputsValid = isFieldsValid(inputFields);
    if(!(isInputsValid && isFormValid)) {
      submit.disabled = true;
      ev.preventDefault();
      return false;
    }
  })
  return { form, submit };
}

export default Form;