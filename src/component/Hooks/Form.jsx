import React, { useState } from 'react'

function Form() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log(name,email)
    }

  return (
   <> 
   <Form onSubmit={handleSubmit}/>
   name:
   <input type='text' name='name' onChange={(e)=>setName(e.target.value)}/>
   <br /><br />
   <input type='text' name='Email' onChange={(e)=>setEmail(e.target.value)}/>
<button type='submit'> submit</button>

<From/>
   </>
  )
}

export default Form
