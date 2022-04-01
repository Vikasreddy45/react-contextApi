import React, { useContext } from "react";
import { appContext } from "../context/context";
import Jet from './Jet'

const JetList = ()=>{
    const [jet,setJet] = useContext(appContext)

    return(
        <div className="list">
        {jet.map((ele)=>{
            return(
                <Jet jetname= {ele.name} country = {ele.country} />
            )
        })}
        </div>
    )

}
export default JetList;