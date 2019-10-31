import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import GithubReducer from './reducer_github';
import PlantReducer from './reducer_plant';

const rootReducer = combineReducers({
    weather: WeatherReducer,
    github: GithubReducer,
    plant: PlantReducer,
});

export default rootReducer;
