import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const search = (searchTerm) => {
        yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'Chicago'
            }
        }).then(response => {
            setRestaurants(response.data.businesses);
        }).catch(err => {
            setErrorMessage('Oops, something went wrong.')
        });
    };
    
    useEffect(() => {
        search('pasta');
    }, []);

    return [search, restaurants, errorMessage];
};

