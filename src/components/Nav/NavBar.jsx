import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css"
import {Link} from "react-router-dom"

export default function NavBar({onSearch,logOut}){
    return(
        <div className={style.nav}>
            <Link className={style.link} to="/home">
                <div>Home</div>
            </Link>
            <Link className={style.link} to="/about">
                <div>About</div>
            </Link>
            <Link className={style.link} to ="/Favourites">
                <div>Favourites</div>
            </Link>
            <SearchBar onSearch={onSearch} />
            <button onClick={logOut}>Log out</button>
        </div>
    )
}