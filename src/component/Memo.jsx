import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function Memo() {
  const [ count,setCount] = useState(0);

  console.log("parent component !!");
  return (
    <>
    <h1> Memo ( Higher order component Hoc) </h1>
    <ChildComponent/>
    <h2> count:{count}</h2>
    <button onClick={()=> setCount(count+1)}> count </button>
    </>
  )
}

export default Memo
