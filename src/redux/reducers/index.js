import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import GithubReducer from './reducer_github';
import PlantReducer from './reducer_plant';
import PortfolioReducer from './reducer_portfolio';

const rootReducer = combineReducers({
    weather: WeatherReducer,
    github: GithubReducer,
    plant: PlantReducer,
    portfolio: PortfolioReducer
});

export default rootReducer;
