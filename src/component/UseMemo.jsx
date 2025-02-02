import React, { useState, useMemo, useEffect } from 'react'

function UseMemo() { 
  // Example 1
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [count, setCount] = useState(0);

  // Example 1
  // const sum = () => {
  //   console.log("Calculating sum...! ");
  //   return number1 + number2;
  // };


  // useEffect(()=>{
  //   sum()

  // },[number1,number2])

  // useEffect work karta hai Lifecyclemethod ke liye .(re-render ke liye)
  // bo pure componet ko rerender karne se rok dekha
  // usemeno kisi ek componet ke andar function mai dependency create karni hai tab jake ap usememo ka use karege

  // Example 2 
  const sum = useMemo(() => {
    console.log("Calculating sum...! ");
    return number1 + number2;
  },[number1,number2]);



  return (
    <>

      <h1>useMemo In React.</h1>

      {/* Example 1 */}
      <div>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(Number(e.target.value))}
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(Number(e.target.value))}
        />

        {/* Example 1 */}
        {/* <p>Sum: {sum()}</p> */}

        {/* Example 2  use memo*/}
        <p>Sum: {sum}</p>

        {/* Example 1 */}
        <h2>Count Number: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Click ++</button>
      </div>
    </>
  )
}

export default UseMemo



//memorization