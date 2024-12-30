import React from 'react'

function CssStyling() {
    const boxcss={
        color:"red",
        margin:"50px"
    }
  return (
   <>
<h1 className='a'> CssStyling</h1>
<h2 style={{color:"red",backgroundColor:"green"}}> hello</h2>
<h3 style={boxcss}> hi nirpal </h3>
   </>
  )
}

export default CssStyling
