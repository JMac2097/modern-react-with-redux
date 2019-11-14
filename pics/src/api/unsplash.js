import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            "Client-ID b4fb8a8997cb50b08ca238d6a5001c9821614ad716da8b26f27421e4a45612fe"
    }
});