import { FETCH_PLANT } from '../actions/plant';

export default function (state = [], action) {
    // eslint-disable-next-line
    switch (action.type) {
        case FETCH_PLANT:
            return [action.payload.data, ...state];
    }

    return state;
}