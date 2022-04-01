import React, { useContext } from "react";
import { appContext } from "../context/context";

const Nav = ()=>{
    const [jet,setJet] = useContext(appContext);

    return(
        <div className="nav">
            <h2>Jet List</h2>
            <p>Total Number of Jets : {jet.length}</p>
        </div>
    )
}
export default Nav;