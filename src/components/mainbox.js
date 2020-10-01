import React, { useState } from 'react';
import logo from './assets/Logo_ML.png';
import search from './assets/ic_Search.png';
import './styles.css';
import {Link} from 'react-router-dom';




const MainBox = () => {

    const [query,setQuery] = useState("");

    return(
        <>
    <div className="mainbox">
        <img src={logo} alt="logo"/>
        <input type="text" className="inputbox" placeholder="Nunca dejes de buscar" value={query} onChange={(e) => {setQuery(e.target.value)}}/>
        <Link to={"/search/"+query}><button type="submit" onClick={()=>{}}><img src={search} alt="Buscar"/></button></Link>
    </div>

    </> 
    );
};

export default MainBox;