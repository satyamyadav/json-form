export default {
  attributes: {
    action: 'http://google.com',
    method: 'get'
  },
  actionButton: {
    className: "button",
    text: "Login",
    disabled: false,
    loader: `Loading`,
    onclick: (ev) => {
      ev.preventDefault();
      console.log('button.clicked', ev)
    }
  },
  validations: {
    username: (ev) => {
      return false
    }
  },
  fields: [
    {
      id: "usename",
      name: "username",
      validation: 'username',
      type: "text",
      placeholder: "Username",
      label: "Email",
      autocomplete: "off",
      className: "input-large",
      required: "required",
      autofocus: "",
      icon: {
        left: "person",
      },
      wrapper: "icon-input",
      requiredMsg: 'Username is required.'
    },
    {
      name: "password",
      id: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      className: "input-large",
      autocomplete: "off",
      required: "required",
      icon: {
        left: "vpn_key",
      },
      wrapper: "icon-input"
    }
  ]
};
