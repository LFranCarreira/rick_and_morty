import React,{useState, useEffect} from 'react';
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


function App() {
   
   const [characters,setCharacters]=useState([]);
   const [access,setAccess]=useState(false)
   const EMAIL='ejemplo@gmail.com'
   const PASSWORD='unaPassword'
   const navigate=useNavigate()
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate("/");
   }, [access]);
   function onSearch(id) {
      axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist=characters.find((ch)=>ch.id===data.id);
            if(exist){
               alert("ya existe")
            }else{
               setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id){
      setCharacters((oldChars) => {
         return oldChars.filter((ch)=>ch.id!==id)
      });
   }

   const {pathname}=useLocation()
   return (
      <div className='App'>
         {pathname==="/"?null:<NavBar onSearch={onSearch} />}
         
         <Routes>
            <Route path='/' element={<Form login={login}/>}></Route>
            <Route path='/home' 
            element={<Cards onClose={onclose} />}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/detail/:id" element={<Detail/>}></Route>
            <Route path="/favourites" element={<Favourite onClose={onclose} />}></Route>
            <Route path="*" element={<Error/>}></Route>
         </Routes>
         <Cards onClose={onClose} characters={characters}  />
      </div>
   );
}

export default App;
