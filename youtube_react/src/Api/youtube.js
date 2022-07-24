import axios from "axios";
const KEY = "AIzaSyA_C94YGEqVqT5uXv4msoR0X21Zwx6hKHM";

export default axios.creat({
    baseURL:'https://www.googleapis.com/youtube/v3',
    Params:{
        part:'snippet',
        maxResults:5,
        Key:KEY
    },
    headers:{}
    })

