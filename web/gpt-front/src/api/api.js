import axios from "axios";

const URL_API = "https://localhost:5555/api/prompt";
export const makeRequest = async (message)=>{
    const {data} = await axios.post(URL_API, message);

    return data;
}

