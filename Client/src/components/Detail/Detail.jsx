import React,{useEffect,useState} from "react"
import style from "./Detail.module.css"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
export default function Detail(){
    const {id}=useParams();
    const [character,setCharacter]=useState({});
    const {charactersOrigin}=useSelector((origin)=>origin);
    useEffect(() => {
        const char = charactersOrigin?.find((ch) => ch.id === Number(id));
        if (char) {
            setCharacter(char)
        }else {
            window.alert("No hay personajes con ese ID")
        };
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