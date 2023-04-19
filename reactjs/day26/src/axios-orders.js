import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-5839d-default-rtdb.asia-southeast1.firebasedatabase.app/'
});

export default instance;