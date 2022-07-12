import { useState } from "react";
import validate from "./validators"; //   validatorSexSelect, //   validatorAgreement, //   validatorPhone, //   validatorMail, //   validatorSurname, //   validatorName,

const forceValidate = (errors) => {
  return Object.entries(errors).reduce((acc, [field, fieldError]) => {
    acc[field] = {
      ...fieldError,
      dirty: true,
    };
    return acc;
  }, {});
};

export const useLoginFormValidator = (form) => {
  const [errors, setErrors] = useState({
    name: {
      dirty: false,
      error: false,
      message: "",
    },
    surname: {
      dirty: false,
      error: false,
      message: "",
    },
    phone: {
      dirty: false,
      error: false,
      message: "",
    },
    mail: {
      dirty: false,
      error: false,
      message: "",
    },
    agreement: {
      dirty: false,
      error: false,
      message: "",
    },
    sexSelector: {
      dirty: false,
      error: false,
      message: "",
    },
    area: {
      dirty: false,
      error: false,
      message: "",
    },
  });

  const validateForm = ({ form, errors, force = false }) => {
    let isValid = true;

    let nextErrors = JSON.parse(JSON.stringify(errors));

    if (force) {
      nextErrors = forceValidate(errors);
    }

    for (let elem in form) {
      if (nextErrors[elem].dirty) {
        let message = validate[elem](form[elem]);
        nextErrors[elem].error = !!message;
        nextErrors[elem].message = message;
        if (!!message) isValid = false;
      }
    }

    setErrors(nextErrors);

    return {
      isValid,
      errors: nextErrors,
    };
  };

  const onBlurField = (e) => {
    const field = e.target.name;
    const fieldError = errors[field];
    if (fieldError.dirty) return;

    const updatedErrors = {
      ...errors,
      [field]: {
        ...errors[field],
        dirty: true,
      },
    };

    validateForm({ form, field, errors: updatedErrors });
  };

  return {
    validateForm,
    onBlurField,
    errors,
  };
};
