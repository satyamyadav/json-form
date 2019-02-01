
import dom from './dom';

{/* <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist> */}

// const createInput = (field = {}) => {
// const el = dom.input(field);
// el.addEventListener('blur', handler);
// el.addEventListener('input', handler);
// return el;
// const { type='input', text='' } = field;




const button = (field) => {
  const { type, text } = field;
  return dom[type](field, text);
}


const datalist = (field) => {
  const { type, options=[], id='data-list' } = field;
  //   <label for="ice-cream-choice">Choose a flavor:</label>
  //     <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

  //     <datalist id="ice-cream-flavors">
  //       <option value="Chocolate">
  //         <option value="Coconut">
  //           <option value="Mint">
  //             <option value="Strawberry">
  //               <option value="Vanilla">
  // </datalist>

  return  dom.div({}, [
    dom.input({ list: id }),
    dom.datalist({ id }, options.map(opt => dom.option({ value: opt }))),
  ])
}


const fieldset = (field) => {
  const { type } = field;
  return dom[type](field);
}


const form = (field) => {
  const { type } = field;
  return dom[type](field);
}


const input = (field) => {
  const { type } = field;
  return dom.input(field);
}


const keygen = (field) => {
  const { type } = field;
  return dom[type](field);
}


const label = (field) => {
  const { type } = field;
  return dom[type](field);
}


const legend = (field) => {
  const { type } = field;
  return dom[type](field);
}


const meter = (field) => {
  const { type } = field;
  return dom[type](field);
}


const optgroup = (field) => {
  const { type } = field;
  return dom[type](field);
}


const option = (field) => {
  const { type } = field;
  return dom[type](field);
}


const output = (field) => {
  const { type } = field;
  return dom[type](field);
}


const progress = (field) => {
  const { type } = field;
  return dom[type](field);
}


const select = (field) => {
  const { type } = field;
  return dom[type](field);
}


const textarea = (field) => {
  const { type } = field;
  return dom[type](field);
}



const inputMap = { button, datalist, fieldset, form, input, keygen, label, legend, meter, optgroup, option, output, progress, select, textarea }

const createInput = (opts) => {
  const { type = 'input' } = opts;

  if (!inputMap[type]) {
    return inputMap.input(opts);
  }
  return inputMap[type](opts);
}

export default createInput;

