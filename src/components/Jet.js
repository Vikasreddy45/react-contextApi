import React from "react";


const Jet = ({jetname,country})=>{
    return(
        <div className="jet">
            <h3>{jetname}</h3>
            <p>{country}</p>
        </div>
    )
}

export default Jet;