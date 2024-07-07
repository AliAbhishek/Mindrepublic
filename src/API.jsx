import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const getData=async()=>{
//     try {
//         let data = await axios.get("https://jsonplaceholder.typicode.com/posts")
//         return data
//     } catch (error) {
//         console.log(error)
//     }
// }

export const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data; // Assuming the API returns an array of posts or data
  } catch (error) {
    throw Error("Error fetching data"); // Throw an error if the API request fails
  }
};
export const postData = async () => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data; // Assuming the API returns an array of posts or data
  } catch (error) {
    throw Error("Error fetching data"); // Throw an error if the API request fails
  }
};


