import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useLoginFormValidator } from "./useLoginFormValidator";

function Form() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    mail: "",
    phone: "",
    sexSelector: "man",
    agreement: false,
    area: "",
  });

  const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

  const onUpdateField = (e) => {
    const field = e.target.name;
    let value = null;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }
    const nextFormState = {
      ...form,
      [field]: value,
    };
    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    const nextFormState = {
      ...form,
    };
    setForm(nextFormState);
    validateForm({
      form: nextFormState,
      errors,
      field: "agreement",
      force: true,
    });
  };

  return (
    <StyledWraper>
      <form className="form" onSubmit={onSubmitForm}>
        {errors.name.dirty && errors.name.error ? (
          <p style={{ color: "red" }}>{errors.name.message}</p>
        ) : null}
        <input
          className="name"
          value={form.name}
          onChange={onUpdateField}
          onBlur={onBlurField}
          placeholder="Имя"
          name="name"
        ></input>
        {errors.surname.dirty && errors.surname.error ? (
          <p style={{ color: "red" }}>{errors.surname.message}</p>
        ) : null}
        <input
          className="surname"
          value={form.surname}
          onChange={onUpdateField}
          onBlur={onBlurField}
          placeholder="Фамилия"
          name="surname"
        ></input>
        {errors.mail.dirty && errors.mail.error ? (
          <p style={{ color: "red" }}>{errors.mail.message}</p>
        ) : null}
        <input
          className="mail"
          value={form.mail}
          onChange={onUpdateField}
          onBlur={onBlurField}
          placeholder="email"
          name="mail"
        ></input>
        {errors.phone.dirty && errors.phone.error ? (
          <p style={{ color: "red" }}>{errors.phone.message}</p>
        ) : null}
        <input
          className="phone"
          value={form.phone}
          onChange={onUpdateField}
          onBlur={onBlurField}
          placeholder="телефон"
          name="phone"
        ></input>
        <div className="bar">
          <select
            className="sexSelector"
            value={form.sexSelector}
            onChange={onUpdateField}
            onBlur={onBlurField}
            name="sexSelector"
          >
            <option value={"man"}>муж</option>
            <option value={"woman"}>жен</option>
          </select>
          <input
            id="label"
            className="checkbox"
            type="checkbox"
            checked={form.agreement}
            onChange={onUpdateField}
            name="agreement"
          />{" "}
          <label for="label" className="label">
            соглашение: {form.agreement ? "согласен" : "не согласен"}
          </label>
        </div>
        {errors.agreement.error ? (
          <p style={{ color: "red" }}>{errors.agreement.message}</p>
        ) : null}
        {errors.area.dirty && errors.area.error ? (
          <div style={{ color: "red" }}>{errors.area.message}</div>
        ) : null}
        <textarea
          className="area"
          value={form.area}
          onChange={onUpdateField}
          onBlur={onBlurField}
          placeholder="Жалоба"
          name="area"
        ></textarea>
        <button className="button" type="submit">
          отправить
        </button>
      </form>
    </StyledWraper>
  );
}

export default Form;

const StyledWraper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    width: 700px;
    height: auto;
    margin: auto;
    margin-top: 20px;
    background-color: #dcdcdc;
    border-radius: 15px;
  }
  .name,
  .surname,
  .phone,
  .mail {
    width: 300px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    border-radius: 15px;
  }
  .bar {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
  .sexSelector {
    width: 100px;
    height: 50px;
    margin-left: 150px;
    border-radius: 15px;
  }
  .checkbox {
    width: 30px;
    height: 30px;
    margin-left: 150px;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 15px;
  }
  .area {
    margin-top: 10px;
    height: 200px;
    width: 600px;
    border-radius: 15px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  .button {
    margin-top: 10px;
    width: 100px;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
    margin-bottom: 10px;
  }
  .label {
    margin-top: auto;
    margin-bottom: auto;
  }
`;
