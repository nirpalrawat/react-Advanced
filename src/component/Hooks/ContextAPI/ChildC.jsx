import React from 'react'
import {fname,lname} from './ContextAPI'

function ChildC() {
  
  return (
    <> 
    <h1> Child</h1>
    <fname.Consumer>
      {
        (fname)=>{
          return(
            //<h1> my name is {fname}</h1>
            <lname.Consumer>
              {
                (lname)=>{
                  return(
                    <h1> my name is {fname} last {lname} </h1>
                  )
                }
              }
            </lname.Consumer>
          )
        }
      }
      
      
      
       </fname.Consumer>
    </>
  )
}

export default ChildC
