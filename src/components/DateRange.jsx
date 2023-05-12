import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext } from "react";
import { GlobalContext } from "../Contextdata";
import axios from 'axios';
import './DateRange.css'

const DateRange = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { setdisplayval, vehicledata, setvehicledata } = useContext(GlobalContext);
  const [startdatecheck, setstartdatecheck] = useState(true) // for validating
  const [enddatecheck, setenddatecheck] = useState(true);
  const [success, setsuccess] = useState(true) //for printing success msg
  const [failed, setfailed] = useState(true)

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setvehicledata({ ...vehicledata, booking: { ...vehicledata.booking, startDate: date.toISOString() } })
    resetMessage()
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setvehicledata({ ...vehicledata, booking: { ...vehicledata.booking, endDate: date.toISOString() } })  //converting date to isodate
    resetMessage()
  };

  const resetMessage = () => {
    setsuccess(true)
    setfailed(true)
  }

  console.log(vehicledata.booking.endDate)

  console.log(vehicledata)
  const handlesubmit = () => {
    if (!vehicledata.booking.startDate) {
      setstartdatecheck(false)
    } else if (!vehicledata.booking.endDate) {
      setenddatecheck(false)
    } else {
      setstartdatecheck(true)
      setenddatecheck(true)

      axios.post("http://localhost:5500/api/v1/vehicle", vehicledata)
        .then((result) => {
          console.log(result)
          console.log(vehicledata)
          setsuccess(false)
        }).catch((error) => {
          if (error.response) {
            console.log(error.response.data)  //if we get the err.resp , then we are printing the custom error message
            setfailed(false)
          } else {
            console.log(error.message) //this will print the message of err msg for what it has occured.
          }

        })
    }
  }

  return (
    <div className="date-range-form">
      <div className="date-range-container">
        <h2 >Select Date Range</h2>
        <div className="date-range-picker">
          <label>Start Date:</label>
          <DatePicker selected={startDate} onChange={handleStartDateChange} />
        </div>
        {!startdatecheck && <span className="date-range-error" style={{ color: "red" }}>Please select the start date</span>}
        <div className="date-range-picker">
          <label>End Date:</label>
          <DatePicker selected={endDate} onChange={handleEndDateChange} />
        </div>
        {!enddatecheck && <span className="date-range-error" style={{ color: "red" }}>Please select the end date</span>}
        <div className="date-range-buttons">
          <button className="date-range-button" onClick={() => setdisplayval(4)}>Back</button>
          <button className="date-range-button" onClick={handlesubmit}>Submit</button>
        </div>
        <div className="date-range-message">
          {!success && <span style={{ color: "green" }}>Congratulation! Vehicle Booked</span>}
          {!failed && <span style={{ color: "red" }}>Sorry! The Vehicle has been booked</span>}
        </div>
      </div>
    </div>
  );
};

export default DateRange;
