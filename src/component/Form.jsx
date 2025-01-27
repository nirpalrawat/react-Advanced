import React, { useState } from 'react'

function Form() {
    const [formData, setFromData] =useState({
        username:"",
        email:"",
        password:"",
        isSubscribed:"",
        role:""
    })
    //console.log(formData)

    const handleChange =(event)=>{
        const {name,value,type,checked} =event.target
        const fieldValue = type === 'checkbox' ? checked :value ;
        //console.log(event.target.value)
        console.log(fieldValue)

        setFromData({
            ...formData,  //spread
            [name]:fieldValue  //key value
        })
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log("Form Data",formData)
    }
  return (
    <>
     <h1>Form DAta</h1>
     <form onSubmit={handleSubmit}>
        <div>
            <label>Username:</label>
            <input type="text"
            name ="username" 
            value={formData.username}
           
            onChange={handleChange}
            
            />
        </div>
        <div>
            <label>Email:</label>
            <input type="email"
            name ="email" 
            value={formData.email}
            onChange={handleChange}
            
            />
        </div>
        <div>
            <label>Password:</label>
            <input type="Password"
            name ="password" 
            value={formData.password}
            onChange={handleChange}
            
            />
        </div>
        <div>
            <label>Subscribe:</label>
            <input type="checkbox"
            name ="isSubscribed" 
            value={formData.isSubscribed}
            onChange={handleChange}
            
            />
        </div>
        <div>
            <label>Role:</label>
            <select name='role' value={formData.role}
            onChange={handleChange}
            >
                <option value="">Select Role</option>
                <option value="admin">admin </option>
                <option value="user">user</option>
                <option value="gest">gest</option>

            </select>
            
            
            
        </div>

        <button type='Submit'>Submit</button>
        


     </form>
    
    </>
  )
}

export default Form