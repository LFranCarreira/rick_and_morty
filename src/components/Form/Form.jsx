import React, { useState } from "react"
import style from "./Form.module.css"
import	{Link} from "react-router-dom"

const regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  export default function Form({ login }) {
    const [inputs, setInputs] = useState({
      email: "",
      password: "",
    });
    const [inputsErrors, setInputsErrors] = useState({
      email: "",
      password: "",
    });
    const validate = (inputs) => {
      const errors = {};
      if (!inputs.email) errors.email = "Falta el email";
      if (inputs.email.length < 6) errors.email = "El email debe contener al menos 6 caracteres";
      if (!regExEmail.test(inputs.email)) errors.email = "Debe ser un email";
      if (inputs.password.length < 6)
        errors.password = "La contraseña debe contener al menos 6 caracteres";
      if (!inputs.password) errors.password = "Falta la contraseña";
      return errors;
    };
    const handleChange = (event) => {
      setInputs({
        ...inputs,
        [event.target.name]: event.target.value,
      });
      setInputsErrors(
        validate({
          ...inputs,
          [event.target.name]: event.target.value,
        })
      );
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      let aux = Object.keys(inputsErrors);
      if (aux.length === 0) {
        setInputs({
          email: "",
          password: "",
        });
        setInputsErrors({
          email: "",
          password: "",
        });
        login(inputs);
      } else {
        return alert("Error");
      }
    };
    return (

      (
        <div className={style.login}>
          <form onSubmit={handleSubmit}>
            <h1>Rick & Morty</h1>
            <div className={style.inputs}>
              <label>Email: </label>
              <input
                type="text"
                key="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
              ></input>
              <span>{inputsErrors?.email && inputsErrors.email}</span>
              <hr></hr>
              <label>Password: </label>
              <input
                type="password"
                key="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
              ></input>
              <span>{inputsErrors?.password && inputsErrors.password}</span>
            </div>
            <hr></hr>
            {Object.keys(inputsErrors).length === 0 ? (
              <Link to="/home"><button type="submit">Ingresar</button></Link>
            ) : null}
  
          </form>
        </div>
      )
    );
  }