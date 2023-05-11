import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {  useContext } from "react";
import { GlobalContext } from "../Contextdata";
import axios from 'axios'

const DateRange = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const {setdisplayval,vehicledata,setvehicledata}=useContext(GlobalContext);
  const [startdatecheck,setstartdatecheck]=useState(true)
  const [enddatecheck,setenddatecheck]=useState(true);
  const [success,setsuccess]=useState(true)
  const [failed,setfailed]=useState(true)
  
  const handleStartDateChange = (date) => {
    setStartDate(date);
    setvehicledata({...vehicledata,booking:{...vehicledata.booking,startDate:date.toISOString()}})
    resetMessage()
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setvehicledata({...vehicledata,booking:{...vehicledata.booking,endDate:date.toISOString()}})
    resetMessage()
  };

  const resetMessage = () => {
    setsuccess(true)
    setfailed(true)
  }

  console.log(vehicledata.booking.endDate)

  console.log(vehicledata)
const handlesubmit=()=>{
  if(!vehicledata.booking.startDate){
    setstartdatecheck(false)
  }else if(!vehicledata.booking.endDate){
    setenddatecheck(false)
  }else{
    setstartdatecheck(true)
    setenddatecheck(true)
  
  axios.post("http://localhost:5500/api/v1/vehicle",vehicledata)
  .then((result)=>{
    console.log(result)
    console.log(vehicledata)
    setsuccess(false)
  }).catch((error)=>{
    if(error.response){
      console.log(error.response.data)
      setfailed(false)
    }else{
      console.log(error.message)
    }
    
  })
}
}


  return (
    <div>
      <h2>Select Date Range</h2>
      <div>
        <label>Start Date:</label>
        <DatePicker selected={startDate}  onChange={handleStartDateChange} />
      </div>
      {!startdatecheck && <span style={{ color: "red" }}>Please select the start date</span>}
      <div>
        <label>End Date:</label>
        <DatePicker selected={endDate}  onChange={handleEndDateChange} />
      </div>
      {!enddatecheck && <span style={{ color: "red" }}>Please select the end date</span>}
      <div>
             <button onClick={()=>setdisplayval(4)}>Back</button>
             <button onClick={handlesubmit}>Submit</button>
             </div>
             <div>
             {!success && <span style={{ color: "green" }}>Congratulation! Your Vehicle has been Booked, Have a Safe Journey.</span>}
             {!failed && <span style={{ color: "red" }}>Sorry! The Vehicle has been booked, Check for other dates.</span>}
             </div>
    </div>
  );
};

export default DateRange;
