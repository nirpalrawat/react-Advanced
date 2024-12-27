import React from 'react'

function Updatevaribale() {
    let data ="ram"

    const updateData = ()=>{
        let data = "raj"
        alert(data)
    }
    console.log("component render")
      return (
    <>
    <h1> Update varibale{data}</h1>
    <button onClick={updateData}> update data</button>

    </>
  )
}

export default Updatevaribale
