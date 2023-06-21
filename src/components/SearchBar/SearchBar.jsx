import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
   const [id,setId]=useState("");
   const handleChange=(event)=>{
      setId(event.target.value)
   }
   const add=()=>{
      onSearch(id);
      setId("");
   }
   const randomChar=()=>{
      const numRan=Math.floor((Math.random()*825)+1);
      onSearch(numRan)
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
