import axios from 'axios';

export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';

export function fetchPortfolio() {
    const request = axios.get('./data/portfolioItems.json');

    return {
        type: FETCH_PORTFOLIO,
        payload: request
    };
}