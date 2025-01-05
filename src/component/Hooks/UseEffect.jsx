import React, { useState } from 'react'

function UseEffect() {
    const [count ,setCount] = useState(0);
    const [data ,setdata] = useState(100);
    useEffect(()=>{
        console.log(" hello useEffect")
    })
  return (
    <>
    <p> You click {count} time</p>
    <p> You data {data} times</p>
    <button onClick={()=>setCount(count+1)}> click me</button>
    <button onClick={()=>setdata(count+1)}> click data</button>
    </>
  )
}

export default UseEffect
