import React, { useState } from "react"
import "./Form.css"
import	{Link} from "react-router-dom"
import Validation from "../Validation/Validation"
export default function Form(props){
    const [userData,setUserData]=useState({
        email:"",
        password:""
    })

    const [errors,setErrors]=useState({
        email:"",
        password:""
    })
    
    const handleInputChange=(event)=>{
        const {name,value}=event.target;
        setUserData({
            ...userData,
            [name]:value
        })
        
        setErrors(
            Validation({
                ...userData,
                [name]:value
            })
        )
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        props.login(userData)
     }

    return(
    <div className="container">
        <img src="" alt="RickAndMorty"/>
        <br/>
        <form onSubmit={handleSubmit}>
            <label className="textos">Email: </label>
            <br/>
            <input 
            name="email" 
            type="text"
            value={userData.email}
            onChange={handleInputChange}
            />
            <p className="error">{errors.email}</p>
            <br/>
            <label>Password: </label>
            <br/>
            <input
            name="password"
            type="password"
            value={userData.password}
            onChange={handleInputChange}
            />
            <p className="error">{errors.password}</p>
            <hr/>
            <Link to="/home">
              <button className="btnIngresar">Submit</button>
            </Link>
        </form>
    </div>
    )
}