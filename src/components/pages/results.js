import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import ship from '../assets/ic_shipping.png';
import './styles.css';

const Results = () => {
    const {text} = useParams();
    const [total, setTotal] = useState([]);

    const [categ,setCateg] = useState([]);

    useEffect(()=>{

        fetch("/sites/MLA/search?q="+text)
        .then((res)=>res.json())
        .then((data)=>{
            data.author = (
                {
                    "name" : "Juan Pablo",
                    "lastname" : "Suarez Soler"
                }
            );
            
             setTotal(data.results);
             setCateg(data.filters);

        });
    },[text]);
  

    return (
        <>
        {total ? (
        
        <div className="Details">
                <div className="bread">
    {categ.filter(attr => attr.id === "category").map(filAttr => (
        
filAttr.values.filter(attr2=>attr2).map(filAttr2=>(

    filAttr2.path_from_root.filter(attr3=>attr3).map((filAttr3,index)=>(
    <span key={filAttr3.id}>  {filAttr3.name}{
        filAttr2.path_from_root.length-1 !== index ? (
        <span>></span>
        ):(
            <></>
        )

        }</span>
    
        ))
    
))

))}
    </div>
        <div className="backres">
        {
            total.map((item,index)=>(
                
                    index < 4 ? (
<div key={item.id} className="row">
    

<div className="column left">
<Link className="linkres" to={"/items/"+item.id}><img className="imgresult" src={item.thumbnail} alt={item.index}/></Link>
    
</div>
<div className="column middle">
<span className="priceres">$ {item.price} </span><span>{item.shipping.free_shipping ? <img src={ship} alt="ship"/> : <></>}</span>
<p className="titleres"><Link className="linkres" to={"/items/"+item.id}>{item.title}</Link></p>
</div>
<div className="column right">
<p className="cityres">{item.address.city_name}</p>
</div>
                        
                
                
                
    </div>
                    
                    ):(
                    <div key={item.id}>
                    </div>
                    )
                

                
            ))
            }
            </div>
        </div>
        
    ):(
        
        <h1>Cargando...</h1>
    
    )}
    </>
    );
        
    
};
export default Results;

