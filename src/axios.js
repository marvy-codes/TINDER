import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://potinder-backend.herokuapp.com'
});

export default instance