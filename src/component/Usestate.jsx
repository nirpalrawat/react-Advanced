import React, { useState } from "react";

function usestate() {
  const [data, setData] = useState("RAM");
  const updateData = () => {
    setData("RAJ");
  };
  console.log("render");
  return (
    <>
      <h1>USE STATE {data}</h1>
      <button onClick={updateData}> update data</button>
    </>
  );
}

export default usestate;
