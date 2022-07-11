import axios from 'axios';

const API_URL = 'http://localhost:4000/';
export const loginAPI = async (email, password) => {
    try {
        const body = {
            email: email,
            password: password
        };
        const response = await axios.post(
            API_URL + 'signin',
            { body },
            {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                }
            }
        );
        return response;
    } catch (error) {
        return error;
    }
};
