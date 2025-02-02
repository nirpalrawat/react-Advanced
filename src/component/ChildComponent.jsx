import React,{memo} from 'react'

function ChildComponent() {
    //example 2
    console.log("Child Component Rendered!!")
  return (
    <> 
    <h3> child component count </h3>
    </>
  )
}


//export default ChildComponent
export default memo (ChildComponent)
