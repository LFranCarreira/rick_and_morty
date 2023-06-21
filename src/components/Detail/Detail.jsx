import React,{useEffect,useState} from "react"
import style from "./Detail.module.css"
import axios from "axios"
import { useParams } from "react-router-dom"
export default function Detail(){
    const {id}=useParams()
    const [character,setCharacter]=useState({})
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
            ({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return(
        <div className={style.detail}>
            <div className={style.text}>
            <h3>Id: {id}</h3>
            <h1>{character.name}</h1>
            <h3>Status: {character.status}</h3>
            <h3>Specie: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Origin: {character.origin?.name}</h3>
            </div>
            <div className={style.img}>
            <img className="imgDetail" src={character.image} alt={character.name}/>
        </div>
        </div>
        
    )
}