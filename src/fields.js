
import dom from './dom';

const Fields =  ( inputfields=[]) =>

  inputfields.map(field => {
    const items = [];
    const w = field.wrapper || '';
    const icon = field.icon || {};
    /**
     * TO-DO: refactor
     */
    // if(icon.left) {
    //   items.push(icons(icon.left))
    // }
    if (field.type === 'select') {
      const { options, className, name, id } = field;
      const inputEl = dom.select({ className, name, id },
        options.map(({title, value}) => {
          return dom.option({value}, title)
        })
      );
      items.push(inputEl)
    } else {
      // const val = (field.name == "username" && lastUser && lastUser.username) ? lastUser.username : "";
      const val = '';
      const inputEl = dom.input({ value: val, ...field }, []);
      items.push(inputEl)
    }

    // if(icon.right) {
    //   items.push(icons(icon.right))
    // }

    if(field.type === 'password') {
      // const passwordIcon = showPasswordButtonElement({
      //   showPasswordButton: {
      //     onclick: (ev) => {
      //       ev.preventDefault();
      //       const toggleType = t => (t === 'password' ? 'text' : 'password')
      //       const toggleIcon = t => (t === 'password' ? 'visibility_off' : 'remove_red_eye')
      //       const el = ev.currentTarget;
      //       const input = el.previousElementSibling;
      //       const currentType = input.type;
      //       input.type = toggleType(currentType);
      //       el.innerHTML = toggleIcon(currentType);
      //     },
      //     ...showPasswordButton
      //   }
      // });

      // items.push(passwordIcon)
    }

    if (field.errMsg) {
      const msg = dom.p({className: `validation-error form-error`}, field.errMsg);
      items.push(msg);
    }

    if (field.requiredMsg) {
      const requiredEl = dom.p({className: `required-error form-error`}, field.requiredMsg);
      items.push(requiredEl);
    }

    return dom.div(
      { id: field.name, className: w },
      items
    );
  });


export default Fields;
