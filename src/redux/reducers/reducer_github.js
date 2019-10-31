import { FETCH_GITHUB } from '../actions/github';

export default function (state = [], action) {
    // eslint-disable-next-line
    switch (action.type) {
        case FETCH_GITHUB:
            return [action.payload.data, ...state];
    }

    return state;
}