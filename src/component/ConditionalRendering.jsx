import React from 'react'
 const myFun = ()=>{
    let age = 20;
    if (age>=18)
    {
        return(
          <> 
          <h1> Eligible for vote</h1>
          </>
            
        )
    }else{
      return(
        <> 
        <h1> Not Eligible For vote </h1>
        </>
      )
    }
 }
function ConditionalRendering() {
  let age = 30;
  let result;
  if(age>18){
    result=<h1> you can vote </h1>
  } else{
    result= <h1> you can't vote</h1>
  }
  return (
    <>
    <h1> hello {result} </h1>
    <myFun/>
    {/* ternary oprator */}
    <div> 
      {
        age>18 ? <h1> Eligible for vote </h1>
        :<h1> not Eligible for vote </h1>
      }
    </div>
    </>
  )
}

export default ConditionalRendering
