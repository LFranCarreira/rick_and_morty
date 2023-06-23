import { ADD_FAV,REMOVE_FAV,ADD_CHAR,REM_CHAR,FILTER,RESET,FILTER_AZ,PREV,NEXT } from "./types";


export function addFav(char){
    return{
        type:ADD_FAV,
        payload:char,
    }
}
export function removeFav(id){
    return{
        type:REMOVE_FAV,
        payload:id,
    }
}
export function addChar(char){
    return{
        type:ADD_CHAR,
        payload:char
    }
}
export function remChar(id){
    return{
        type:REM_CHAR,
        payload:id
    }
}
export function filterGender(gender){
    return{
        type:FILTER,
        payload:gender
    }
}
export function filterAZ(aToZ){
    return{
        type:FILTER_AZ,
        payload:aToZ
    }
}
export function reset(){
    return{
        type:RESET
    }
}
export function prev(){
    return{
        type:PREV
    }
}
export function next(){
    return{
        type:NEXT
    }
}