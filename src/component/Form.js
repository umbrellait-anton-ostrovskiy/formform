import React from "react";
import { useState } from "react";
import styled from "styled-components";

function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [sexSelect, setSexSelect] = useState("man");
  const [agreement, setAgreement] = useState(false);
  const [area, setArea] = useState("");

  const handleSetName = (event) => {
    setName(event.target.value);
  };

  const handleSetSurname = (event) => {
    setSurname(event.target.value);
  };

  const handleSetMail = (event) => {
    setMail(event.target.value);
  };

  const handleSetPhone = (event) => {
    setPhone(event.target.value);
  };

  const handleSetSex = (event) => {
    setSexSelect(event.target.value);
  };

  const handleAgreement = () => {
    setAgreement(!agreement);
  };

  const handleSetArea = (event) => {
    setArea(event.target.value);
  };

  const onSubmitForm = (event) => {
    alert(123);
  };

  return (
    <StyledWraper>
      <form className="form" onSubmit={onSubmitForm}>
        <input
          className="name"
          value={name}
          onChange={handleSetName}
          placeholder="Имя"
        ></input>
        <input
          className="surname"
          value={surname}
          onChange={handleSetSurname}
          placeholder="Фамилия"
        ></input>
        <input
          className="mail"
          value={mail}
          onChange={handleSetMail}
          placeholder="email"
        ></input>
        <input
          className="phone"
          value={phone}
          onChange={handleSetPhone}
          placeholder="телефон"
        ></input>
        <div className="bar">
          <select
            className="sexSelect"
            value={sexSelect}
            onChange={handleSetSex}
          >
            <option value={"man"}>муж</option>
            <option value={"woman"}>жен</option>
          </select>
          <input
            className="checkbox"
            type="checkbox"
            checked={agreement}
            onChange={handleAgreement}
          />
          <p>соглашение: {agreement ? "согласен" : "не согласен"}</p>
        </div>
        <textarea
          className="area"
          value={area}
          onChange={handleSetArea}
          placeholder="Жалоба"
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
  .sexSelect {
    width: 100px;
    margin-left: 150px;
    border-radius: 15px;
  }
  .checkbox {
    width: 30px;
    height: 30px;
    margin-left: 150px;
    margin-top: 10px;
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
`;
