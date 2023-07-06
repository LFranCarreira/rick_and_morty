import { useState } from "react";
import style from "./SearchBar.module.css"
import {useDispatch} from "react-redux";
import { addChar,resetPage} from "../../Redux/actions/actions.js"
import axios from "axios";

export default function SearchBar({onSearch}) {
   const [id,setId]=useState("");
   const dispatch=useDispatch();
   const handleChange=(event)=>{
      setId(event.target.value)
   }
   const add=()=>{
      onSearch(id);
      dispatch(resetPage())
      setId("");
   }
   const randomChar=()=>{
      const numRan=Math.floor((Math.random()*825)+1);
      axios(`http://localhost:3001/rickandmorty/character/${numRan}`).then(
         ({data})=>{
            if(data.name){
               dispatch(addChar(data));
            }else{
               window.alert("¡No hay personajes con este ID!")
            }
         }
      )
   }
   return (
      <div className={style.search}>
         <label>Inserte ID: </label>
         <input onChange={handleChange} type='search' name="id" value={id} placeholder="inserte id..." />
         <button onClick={add}>Agregar</button>
         <button onClick={randomChar}>Random</button>
      </div>
   );
}
