import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import './styles.css';

const Results = () => {
    const {text} = useParams();
    const [total, setTotal] = useState([]);
    const [seg,setSeg] = useState(0);
    console.log("llego el :"+ text);
    useEffect(()=>{
        console.log(text+" Entro a useffect");
        fetch("/sites/MLA/search?q="+text)
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
                console.log(data.results);

            //console.log(total);
            /*if(data.results.length!=0 && initial){
                //console.log("Buscar algo");
                setTotal(data.results);
                setInitial(false);
                //console.log(initial);
                console.log(total);
            }else{
                //console.log("Buscar algo");

            }*/
            
        });
    },[]);
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
//console.log(text);
    return text!=undefined ? (
        
        <div className="Details">
        <div className="backres">
        {
            total.map((item,index)=>(
                
                    index < 4 ? (
<div className="row">
<div key={item.id}></div>
<div className="column left">
    <img className="imgresult" src={item.thumbnail} />
</div>
<div className="column middle">
<p className="priceres">$ {item.price}</p>
<p className="titleres"><Link to={"/items/"+item.id}>{item.title}</Link></p>
</div>
<div className="column right">
<p className="cityres">{item.address.city_name}</p>
</div>
                        
                
                
                
    </div>
                    
                    ):(
                    <>
                    </>
                    )
                

                
            ))
            }
            </div>
        </div>
        
    ):(
        <>
        
    </>
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

/*
            {
            total.map((item)=>{
                return(
                    <div key={item.id}>
                        <img src={item.thumbnail} />
                <h5><Link to={"/items/"+item.id}>{item.title}</Link></h5>
                <h5>{item.price}</h5>
                <h5>{item.address.city_name}</h5>
                    </div>
                );
            })
            }
*/
/*
                        <h5 key={item.id}></h5>
                        <img src={item.thumbnail} />
                <h5><Link to={"/items/"+item.id}>{item.title}</Link></h5>
                <h5>{item.price}</h5>
                <h5>{item.address.city_name}</h5>
*/