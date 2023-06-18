import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css"
import {Link} from "react-router-dom"

export default function NavBar({onSearch}){
    return(
        <div className="nav">
            <Link to="/home">
                <button className="btnNav">Home</button>
            </Link>
            <Link to="/about">
                <button className="btnNav">About</button>
            </Link>
            <Link to ="/Favourites">
                <button className="btnNav">Favourites</button>
            </Link>
            <SearchBar onSearch={onSearch} />
            <Link to="/">
                <button className="logOut">Log out</button>
            </Link>
        </div>
    )
}