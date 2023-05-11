import { useState, useContext } from "react";
import { GlobalContext } from "../Contextdata";

const Name = () => {
  const { setdisplayval, vehicledata, setvehicledata } = useContext(GlobalContext);
  const [firstnamecheck, setfirstnamecheck] = useState(true);
  const [lastnamecheck, setlastnamecheck] = useState(true);

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
    <div>
      <div>
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
        {!firstnamecheck && <span style={{ color: "red" }}>Please enter your first name</span>}
      </div>
      <div>
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
        {!lastnamecheck && <span style={{ color: "red" }}>Please enter your last name</span>}
      </div>
      <div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Name;
