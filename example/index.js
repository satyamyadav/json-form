import Form from '../src/form';
import defaultOpts from './store';
import css from './app.scss'

const formComponent = Form(defaultOpts);

const root = document.getElementById('root');
root.append(formComponent.form)

