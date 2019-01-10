import axios from "axios";
import { BASEURL, APIKEY } from "../constants";

export default axios.create({
    baseURL: BASEURL,
    headers: {
        Authorization: APIKEY
    }
})