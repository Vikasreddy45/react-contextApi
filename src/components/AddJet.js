import React, { useContext, useState } from "react";
import { appContext } from "../context/context";

const AddJet = () =>{
    const [jet,setJet] = useContext(appContext)

    const [name,setName] = useState('')
    const [country,setCountry] = useState('')
    const [id,setId] = useState(0)

    function updateName(e){
        setName(e.target.value)
    }
    function updateCountry(e){
        setCountry(e.target.value)
    }

    const add = (e) =>{
        e.preventDefault()
        setJet((prev)=>{
            return [...prev,{name:name,country:country,id:id}]
        })
        setName('')
        setCountry('')
        var a = id+1
        setId(a)
    }

    return(
        <div className="addjet">
            <form onSubmit={add}>
                <input type='text' name='name' value={name} onChange={updateName} />
                <input type='text'  name ='country' value={country} onChange={updateCountry}/>
                <button>Add</button>
            </form>
        </div>
    )


}

export default AddJet;