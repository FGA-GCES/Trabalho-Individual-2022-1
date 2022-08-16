import axios from "axios";

export const BASE_API = axios.create({
    baseURL: "http://localhost:8000"
});