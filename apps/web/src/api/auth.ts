import axios from "axios";

export const sayHelloRequest = async () => {
  try {
    const res = await axios.get('http://localhost:4000/api/hello')
    return res.data
  } 
  catch (error) {
    console.log(error)
    return Promise.reject(error);
  }
}