import React, { useState } from 'react'
import { createPost } from './Localapi'

function Studentinsert() {
    const [newpost, setnewpost] = useState({
        name: "",
        email: ""
    })
    const [loading, setloading] = useState(true)
    const handleCreatePost = (e)=>{
        e.preventDefault()
        //console.log(newpost)
        createPost(newpost)
    }
    return (
        <>
            <h1>Student Insert</h1>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" name='name' value={newpost.name} onChange={(e) => setnewpost({ ...newpost, name: e.target.value })}/>
                <br /><br />
                <label htmlFor="">Email</label>
                <input type="text" name='email' value={newpost.email} onChange={(e) => setnewpost({ ...newpost, email: e.target.value })}/>
                <br /><br />
                <button onClick={handleCreatePost} type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Studentinsert