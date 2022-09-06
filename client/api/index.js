import axios from 'axios';

const url = 'http://localhost:5000/post/all';

export const fetchPosts = axios.get(url);
