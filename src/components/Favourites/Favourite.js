import React from "react";
import Card from "../Card/Card.jsx";
import { connect } from "react-redux";
import style from "../Cards/Cards.module.css"
function Favourite({myFavorites,onClose}){
    return(
        <div className={style.cards}>
        {myFavorites?.map((char,index)=>{
        return(
          <Card 
          key={char.id}
          char={char}
          onClose={onClose}
          ></Card>
         )
      })}
        </div>
    )
}
function mapState(st){
    return{ 
        myFavorites:st.myFavorites,
 }
}
export default connect(mapState)(Favourite)