import { ADD_FAV,REMOVE_FAV } from "./actions/types";

const initialState={
    myFavorites:[],
    numPage:1
} 

export default function rootReducer(state=initialState,{type,payload}){
    switch(type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites:[payload,...state.myFavorites]
            };
        case REMOVE_FAV:
            const newFavorites=state.myFavorites.filter((ch)=>{
                return ch.id!==payload})
            return {
                ...state,
                myFavorites:newFavorites,
            }
        default:
            return state;
    }
}