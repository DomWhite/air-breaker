import axios from 'axios';

const HA_ID = process.env.REACT_APP_HA_ID;
const HA_SECRET = process.env.REACT_APP_HA_SECRET;
const AUTH_URL = 'https://ws.homeaway.com/oauth/token';
const LISTING_URL = 'https://ws.homeaway.com/public/search';

let AUTH_TOKEN = '';

export const FETCH_LISTINGS = 'FETCH_LISTINGS';

export function fetchListings(city, numberOfPeople) {
    // Check for auth token
    // If token needed POST to AUTH_URL to obtain
    // If token not needed, use bearer token in auth header and GET data from LISTING_URL
    const url = `${LISTING_URL}?q=${city} sleeps ${numberOfPeople}`;
    const request = axios.get(url);

    return {
        type: FETCH_LISTINGS,
        payload: request
    };
}

//Helpers

const preflightCheck = () => {

}