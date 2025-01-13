import React, { createContext } from 'react'
import ChildA from './ChildA'

const Data = createContext()
const DataOne = createContext()

function UseContect1() {
  return (
    <> 
    <h1> UseContact1 Hook </h1>
    <Data.provider value={"pninfosys"}> 
        <DataOne.Provider value={"gwalior"}>
            <ChildA/>
        </DataOne.Provider>
    </Data.provider>
    </>
  )
}

export default UseContect1
export { Data,DataOne}
