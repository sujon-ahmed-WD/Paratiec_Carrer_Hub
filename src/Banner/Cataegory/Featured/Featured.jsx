import { useEffect, useState } from "react";
import Singlejob from "./Singlejob/Singlejob";

 
const Featured = () => {

    const[jobs,setjob]=useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res =>res.json())
        .then(data=>setjob(data))
    })
    return (
        <div>
            <div className="text-center">
                 <h1 className="text-4xl text-green-500 text-center">Featured Jobs :{jobs.length}</h1>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, accusantium.</p>
            </div>
            <div>
            {
                jobs.map(suj=><Singlejob   key={suj.id} suj={suj}></Singlejob>)
            }
            </div>
        </div>
    );
};

export default Featured;