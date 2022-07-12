import { useState } from "react";
import {
  validatorName,
  validatorSurname,
  validatorMail,
  validatorPhone,
  validatorAgreement,
} from "./validators";

const touchErrors = (errors) => {
  return Object.entries(errors).reduce((acc, [field, fieldError]) => {
    acc[field] = {
      ...fieldError,
      dirty: true,
    };
    return acc;
  }, {});
};

const useLoginFormValidator = (form) => {
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
    // agreement: {
    //     dirty: false,
    //     error: false,
    //     message: "",
    //   },
  });

  const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
    let isValid = true;

    const { name, username, mail, phone, agreement } = form;
    const nextErrors = JSON.parse(JSON.stringify(errors));

    if (forceTouchErrors) {
      nextErrors = touchErrors(errors);
    }

    if (nextErrors.name.dirty && (field ? field === "name" : true)) {
      const nameMassege = validatorName(name, form);
      nextErrors.name.error = !!nameMassege;
      nextErrors.name.message = nameMassege;
      if (!!nameMassege) isValid = false;
    }

    if (nextErrors.surname.dirty && (field ? field === "surname" : true)) {
      const surnameMassage = validatorName(name, form);
      nextErrors.surname.error = !!surnameMassage;
      nextErrors.surname.message = surnameMassage;
      if (!!surnameMassage) isValid = false;
    }

    if (nextErrors.email.dirty && (field ? field === "phone" : true)) {
      const emailMessage = validatorName(name, form);
      nextErrors.email.error = !!emailMessage;
      nextErrors.email.message = emailMessage;
      if (!!emailMessage) isValid = false;
    }

    if (nextErrors.email.dirty && (field ? field === "email" : true)) {
      const emailMessage = validatorMail(mail, form);
      nextErrors.email.error = !!emailMessage;
      nextErrors.email.message = emailMessage;
      if (!!emailMessage) isValid = false;
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
