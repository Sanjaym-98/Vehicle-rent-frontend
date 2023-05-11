import { useEffect } from "react"
import { useContext } from "react";
import { GlobalContext } from "../Contextdata";

const WheelType = () => {
    const { setdisplayval ,vehicledata,setvehicledata} = useContext(GlobalContext)

    return (
        <div>
            <div>
                <h2>Select the Wheel Type</h2>
            </div>
            <div>
                <input type="radio" id="2wheeler" name="wheeltype" value={2} checked={vehicledata.wheels == 2} onChange={(e)=>setvehicledata({...vehicledata,wheels:e.target.value})}/>
                <label htmlFor="2wheeler">2 Wheeler</label>
            </div>
            <div>
                <input type="radio" id="4wheeler" name="wheeltype" value={4}  checked={vehicledata.wheels == 4} onChange={(e)=>setvehicledata({...vehicledata,wheels:e.target.value})} />
                <label htmlFor="4wheeler">4 Wheeler</label>
            </div>
            <div>
                <button onClick={() => setdisplayval(1)}>Back</button>
                <button onClick={() => setdisplayval(3)}>Next</button>
            </div>
        </div>
    )
}

export default WheelType
