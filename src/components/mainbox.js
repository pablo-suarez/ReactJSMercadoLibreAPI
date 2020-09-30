import React, { useState } from 'react';
import logo from './assets/Logo_ML.png';
import search from './assets/ic_Search.png';
import './styles.css';
import Results from './pages/results';

const MainBox = () => {
    const [query,setQuery] = useState("");
    
    const explore = (data) =>{

    };
    return(
    <div className="mainbox">
        <img src={logo} alt="logo"/>
        <input type="text" className="inputbox" placeholder="Nunca dejes de buscar" value={query} onChange={(e) => {setQuery(e.target.value)}}/>
        <button type="submit" onClick={()=>explore(query)}><img src={search} alt="Buscar"/></button>
    </div> 
    );
};

export default MainBox;