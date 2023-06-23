import {useState, useEffect} from 'react';
import axios from "axios"
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/NavBar.jsx';
import { Routes,Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail.jsx';
import About from "./components/About/About.jsx"
import Form from "./components/Form/Form.jsx"
import Error from "./components/ErrorNotFound/Error.jsx"
import Favourite from './components/Favourites/Favourite';
import { useDispatch,useSelector } from 'react-redux';
import { removeFav,addChar,remChar } from './Redux/actions/actions';


export default function App() {
   const navigate=useNavigate()
   const [access,setAccess]=useState(false)
   const EMAIL='ejemplo@gmail.com'
   const PASSWORD='unaPassword'
   const dispatch=useDispatch()
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         return navigate('/home');
      }
      return alert("Datos incorrectos")
   }
   useEffect(() => {
      !access && navigate("/");
    }, [access]);

   function logOut(){
      setAccess(false);
      navigate("/")
   }
   const {characters}=useSelector((state)=>state)
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
         ({ data }) => {
         if (data.name) {
            const char=characters.find((ch)=>ch.id===Number(id));
            if (char) return alert(`El personaje con la id: ${id}, ya existe`)
            dispatch(addChar(data))
            } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id){
      dispatch(remChar(Number(id)))
      dispatch(removeFav(Number(id)))
   }
   
   const {pathname}=useLocation()
   useEffect(() => {
      const requests = [];
      for (let num = 22; num < 24; num++) {
        requests.push(
          axios.get(`https://rickandmortyapi.com/api/character?page=${num}`)
        );
      }
      Promise.all(requests)
        .then((results) => {
          let newCharacters = [];
          results.map(
            (chars) => (newCharacters = [...newCharacters, ...chars.data.results])
          );
          dispatch(addChar([...newCharacters]));
        })
        .catch((error) => {});
    }, []);

   return (
      <>
         {pathname==="/"?null:<NavBar logOut={logOut} onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form login={login}/>}></Route>
            <Route path='/home' 
            element={<Cards onClose={onClose} 
            />}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/detail/:id" element={<Detail/>}></Route>
            <Route path="/favourites" element={<Favourite onClose={onClose} />}></Route>
            <Route path="*" element={<Error/>}></Route>
         </Routes>
      </>
   );
}
