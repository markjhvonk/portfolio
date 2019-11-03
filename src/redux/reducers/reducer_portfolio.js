import { FETCH_PORTFOLIO } from '../actions/portfolio';

export default function (state = [], action) {
    // eslint-disable-next-line
    switch (action.type) {
        case FETCH_PORTFOLIO:
            return [action.payload.data, ...state];
    }

    return state;
}