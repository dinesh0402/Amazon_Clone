import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-e755c/us-central1/api' // API (cloud function) localhost URL
});

export default instance;