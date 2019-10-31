import axios from 'axios';
import { PLANT_URL } from '../constants';

export const FETCH_PLANT = 'FETCH_PLANT';

export function fetchPlant() {
    const url = PLANT_URL;
    const request = axios.get(url + '/latest');

    return {
        type: FETCH_PLANT,
        payload: request
    };
}