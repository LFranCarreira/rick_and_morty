import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCharacter } from "../../Redux/actions/actions";
import { useNavigate } from "react-router-dom";
import style from './CreateCharacter.module.css'

export default function CreateCharacter() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { characters } = useSelector((s) => s);

  const [inputs, setInputs] = useState({
    id: "",
    gender: "",
    image: "",
    name: "",
    origin: "",
    species: "",
    status: "",
  });

  const [errorsInputs, setErrorsInputs] = useState({
    id: "",
    gender: "",
    image: "",
    name: "",
    origin: "",
    species: "",
    status: "",
  });
  const validateInputs = (inputs) => {
    const errors = {};
    return errors;
  };
  const handleChange = function (event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    const character = characters?.find((ch) => ch.id === inputs.id);
    if (character) {
      return alert(
        `El id:${character.id} le pertenece a ${character.name}`
      );
    }
    inputs.id = Number(inputs.id)
    dispatch(createCharacter(inputs));
    alert("Character created!");
    setInputs({
      id: "",
      gender: "",
      image: "",
      name: "",
      origin: "",
      species: "",
      status: "",
    });
    navigate("/home");
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <label>Id:</label>
        <input
          key="id"
          name="id"
          value={inputs.id}
          onChange={handleChange}
          type="text"
        />
        <label>Gender:</label>
        <input
          key="gender"
          name="gender"
          value={inputs.gender}
          onChange={handleChange}
          type="text"
        />
        <label>Image:</label>
        <input
          key="image"
          name="image"
          value={inputs.image}
          onChange={handleChange}
          type="text"
        />
        <label>Name:</label>
        <input
          key="name"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          type="text"
        />
        <label>Origin:</label>
        <input
          key="origin"
          name="origin"
          value={inputs.origin}
          onChange={handleChange}
          type="text"
        />
        <label>Species:</label>
        <input
          key="species"
          name="species"
          value={inputs.species}
          onChange={handleChange}
          type="text"
        />
        <label>Status:</label>
        <input
          key="status"
          name="status"
          value={inputs.status}
          onChange={handleChange}
          type="text"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}