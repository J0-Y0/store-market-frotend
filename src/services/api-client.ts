import axios from "axios";
import { CanceledError } from "axios";

export {CanceledError};
export default axios.create({
    // baseURL: "http://192.168.100.43:8000/",
        baseURL: "http://192.168.100.46:8000/",
    // headers: {
    //     Authorization:"JWT "
    // }
})
 
