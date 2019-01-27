export default {
  attributes: {
    action: 'http://google.com',
    method: 'get'
  },
  actionButton: {
    className: "button",
    text: "Login",
    disabled: false,
    loader: `Loading`
  },
  validations: {
    phone: (value) => {
      const v = value.trim();
      const reg = new RegExp(/^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g)
      return reg.test(v)
    },
  },
  fields: [
    {
      name: "phone",
      validation: 'phone',
      type: "number",
      placeholder: "phone",
      label: "Phone",
      autocomplete: "off",
      className: "input-large",
      required: "required",
      autofocus: ""
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      className: "input-large",
      autocomplete: "off",
      required: "required"
    }
  ]
};
