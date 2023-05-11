import { useEffect, useState } from "react"
import axios from 'axios'
import {  useContext } from "react";
import { GlobalContext } from "../Contextdata";
const VehicleType = () => {
  const [vehicleTypes, setVehicleTypes] = useState([])
  const {setdisplayval,vehicledata,setvehicledata}=useContext(GlobalContext);
  console.log(vehicledata.wheels)
let wheel = vehicledata.wheels
  useEffect(() => {
    axios.get(`http://localhost:5500/api/v1/vehicle/${wheel}`)
      .then((result) => {
        console.log(result);
        const types = result.data.data.map((vehicle) => vehicle.vehicleType);
        setVehicleTypes(types)
      }).catch(e=>console.log(e.message))
  }, [])

  const uniqueVehicleTypes = [...new Set(vehicleTypes)]

  return (
    <div>
      <h2>Vehicle Types</h2>
      <ul>
      {uniqueVehicleTypes.map((vehicleTyp, index) => (
  <div key={index}>
    <input type="radio" id={`vehicle-type-${index}`} name="vehicle-type" value={vehicleTyp} checked={vehicledata.vehicleType === vehicleTyp} onChange={(e)=>setvehicledata({...vehicledata,vehicleType:e.target.value})}/>
    <label htmlFor={`vehicle-type-${index}`}>{vehicleTyp}</label>
  </div>
))}

      </ul>
      <div>
        <button onClick={()=>setdisplayval(2)}>Back</button>
        <button onClick={()=>setdisplayval(4)}>Next</button>
      </div>
    </div>
  )
}

export default VehicleType
