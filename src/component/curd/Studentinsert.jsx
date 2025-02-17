import React, { useEffect, useState } from 'react'
import { createPost, displayStudent } from './Localapi'


function Studentinsert() {
    const [newpost, setnewpost] = useState({
        name: "",
        email: ""
    })
    const [post, setPost] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        displayStudent()
            .then((response) => {
                // console.log(response.data.users)
                setPost(response.data.user);

            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, [])
    // console.log(post)


    const handleCreatePost = (e) => {
        e.preventDefault()
        // console.log(newpost)
        createPost(newpost)
            .then((response) => {
                // console.log(response.data)

            })
            .catch((error) => {
                console.error("Error creating post:", error);
            });
    }
    return (
        <>
            <h1>Student Insert</h1>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" name='name' value={newpost.name} onChange={(e) => setnewpost({ ...newpost, name: e.target.value })} />
                <br /><br />
                <label htmlFor="">Email</label>
                <input type="text" name='email' value={newpost.email} onChange={(e) => setnewpost({ ...newpost, email: e.target.value })} />
                <br /><br />
                <button onClick={handleCreatePost} type='submit'>Submit</button>
            </form>

            <br /><br /><br />

            <table className="">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {post.map((post, index) => (
                        <tr key={post.id}>
                            <td>{index + 1}</td>
                            <td>{post.name}</td>
                            <td>{post.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Studentinsert