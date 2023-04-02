import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [inputs, setInput] = useState({
    name: "",
    account: "",
    email: "",
    phone: "",
  });
  const handleChangeInput = (ev) => {
    setInput({ ...inputs, [ev.target.name]: ev.target.value });
  };
  const checkNumeric = (e) => {
    const re = /[0-9]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };

  const checkAlphaNumericCaps = (e) => {
    const re = /[0-9A-F]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };

  const checkAlphanumeric = (e) => {
    const re = /[0-9a-fA-F]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };

  const checkCharacter = (e) => {
    const re = /[a-fA-F]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };
  console.log("values", inputs);
  return (
    <div className="App">
      <div>Form Validation</div>
      <br />
      <div>
        <div>
          <span style={{ marginRight: 10 }}>Name</span>
          <input
            name="name"
            onKeyPress={checkCharacter}
            onChange={handleChangeInput}
            placeholder="alphabet"
          />
        </div>
        <br />
        <div>
          <span style={{ marginRight: 10 }}>Account</span>
          <input
            name="account"
            onChange={handleChangeInput}
            onKeyPress={checkAlphanumeric}
            placeholder="Alphanumeric"
          />
        </div>
        <br />
        <div>
          <span style={{ marginRight: 10 }}>Email</span>
          <input
            name="email"
            onChange={handleChangeInput}
            onKeyPress={checkAlphaNumericCaps}
            placeholder="Email"
          />
        </div>
        <br />
        <div>
          <span style={{ marginRight: 10 }}>Phone</span>
          <input
            name="phone"
            onChange={handleChangeInput}
            onKeyPress={checkNumeric}
            placeholder="Numeric"
          />
        </div>
        <br />
        {/* <div><span>Name</span><input placeholder='Name' /></div> */}
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
