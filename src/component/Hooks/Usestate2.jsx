import React, { useState } from 'react'

function Usestate2() {
    const [count ,setCount] = useState(0)
  return (
    <>  
    <p> You Clicked {count} times</p>
    <button onClick={()=> setCount(count+1)}> Click me</button>
    
    </>
  )
}

export default Usestate2
