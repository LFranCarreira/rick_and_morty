import React,{useState} from 'react';
import axios from "axios"
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/NavBar.jsx';
import { Routes,Route, useLocation } from 'react-router-dom';
import Detail from './components/Detail/Detail.jsx';
import About from "./components/About/About.jsx"
import Login from "./components/Login/Login.jsx"
import Error from "./components/ErrorNotFound/Error.jsx"


function App() {
   
   const [characters,setCharacters]=useState([]);

   function onSearch(id) {
      axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist=characters.find((ch)=>ch.id===data.id);
            if(exist){
               alert("ya existe")
            }else{
               setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id){
      setCharacters((oldChars) => {
         return oldChars.filter((ch)=>ch.id!==id)
      });
   }

   const {pathname}=useLocation()
   return (
      <div className='App'>
         {pathname==="/"?null:<NavBar onSearch={onSearch} />}
         
         <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/home' 
            element={<Cards onClose={onclose} />}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/detail/:id" element={<Detail/>}></Route>
         </Routes>
         {pathname!=="/" &&
         pathname!=="/home" &&
         pathname!=="/about" &&
         pathname!==("/detail:id") ? (
            <Error/>
         ):null}
         <Cards onClose={onClose} characters={characters}  />
      </div>
   );
}

export default App;
