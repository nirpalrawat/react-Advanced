import React from 'react'
import usestate from '../Usestate'

function ControlledandUncontrolled() {
    const [fname,setFname] = useState("code")
    const getname = (event)=>{
        console.log(event.target.value)
    }
  return (
    <> 
    <from>
        <label htmlFor=""> Enter firstname</label>
        <input type="text" onChange={getname} /> 
    </from>
    
    </>
  )
}

export default ControlledandUncontrolled
