import React, { useState } from "react";
import Updatevaribale from "./component/Updatevaribale";
import Usestate from "./component/Usestate"
import UseState1 from "./component/UseState1";
import HideShowandToggle from "./component/HideShowandToggle";
import Props from "./component/Props";
import CssStyling from "./component/CssStyling";
import Image from "./component/image";
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




  </>;
}

export default App;
