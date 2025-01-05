import React from 'react'
import img from '../image/'
function Image() {
  return (
   <>   
   <img src="{img}" alt=""  style={{width:"500"}}/>
   
   <img src={"../../."} alt="" style={{width:500}} />
   </>
  )
}

export default Image
