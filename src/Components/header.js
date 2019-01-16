import React from 'react';
import axios from 'axios';
import apiKey from '../consts';

async function getData(){
    try {
        const apiData = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            },
            params: {
                location: 'Toronto',
                categories: 'breakfast_brunch' 
            },
            dataType: 'json'
        });
        console.log(apiData);
    } catch {
        console.log('no data')
    }
}

getData();