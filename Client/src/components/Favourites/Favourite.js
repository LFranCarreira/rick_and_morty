import React from "react";
import Card from "../Card/Card.jsx";
import { connect,useDispatch,useSelector } from "react-redux";
import { reset,filterAtoZ,filterGender } from "../../Redux/actions/actions.js";
import style from "../Cards/Cards.module.css"
export default function Favourite({onClose}){
    const {myFavorites}=useSelector((myFav)=>myFav)
    const dispatch=useDispatch()
    const handleGender=(event)=>{
        const {value}=event.target
        dispatch(filterGender(value))
    }
    const handleAZ=(event)=>{
        const {value}=event.target
        dispatch(filterAtoZ(value))
    }
    return(
        <div className={style.cards}>
            <nav className={style.nav}>
                <select name="gender" onChange={handleGender} defaultValue={"DEFAULT"}>
                    <option value="DEFAULT" disable>
                        Select Gender:{" "}
                    </option>
                    <option value="Male" disable>
                        Male
                    </option>
                    <option value="Female" disable>
                        Female
                    </option>
                    <option value="Genderless" disable>
                        Genderless
                    </option>
                    <option value="unknown" disable>
                        Unknown
                    </option>
                </select>
                <select name="gender" onChange={handleAZ} defaultValue={"DEFAULT"}>
                    <option value="DEFAULT" disable>
                        Select Order:
                    </option>
                    <option value="A" disable>
                        Ascendente
                    </option>
                    <option value="D" disable>
                        Descendente
                    </option>
                </select>
                <button onClick={()=>dispatch(reset())}>Reset</button>
            </nav>
        {myFavorites?.map((char,index)=>{
        return<Card key={char.id} char={char} onClose={onClose} inFav={true}/>
      })}
        </div>
    )
}