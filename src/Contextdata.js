import React,{ useState } from "react";
import App from './App'

export const GlobalContext =React.createContext()
const Contextdata=()=>{
    const [displayval, setdisplayval]=useState(1)
    const [vehicledata, setvehicledata]=useState({name:{first:"",last:""},vehicleType:"",wheels:0,model:"",booking:{startDate:"",endDate:""}})
    return(
        <div>
            <GlobalContext.Provider value={{displayval, setdisplayval, vehicledata, setvehicledata}}>
            <App/>
            </GlobalContext.Provider>
        </div>
    )
}

export default Contextdata;