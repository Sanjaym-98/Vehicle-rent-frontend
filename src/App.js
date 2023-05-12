import './App.css';
import WheelType from './components/WheelType';
import VehicleType from './components/VehicleType';
import ModelType from './components/ModelType';
import DateRange from './components/DateRange';
import Name from './components/Name';
import {Stepper, StepLabel,Step } from '@mui/material';
import { GlobalContext } from './Contextdata';
import { useContext } from 'react';
function App() {
const {displayval} =useContext(GlobalContext) //displayval is getting updated from each component

  function display(displayval){  // based on displayval , what needs to be shown is decided.
    switch(displayval){
      case 1:
        return <Name/>
      case 2:
        return <WheelType/>
      case 3:
        return <VehicleType/>
      case 4:
        return <ModelType/>
      case 5:
        return <DateRange/>
      
    }
  }
  return (
    <div className="stepper-container">
      <Stepper activeStep={displayval-1} orientation='horizontal'>
        <Step>
          <StepLabel></StepLabel>  
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
    </Stepper>
    <h1 className='app_name'>Vehicle Booking App</h1>
    {display(displayval)}
    </div>
  );
}

export default App;
