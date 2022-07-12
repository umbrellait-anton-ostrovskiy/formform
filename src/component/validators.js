const validatorName = (name) => {
  if (typeof name !== "string") {
    return "Ошибка в именни";
  }
  return "";
};

const validatorSurname = (surname) => {
  if (typeof surname !== "string") {
    return "Ошибка в фамилии";
  }
  return "";
};

const validatorMail = (mail) => {
  if (!new RegExp(/\S+@\S+\.\S+/).test(mail)) {
    return "Ошибка в почте";
  }
  return "";
};

const validatorPhone = (phone) => {
  let regex =
    /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  if (!regex.test(phone)) {
    return "Телефон не коректен";
  }
  return "";
};

const validatorAgreement = (agreement) => {
  if (!agreement) {
    return "Вы не согласилсь на соглашение";
  }
  return;
};

const validatorSexSelect = (sexSelect) => {
  return true;
};

export {
  validatorName,
  validatorSurname,
  validatorMail,
  validatorPhone,
  validatorAgreement,
  validatorSexSelect,
};
