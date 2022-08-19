import axios from "axios";

export const api = axios.create({
    baseURL: "https://foodexplorer1-api.herokuapp.com"
});