import axios from 'axios';


const KEY = 'AIzaSyDYsfZ2aTUBI1IHuhQpaT4AbQ4H2arDYws';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY

    }
});