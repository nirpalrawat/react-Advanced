import React from 'react'
import { useState } from 'react'

function IncrementDecrement() {
const [num, setNum] = useState(0)
const increment = ()=>{
    setNum(num+1)
}
const decrement =()=>{
    if(num==0)
    {
        alert("O Not Be Decresed")
    } else{
        setNum(num-1)
    }
}
    return (
    <> 
    <h1> {num}</h1>
    <button onClick={increment}>Increment </button>
    <button onClick={decrement}>Decrement </button>
    </>
  )
}

export default IncrementDecrement
