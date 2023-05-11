import {  useContext } from "react";
import { GlobalContext } from "../Contextdata";
const Name=()=>{
    const {setdisplayval,vehicledata,setvehicledata}=useContext(GlobalContext)
    return (
        <div>
             <div>
             <label htmlFor="First Name">First Name</label>
             <input type="text" value={vehicledata.name.first} onChange={(e)=>setvehicledata({
      ...vehicledata,
      name: { ...vehicledata.name, first: e.target.value }})}/>
             </div>
             <div>
             <label htmlFor="First Name">Last Name</label>
             <input type="text" value={vehicledata.name.last} onChange={(e)=>setvehicledata({
      ...vehicledata,
      name: { ...vehicledata.name, last: e.target.value }})}/>
             </div>
             <div>
             <button onClick={()=>setdisplayval(2)}>Next</button>
             </div>
        </div>
    )
}

export default Name;