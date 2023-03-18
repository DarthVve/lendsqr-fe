import axios from 'axios';

// const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BASE_URL = import.meta.env.TEST_API;


export default axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" }
});