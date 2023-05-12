import { useEffect, useState } from "react"
import axios from 'axios'
import { useContext } from "react";
import { GlobalContext } from "../Contextdata";
import './VehicleType.css'
const VehicleType = () => {
  const [vehicleTypes, setVehicleTypes] = useState([])
  const { setdisplayval, vehicledata, setvehicledata } = useContext(GlobalContext);
  const [vehicletypecheck, setvehicletypecheck] = useState(true)
  console.log(vehicledata.wheels)
  let wheel = vehicledata.wheels
  useEffect(() => {
    axios.get(`http://localhost:5500/api/v1/vehicle/${wheel}`)
      .then((result) => {
        console.log(result);
        const types = result.data.data.map((vehicle) => vehicle.vehicleType);
        setVehicleTypes(types)
      }).catch(e => console.log(e.message))
  }, [])

  const uniqueVehicleTypes = [...new Set(vehicleTypes)]
  const handleNext = () => {
    if (!vehicledata.vehicleType) {
      setvehicletypecheck(false)
    } else {
      setvehicletypecheck(true)
      setdisplayval(4)
    }
  }
  return (
    <div className="vehicle-type-form">
      <div className="vehicle-type-container">
        <h2>Vehicle Types</h2>
        <ul className="vehicle-type-list">
          {uniqueVehicleTypes.map((vehicleTyp, index) => (
            <div key={index}>
              <input type="radio" id={`vehicle-type-${index}`} name="vehicle-type" value={vehicleTyp} checked={vehicledata.vehicleType === vehicleTyp} onChange={(e) => setvehicledata({ ...vehicledata, vehicleType: e.target.value })} />
              <label htmlFor={`vehicle-type-${index}`}>{vehicleTyp}</label>
            </div>
          ))}

        </ul>
        {!vehicletypecheck && <span className="vehicle-type-error" style={{ color: "red" }}>Please select one option</span>}
        <div className="vehicle-type-buttons">
          <button className="vehicle-type-button" onClick={() => setdisplayval(2)}>Back</button>
          <button className="vehicle-type-button" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default VehicleType
