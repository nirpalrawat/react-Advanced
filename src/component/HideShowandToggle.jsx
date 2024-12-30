import React, { useState } from 'react'

function HideShowandToggle() {
  const [status,setStatus] =useState(true)
  return (
    <> 
    <h1> Hide, Show and Toggle in element ye Tag </h1>
    <center> 
      { status ? <h1>hello world</h1> : null } 
      <button onClick={()=>setStatus(false)}> Hide</button>
      <br /> <br />
      <button onClick={() => setStatus(true)}> Show</button>
      <br /> <br /> <br /> 
      {/* Toggle */}
      <button onClick={()=>setStatus(!status)}> Toggle</button>
    </center>
    </>
  )
}

export default HideShowandToggle
