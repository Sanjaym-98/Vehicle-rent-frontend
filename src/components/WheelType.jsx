import { useEffect, useState } from "react"
import { useContext } from "react";
import { GlobalContext } from "../Contextdata";
import './WheelType.css'
const WheelType = () => {
    const { setdisplayval, vehicledata, setvehicledata } = useContext(GlobalContext)
    const [wheelcheck, setwheelcheck] = useState(true); //validating wheel to show error message or not
    const handleNext = () => {
        if (!vehicledata.wheels) {
            setwheelcheck(false)
        } else {
            setwheelcheck(true)
            setdisplayval(3)
        }
    }
    return (
        <div className="wheel-form">

            <div className="wheel-container">
                <div className="wheel-type">
                    <h2>Select the Wheel Type</h2>
                </div>
                <div>
                    <input type="radio" id="2wheeler" name="wheeltype" value={2} checked={vehicledata.wheels == 2} onChange={(e) => setvehicledata({ ...vehicledata, wheels: e.target.value })} />  
                    <label htmlFor="2wheeler">2 Wheeler</label>
                </div>
                <div>
                    <input type="radio" id="4wheeler" name="wheeltype" value={4} checked={vehicledata.wheels == 4} onChange={(e) => setvehicledata({ ...vehicledata, wheels: e.target.value })} />
                    <label htmlFor="4wheeler">4 Wheeler</label>
                </div>
                <div className="wheel-error">
                    {!wheelcheck && <span>Please select one option</span>}
                </div>
                <div className="wheel-buttons">
                    <button className="wheel-button" onClick={() => setdisplayval(1)}>Back</button> {/*on click this will update the stepper val ,based on this particular question will be shown*/}
                    <button className="wheel-button" onClick={handleNext}>Next</button>
                </div>
            </div> 
        </div>
    )
}

export default WheelType


