import React,{useState,useEffect} from 'react';

const Results = () => {
    const [total, addTotal] = useState([]);
    useEffect(()=>{
        fetch("/sites/MLA/search?q="+"xbox")
            .then((res)=>res.json())
            .then((data)=>{
                data.author = (
                    {
                        "name" : "Juan Pablo",
                        "lastname" : "Suarez Soler"
                    }
                );
                //addTotal(data.results);
                console.log(data);
                if(data.results.length==0){
                    console.log("Buscar algo");
                }else{
                    console.log("Busqueda con resultados");
                }
                
            });
    },[]);
    const pruebita = (query) => {
        console.log(query);
    };
    const printData = (query) => {
        fetch("/sites/MLA/search?q="+query)
        .then((res)=>res.json())
        .then((data)=>{
            data.author = (
                {
                    "name" : "Juan Pablo",
                    "lastname" : "Suarez Soler"
                }
            );
            addTotal(data.results);
            console.log(data);
            if(data.results.length==0){
                console.log("Buscar algo");
            }else{
                console.log("Busqueda con resultados");
            }
            
        });
        };
    return (
        
        <div className="Details">
        <div>
            Diseno de breadcrum
        </div>
            {
            total.map((item)=>{
                return(
                    <div>
                        <img src={item.thumbnail} />
                <h5>{item.title}</h5>
                <h5>{item.price}</h5>
                <h5>{item.address.city_name}</h5>
                    </div>
                );
            })
            }
        </div>
        
    );
        
    
};
export default Results;

