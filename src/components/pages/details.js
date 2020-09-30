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


    
    console.log(id);
    return(
    <div>
        <h5>{features.title}</h5>
        <img src={features.thumbnail} />
        <h5>{description.plain_text}</h5>
        <h5>{features.sold_quantity}</h5>
        <h5>{features.price}</h5>

        {attrib.filter(attr => attr.id == "ITEM_CONDITION").map(filAttr => (

        <h5 key={filAttr.id}>  {filAttr.value_name}</h5>

      ))}
        

        </div>
    );
}

export default Details;