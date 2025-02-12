import axios from "axios";

const BASE_URL = "http://localhost:3000/api";


const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

//   student insert api
export const createPost = (postData) => {
    console.log(postData)
    return axiosInstance.post('/insertuser', postData)
}