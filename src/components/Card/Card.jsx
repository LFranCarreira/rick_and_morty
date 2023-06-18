import "./Card.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav,removeFav } from "../../Redux/actions/actions";
import { useEffect, useState } from "react";
function Card(props) {
   const {id,name,status,species,gender,origin,image,onClose,addFav,removeFav,myFavorites}=props
   const [isFav,setIsFav]=useState(false)
   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav(props);
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div class="card">
         {isFav ? (
      <button onClick={handleFavorite}>❤️</button>): 
      (<button onClick={handleFavorite}>🤍</button>)}
         <button class="btnCard" onClick={()=>onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt={name} />
      </div>
   );
}
function mapStateToProp(state){
   return{myFavorites:state.myFavorites}
}
function mapDispatchToProp(dispatch){
   return{
      addFav:(ch)=>dispatch(addFav(ch)),
      removeFav:(id)=>dispatch(removeFav(id))
   }
}

export default connect(mapStateToProp,mapDispatchToProp)(Card)