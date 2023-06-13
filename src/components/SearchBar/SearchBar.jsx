import { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({onSearch}) {
   const [id,setId]=useState("");
   function handleChange(event){
      setId(event.target.value)
   }
   const add=()=>{
      onSearch(id);
      setId("");
   }
   const randomChar=()=>{
      const numRan=Math.floor(Math.random()*826)
      onSearch(numRan)
   }
   return (
      <div className="search">
         <input onChange={handleChange} type='search' name="search" value={id} />
         <button onClick={add}>Agregar</button>
         <button onClick={randomChar}>Random</button>
      </div>
   );
}
