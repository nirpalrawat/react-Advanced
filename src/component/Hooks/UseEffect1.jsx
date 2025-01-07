import React, { useEffect, useState } from 'react'

function UseEffect1() {
    const [count, setCount] = useState(0)
    const [data, setdata] = useState(100)

    useEffect(() => {
        console.log("hello count")
    }, [count])
    useEffect(() => {
        console.log("hello data")
    }, [data])
    const getapi = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }
    
    useEffect(()=>{
        getapi()
    },[])

    return (
        <>
            <p> you click {count} times</p>
            <p> you data  {data} times</p>
            <button onClick={() => setCount(count + 1)}> click count</button>
            <button onClick={() => setdata(data + 1)}> click count</button>


        </>
    )
}

export default UseEffect1
