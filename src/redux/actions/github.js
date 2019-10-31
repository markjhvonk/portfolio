import axios from 'axios';
import { GITHUB_URL } from '../constants';

export const FETCH_GITHUB = 'FETCH_GITHUB';

export function fetchGithub() {
    const url = GITHUB_URL;
    const request = axios.get(url);

    return {
        type: FETCH_GITHUB,
        payload: request
    };
}