import React, { useState } from 'react'

function UseState1() {
  // Declare a new state variable , which we'll call "count"
    const [count,setCount] = useState(0)
  return (
    <> 
   <p>You clicked {count} times</p>
   <button onClick={()=> setCount(count+1)}> 
    click me
   </button>
    </>
  )
}

export default UseState1
