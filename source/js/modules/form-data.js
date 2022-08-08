const storingFormData = () => {
  const form = document.querySelector('[data-form]');
  const fields = form.querySelectorAll('[data-field]');

  if (fields.length > 0 && form !== null) {
    getDataForm(form, fields);
  }

  function getDataForm(formName, fieldsName) {
    formName.addEventListener('submit', () => {
      localStorage.clear();
      fieldsName.forEach((field) => {
        localStorage.setItem(field.name, field.value);
        field.value = '';
      });
    });
  }
};

export {storingFormData};
