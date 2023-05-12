import { useState, useContext } from "react";
import { GlobalContext } from "../Contextdata";
import './name.css'
const Name = () => {
  const { setdisplayval, vehicledata, setvehicledata } = useContext(GlobalContext); //taking the variable from context and using for updating value here
  const [firstnamecheck, setfirstnamecheck] = useState(true); //first name validating
  const [lastnamecheck, setlastnamecheck] = useState(true); //last name validating

  const handleNext = () => {
    if (!vehicledata.name.first) {
      setfirstnamecheck(false);
    } else if (!vehicledata.name.last) {
      setlastnamecheck(false);
    } else {
      setfirstnamecheck(true)
      setlastnamecheck(true);
      setdisplayval(2);
    }
  };

  return (
    <div className="name-form">
      <div className="name-container">
        <div className="name-input">
          <label htmlFor="First Name">First Name</label>
          <input
            type="text"
            value={vehicledata.name.first}
            onChange={(e) =>
              setvehicledata({
                ...vehicledata,
                name: { ...vehicledata.name, first: e.target.value },
              })
            }
          />
          {!firstnamecheck && <span className="name-error">Please enter your first name</span>}
        </div>
        <div className="name-input">
          <label htmlFor="Last Name">Last Name</label>
          <input
            type="text"
            value={vehicledata.name.last}
            onChange={(e) =>
              setvehicledata({
                ...vehicledata,
                name: { ...vehicledata.name, last: e.target.value },
              })
            }
          />
          {!lastnamecheck && <span className="name-error">Please enter your last name</span>}
        </div>
        <div>
          <button className="name-button" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Name;

