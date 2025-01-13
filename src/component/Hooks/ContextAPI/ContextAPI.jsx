import React, { createContext } from 'react'
import ChildA from './ChildA'

const fname = createContext()
const lname = createContext()


function ContextAPI() {
  return (
    <> 
    <h1> ContextAPI</h1>
    <fname.Provider value={"pninfosys"}>
    <lname.Provider value={"gwalior"}>

        <ChildA/>
        
        </lname.Provider>
        </fname.Provider>
    </>
  )
}

export default ContextAPI
export {fname,lname}
