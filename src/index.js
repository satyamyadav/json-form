import Form from './form';
import defaultOpts from './store';
const formComponent = Form(defaultOpts);

const root = document.getElementById('root');
root.append(formComponent.form)

