import dom from './dom';
import {ActionButton} from './buttons';
import createFields from './fields';

const Form = ({ attributes = {}, actionButton = {}, fields = [] }) => {
  const submit = ActionButton(actionButton);
  const inputFields = createFields(fields);
  const form = dom.form(attributes, [...inputFields, submit]);
  return {form, submit};
}

export default Form;