import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-react-app-eb654.firebaseio.com/'
});

export default instance;
