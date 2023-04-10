import create from "./http-service";

export interface User {
    id: number;
    name: string;
}

// ** The user class encapsulate all the logic for making HTTP requests


export default create('/users');
