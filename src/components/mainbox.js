import React, { useState,useEffect } from 'react';
import logo from './assets/Logo_ML.png';
import search from './assets/ic_Search.png';
import './styles.css';
import Results from './pages/results';
import {Link} from 'react-router-dom';

const MainBox = () => {

    const [query,setQuery] = useState("");
    const [total, setTotal] = useState([]);
    const [initial, setInitial] = useState(true);
    const [seg,setSeg] = useState(0);
    const [categ,setCateg] = useState([]);
   const printBread = ()=>{
        console.log(query);
        fetch("/sites/MLA/search?q="+query)
        .then((res)=>res.json())
        .then((data)=>{
            data.author = (
                {
                    "name" : "Juan Pablo",
                    "lastname" : "Suarez Soler"
                }
            );
            
            
            console.log(data.filters);

            setCateg(data.filters);


            //console.log(total);

            
        });
    };
    const bread =()=>{

    }


    return(
        <>
    <div className="mainbox">
        <img src={logo} alt="logo"/>
        <input type="text" className="inputbox" placeholder="Nunca dejes de buscar" value={query} onChange={(e) => {setQuery(e.target.value)}}/>
        <Link to={"/search/"+query}><button type="submit" onClick={()=>{printBread(query)}}><img src={search} alt="Buscar"/></button></Link>
    </div>
    <div>
    {categ.filter(attr => attr.id == "category").map(filAttr => (
        
filAttr.values.filter(attr2=>attr2).map(filAttr2=>(

    filAttr2.path_from_root.filter(attr3=>attr3).map((filAttr3,index)=>(
    <span key={filAttr3.id}>  {filAttr3.name}{
        filAttr3.length-1!=index ?(
            <span>></span>
        ):(
            <></>
        )
        
        }</span>
    
        ))
    
))

))}
    </div>
    </> 
    );
};

export default MainBox;