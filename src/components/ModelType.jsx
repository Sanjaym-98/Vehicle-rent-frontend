import { useEffect } from "react"
import axios from 'axios';
import {  useContext } from "react";
import { GlobalContext } from "../Contextdata";
import { useState } from "react"
const ModelType=()=>{
    const [vehiclemodel, setvehiclemodel]=useState("")
    const {setdisplayval,vehicledata,setvehicledata}=useContext(GlobalContext);
    const [modelcheck,setmodelcheck]=useState(true)
    console.log(vehicledata.vehicleType)
    let wheel = vehicledata.wheels;
    let typeofvehicle =vehicledata.vehicleType;
useEffect(()=>{
axios.get(`http://localhost:5500/api/v1/vehicle/${wheel}/${typeofvehicle}`)
.then((result)=>{
    console.log(result)
    const types = result.data.data.map((model) => model.model);
    setvehiclemodel(types)
}).catch(e=>console.log(e.message))
},[])

const uniquemodel= [...new Set(vehiclemodel)]

const handleNext=()=>{
    if(!vehicledata.model){
        setmodelcheck(false)
    }else{
        setmodelcheck(true)
        setdisplayval(5)

    }
}
    return (
        <div>
            <h2>Select the Model</h2>
            <ul>
                {
                    uniquemodel.map((model,index)=>(
                        <div key={index}>
                            <input type="radio" id={`vehicle-model-${index}`} name="vehicle-model" value={model} checked={vehicledata.model === model}  onChange={(e)=>setvehicledata({...vehicledata,model:e.target.value})}/>
                            <label htmlFor={`vehicle-type-${index}`}>{model}</label>
                        </div>
                        
                    ))}
               
            </ul>
            
            {!modelcheck && <span style={{ color: "red" }}>Please select the option</span>}
            
            <div>
             <button onClick={()=>setdisplayval(3)}>Back</button>
             <button onClick={handleNext}>Next</button>
             </div>
        </div>
    )
}

export default ModelType