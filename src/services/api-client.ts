import axios, { CanceledError } from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

export default axios.create({
    baseURL,
});

export { CanceledError };
