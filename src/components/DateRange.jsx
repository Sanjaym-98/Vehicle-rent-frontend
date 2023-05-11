import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {  useContext } from "react";
import { GlobalContext } from "../Contextdata";
import axios from 'axios'

const DateRange = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const {setdisplayval,vehicledata,setvehicledata}=useContext(GlobalContext)

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setvehicledata({...vehicledata,booking:{...vehicledata.booking,startDate:date.toISOString()}})
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setvehicledata({...vehicledata,booking:{...vehicledata.booking,endDate:date.toISOString()}})
  };
  console.log(vehicledata.booking.endDate)

  console.log(vehicledata)
const handlesubmit=()=>{
  axios.post("http://localhost:5500/api/v1/vehicle",vehicledata)
  .then((result)=>{
    console.log(result)
    console.log(vehicledata)
  }).catch((res)=>{
    console.log(res.message)
  })
}
  return (
    <div>
      <h2>Select Date Range</h2>
      <div>
        <label>Start Date:</label>
        <DatePicker selected={startDate} onChange={handleStartDateChange} />
      </div>
      <div>
        <label>End Date:</label>
        <DatePicker selected={endDate} onChange={handleEndDateChange} />
      </div>
      <div>
             <button onClick={()=>setdisplayval(4)}>Back</button>
             <button onClick={handlesubmit}>Submit</button>
             </div>
    </div>
  );
};

export default DateRange;
