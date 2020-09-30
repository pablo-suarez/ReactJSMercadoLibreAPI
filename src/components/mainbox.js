import React, { useState,useEffect } from 'react';
import logo from './assets/Logo_ML.png';
import search from './assets/ic_Search.png';
import './styles.css';
import Results from './pages/results';

const MainBox = () => {

    const [query,setQuery] = useState("");
    const [total, setTotal] = useState([]);
    const [initial, setInitial] = useState(true);
    const [seg,setSeg] = useState(0);
    useEffect(()=>{
        printData(query);
    },[]);
    const printData = (query) => {
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
            
            
            //console.log(data.results);
            setTotal(data.results);


            //console.log(total);
            if(data.results.length!=0 && initial){
                //console.log("Buscar algo");
                setTotal(data.results);
                setInitial(false);
                //console.log(initial);
                //console.log(total);
            }else{
                //console.log("Buscar algo");

            }
            
        });
        
        };

    return(
        <>
    <div className="mainbox">
        <img src={logo} alt="logo"/>
        <input type="text" className="inputbox" placeholder="Nunca dejes de buscar" value={query} onChange={(e) => {setQuery(e.target.value)}}/>
        <button type="submit" onClick={()=>printData(query)}><img src={search} alt="Buscar"/></button>
    </div>
    <Results data={{total}}/>
    </> 
    );
};

export default MainBox;