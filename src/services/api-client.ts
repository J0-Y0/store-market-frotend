import axios from "axios";
import { CanceledError } from "axios";

export {CanceledError};
export default axios.create({
    baseURL: "http://127.0.0.1:8000/",
    // headers: {
    //     Authorization:"JWT "
    // }
})
