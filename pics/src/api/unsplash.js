import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 46267918263db9507b919b1dce011aadb920ba2b66f70a7ab9a194f63bdf5f38'
    }
});