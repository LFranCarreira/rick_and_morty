import "./Card.css"
import { Link } from "react-router-dom";
export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div class="card">
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
