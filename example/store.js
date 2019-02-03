
import config from './form.json'

export default {
  ...config,
  validations: {
    phone: (value) => {
      const v = value.trim();
      const reg = new RegExp(/^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g)
      return reg.test(v)
    },
  },
};
