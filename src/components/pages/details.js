import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Details = () => {
    const [features, setFeatures] = useState([]);
    const [description,setDescription] = useState([]);
    const [attrib,setAttrib] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        fetch(`/items/${id}`)
            .then((res)=>res.json())
            .then((data)=>{
                data.author = (
                    {
                        "name" : "Juan Pablo",
                        "lastname" : "Suarez Soler"
                    }
                );
                //addTotal(data.results);
                console.log(data.attributes);
                setAttrib(data.attributes);
                setFeatures(data);
                console.log(features);
                if(data.error){
                    console.log("Hubo error");
                }else{
                    console.log("Busqueda con resultados");
                }
                
            });
            fetch(`/items/${id}/description`)
            .then((resd)=>resd.json())
            .then((datad)=>{
                datad.author = (
                    {
                        "name" : "Juan Pablo",
                        "lastname" : "Suarez Soler"
                    }
                );
                //addTotal(data.results);
                //console.log(datad);
                setDescription(datad);
                console.log(description);
                if(datad.error){
                    console.log("Hubo otro error");
                }else{
                    console.log("Busqueda con resultados");
                }
                
            });
    },[]);


    
    console.log("Entro");
    return(
    <div>


<div className="row detail">
<div key={features.id}>
<div className="column leftdet">
    <img className="imgdet" src={features.thumbnail} />
</div>
<div className="column rightdet">

{attrib.filter(attr => attr.id == "ITEM_CONDITION").map(filAttr => (<span className="att" key={filAttr.id}>  {filAttr.value_name}</span>))}
<span className="att"> - {features.sold_quantity} vendidos</span>
<p className="titdet">{features.title}</p>
<p className="pricedet">$ {features.price}</p>
<button className="butbuy">Comprar</button>
</div>      
</div>       
    </div>
    <div className="description">
    <p className="titledes">Descripción del producto</p>
    <p className="desc">{description.plain_text}</p>
    </div>


        


        

        

        </div>
    );
}

export default Details;

/*
        <h5>{features.title}</h5>
        <img src={features.thumbnail} />
        <h5>{description.plain_text}</h5>
        <h5>{features.sold_quantity}</h5>
        <h5>{features.price}</h5>
*/