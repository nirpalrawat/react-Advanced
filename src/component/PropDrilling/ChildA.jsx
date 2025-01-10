import React from 'react'
import ChildB from './ChildB'

function ChildA({name}) {
    //console.log(name)
  return (
    <> 
    
    <ChildB name ={name}/>
    </>
  )
}

export default ChildA
