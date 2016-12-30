import axios from 'axios';

const HA_ID = process.env.REACT_APP_HA_ID;
const HA_SECRET = process.env.REACT_APP_HA_SECRET;
const AUTH_URL = 'https://ws.homeaway.com/oauth/token';
const LISTING_URL = 'https://ws.homeaway.com/public/search';

let AUTH_TOKEN = '';

export const FETCH_LISTINGS = 'FETCH_LISTINGS';

export function fetchListings(city, numberOfPeople) {
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