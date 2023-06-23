import { ADD_FAV,REMOVE_FAV,ADD_CHAR,REM_CHAR,FILTER,RESET,FILTER_AZ,PREV,NEXT } from "./actions/types";

const initialState={
    characters:[],
    allFavorites:[],
    myFavorites:[],
    numPage:1
} 

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
      case ADD_CHAR:
        if (Array.isArray(payload)) {
          return {
            ...state,
            characters: [...state.characters, ...payload],
          };
        }
  
        return {
          ...state,
          characters: [payload, ...state.characters],
        };
      case REM_CHAR:
        const newCharacters = state.characters.filter((ch) => {
          return ch.id !== payload;
        });
        return {
          ...state,
          characters: newCharacters,
        };
      case ADD_FAV:
        return {
          ...state,
          myFavorites: [payload, ...state.myFavorites],
          allFavorites: [payload, ...state.myFavorites],
        };
      case REMOVE_FAV:
        const newFavorites = state.myFavorites.filter((ch) => {
          return ch.id !== payload;
        });
        return {
          ...state,
          myFavorites: newFavorites,
          allFavorites: newFavorites,
        };
      case FILTER:
        const newFilter = state.allFavorites.filter(
          (ch) => ch.gender === payload
        );
        return {
          ...state,
          myFavorites: newFilter,
        };
      case FILTER_AZ:
        const newFilterAtoZ = state.allFavorites.sort((a, b) => {
          return payload === "A" ? a.id - b.id : b.id - a.id;
        });
        return {
          ...state,
          myFavorites: newFilterAtoZ,
        };
      case RESET:
        return {
          ...state,
          myFavorites: [...state.allFavorites],
        };
      case PREV:
        return {
          ...state,
          numPage: state.numPage - 1,
        };
      case NEXT:
        return {
          ...state,
          numPage: state.numPage + 1,
        };
      default:
        return state;
    }
  }