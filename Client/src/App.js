import { useEffect, useState } from "react";
import "./App.css";

import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/Nav/NavBar.jsx";
import axios from "axios";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import ErrorNotFound from "./components/ErrorNotFound/Error";
import Favorites from "./components/Favourites/Favourite";
import { connect, useDispatch, useSelector } from "react-redux";
import CreateCharacter from "./components/CreateCharacter/CreateCharacter";
import { addFav,removeFav,addChar,searchChar,removeChar } from "./Redux/actions/actions";

export default function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const dispatch = useDispatch();
  const URL="http://localhost:3001/rickandmorty"

  async function login(inputs) {
    try {
      const { data } = await axios.get(
        `${URL}/login?password=${inputs.password}&email=${inputs.email}`
      );
      if (data.access) {
        setAccess(true);
        navigate("/home");
        return alert("Bienvenido!");
      } else {
        return alert("Usuario incorrecto");
      }
    } catch (error) {
      console.log(error);
    }
  }
  function logout() {
    
        setAccess(false)
        navigate("/")

  }

  const { characters } = useSelector((state) => state);
  async function onSearch(id) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        dispatch(searchChar(data));
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.log(error);
    }
  }
  function onClose(id) {
    dispatch(removeChar(Number(id)));
    dispatch(removeFav(Number(id)));
  }
  const { pathname } = useLocation();
  useEffect(() => {
    async function inEffect() {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/rickandmorty/allcharacters`
        );
        dispatch(addChar(data));
      } catch (error) {
        console.log(error);
      }
    }
    inEffect();
  }, []);

  useEffect(() => {
    dispatch(addFav({ id: "RELOAD" }));
  }, []);

  return (
    <>
      {pathname === "/" ? null : <NavBar logout={logout} onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Login login={login} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/home" element={<Cards onClose={onClose} />}></Route>
        <Route
          path="/favourites" element={<Favorites onClose={onClose} />}
        ></Route>
        <Route path="/create" element={<CreateCharacter />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<ErrorNotFound />}></Route>
      </Routes>
    </>
  );
}