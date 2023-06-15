import React,{useEffect,useState} from "react"
import "./Detail.css"
import axios from "axios"
import { useParams } from "react-router-dom"
export default function Detail(){
    const {id}=useParams()
    const [character,setCharacter]=useState({})
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return(
        <div>
            <h1>Detail</h1>
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.origin?.name}</h2>
            <img className="imgDetail" src={character.image} alt={character.name}/>
        </div>
    )
}