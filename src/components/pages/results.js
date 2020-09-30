import React,{useState,useEffect} from 'react';



const Results = ({ data : {total},}) => {
    const [seg,setSeg] = useState(0);
    if(total.length!=0){
        console.log(total);
    }else{
        console.log("Sin Datos");
    }
  /*  setTimeout(()=>{
        //console.log('Hola mundo');
        if(total){
            console.log("Ya cargo");
        }else{
            console.log("Cargando...")
        }
        //console.log(total);
        setSeg(seg+2);
        console.log(seg+"segundos");
    },2000)*/
    //console.log(total);
   // console.log(total);
   /* useEffect(()=>{
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
    };*/

    return total ? (
        
        <div className="Details">
        <div>
            Diseno de breadcrum
        </div>
        
            {
            total.map((item)=>{
                return(
                    <div key={item.id}>
                        <img src={item.thumbnail} />
                <h5>{item.title}</h5>
                <h5>{item.price}</h5>
                <h5>{item.address.city_name}</h5>
                    </div>
                );
            })
            }
        </div>
        
    ):(
        <div>Realiza una busqueda</div>
    );
        
    
};
export default Results;

/*
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
*/