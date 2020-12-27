const yup = require('yup');

const headerSchema = yup.object({
  'Store-CNPJ': yup.string().required(),
  'Authorization': yup.string().required(),
  'APK-Version': yup.string().required(),
  'Device-Number': yup.string().required(),
});

module.exports = {
  validate(header) {
    if (!header) {
      return false;
    }
    return headerSchema.isValidSync(header);
  },
};
