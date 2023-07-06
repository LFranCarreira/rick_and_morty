import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css"
import {Link} from "react-router-dom"

export default function NavBar({onSearch,logout}){
    return(
        <div className={style.nav}>
            <Link className={style.link} to="/home">
                <div>Home</div>
            </Link>
            <Link className={style.link} to="/about">
                <div>About</div>
            </Link>
            <Link className={style.link} to ="/favourites">
                <div>Favourites</div>
            </Link>
            <Link className={style.link} to="/create">
                <div>Create</div>
            </Link>
            <SearchBar onSearch={onSearch} />
            <button onClick={logout}>Log out</button>
        </div>
    )
}