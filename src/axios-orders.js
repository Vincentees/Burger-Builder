import axios from 'axios';

const instance=axios.create({
    baseURL:'https://burger-builder-e6a9a-default-rtdb.firebaseio.com/'
})
export default instance;