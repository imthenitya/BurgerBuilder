import axios from "axios";

const instance= axios.create({
    baseURL: 'https://burgerbuil-default-rtdb.firebaseio.com/'
});

export default instance