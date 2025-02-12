import axios from "axios";

const BASE_URL = "http://localhost:3000/api";


const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

//   student insert api
export const createPost = (postData) => {
    // console.log(postData)
    return axiosInstance.post('/insertStudent', postData)
}
//   student display student
export const displayStudent = () => {
    return axiosInstance.get('/getalluser')
}