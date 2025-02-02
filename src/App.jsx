import React, { useState } from "react";
import Updatevaribale from "./component/Updatevaribale";
import Usestate from "./component/Usestate"
import UseState1 from "./component/UseState1";
import HideShowandToggle from "./component/HideShowandToggle";
import Props from "./component/Props";
import CssStyling from "./component/CssStyling";
import Image from "./component/image";
import UseEffect from "./component/Hooks/UseEffect";
import UseEffect1 from "./component/Hooks/UseEffect1";
import DigitalClock from "./component/Hooks/DigitalClock";
import ControlledandUncontrolled from "./component/Hooks/ControlledandUncontrolled";
import IncrementDecrement from "./component/Hooks/IncrementDecrement";
import PropDrilling from "./component/PropDrilling/PropDrilling";
import ContextAPI from "./component/Hooks/ContextAPI/ContextAPI";
import Memo from "./component/Memo";
import UseMemo from "./component/UseMemo";
function App() {
  let data = "ravi"
  const[count,setCount] =useState(0)
  return <>
  {/* <Updatevaribale/> */}
   {/* <Usestate/>  */}
   {/* <UseState1/>  */}
  {/* <HideShowandToggle/> */}
   {/* <Props d ={data} c={count}/>
   <button onClick={()=>setCount(count+1)}> update count </button> */}
  {/* <CssStyling/> */}
  {/* <Image/> */}
  {/* <UseEffect/> */}
{/* <UseEffect1/> */}
{/* <DigitalClock/> */}
{/* <ControlledandUncontrolled/> */}

{/* <IncrementDecrement/> */}
{/* <PropDrilling/> */}
{/* <ContextAPI/> */}
{/* <Memo/> */}
<UseMemo/>


  </>;
}

export default App;
