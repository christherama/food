import axios from 'axios';
import { yelp } from './settings';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${yelp.key}`
    }
});