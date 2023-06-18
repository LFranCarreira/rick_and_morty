import React from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import { removeFav } from "../../Redux/actions/actions";
function Favourite({myFavorites,onClose,removeFav}){
    function closeFavorite(id){
        onClose(id)
        removeFav(id)
    }
    return(
        <div>
        {myFavorites && 
        myFavorites.map((element,index)=>{
        return(
          <Card 
            key={index}
            id={element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            origin={element.origin}
            image={element.image}
            onClose={()=>closeFavorite(element.id)}
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
function mapDispatch(d){
    return{ 
        removeFav:(id)=>d(removeFav(id))
 }
}
export default connect(mapState,mapDispatch)(Favourite)