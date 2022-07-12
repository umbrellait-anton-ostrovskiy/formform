import { useState } from "react";
import {
  validatorName,
  validatorSurname,
  validatorMail,
  validatorPhone,
  validatorAgreement,
  validatorSexSelect,
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
    sexSelect: {
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

  const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
    let isValid = true;

    const { name, surname, mail, phone, agreement, sexSelect, area } = form;
    let nextErrors = JSON.parse(JSON.stringify(errors));

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
      const surnameMassage = validatorSurname(surname, form);
      nextErrors.surname.error = !!surnameMassage;
      nextErrors.surname.message = surnameMassage;
      if (!!surnameMassage) isValid = false;
    }

    if (nextErrors.phone.dirty && (field ? field === "phone" : true)) {
      const phoneMessage = validatorPhone(phone, form);
      nextErrors.phone.error = !!phoneMessage;
      nextErrors.phone.message = phoneMessage;
      if (!!phoneMessage) isValid = false;
    }

    if (nextErrors.mail.dirty && (field ? field === "mail" : true)) {
      const emailMessage = validatorMail(mail, form);
      nextErrors.mail.error = !!emailMessage;
      nextErrors.mail.message = emailMessage;
      if (!!emailMessage) isValid = false;
    }

    if (nextErrors.agreement.dirty && (field ? field === "agreement" : true)) {
      const agreementMessage = validatorAgreement(agreement, form);
      nextErrors.agreement.error = !!agreementMessage;
      nextErrors.agreement.message = agreementMessage;
      if (!!agreementMessage) isValid = false;
    }

    if (nextErrors.area.dirty && (field ? field === "area" : true)) {
      const areaMessage = validatorMail(area, form);
      nextErrors.area.error = !!areaMessage;
      nextErrors.area.message = areaMessage;
      if (!!areaMessage) isValid = false;
    }

    if (nextErrors.sexSelect.dirty && (field ? field === "sexSelect" : true)) {
      const sexSelectMessage = validatorSexSelect(sexSelect, form);
      nextErrors.sexSelect.error = !!sexSelectMessage;
      nextErrors.sexSelect.message = sexSelectMessage;
      if (!!sexSelectMessage) isValid = false;
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
