import axios from 'axios';

const KEY = 'AIzaSyA-nIe3NRZXXNoR2MBABmfZ247YRZ5lHAo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});