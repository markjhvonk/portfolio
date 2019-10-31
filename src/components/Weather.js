import React, { Component } from 'react';
import IconCloud from '../assets/icons/weather/icon-cloud.svg';
import IconRainLight from '../assets/icons/weather/icon-rain-light.svg';
import IconRain from '../assets/icons/weather/icon-rain.svg';
import IconSun from '../assets/icons/weather/icon-sun.svg';
import IconThunder from '../assets/icons/weather/icon-thunder.svg';

class Weather extends Component {
    pickIcon(weatherName) {
        switch (weatherName) {
            case 'Thunderstorm':
                return IconThunder
                break;
            case 'Drizzle':
                return IconRainLight
                break;
            case 'Rain':
                return IconRain
                break;
            case 'Snow':
                return IconRain
                break;
            case 'Clear':
                return IconSun
                break;
            case 'Clouds':
                return IconCloud
                break;
            default:
                return IconCloud
        }
    }

    render() {
        const { forecast } = this.props;
        const forecastData = forecast.length > 0 ? forecast : null;
        const cityName = forecastData ? forecast[0].name : null;
        const date = forecastData ? new Date(forecast[0].dt * 1000) : null;
        const weatherDescription = forecastData ? forecast[0].weather[0].description : null;
        const weatherName = forecastData ? forecast[0].weather[0].main : null;
        const temperature = forecastData ? Math.round(forecast[0].main.temp) : null;

        return (
            <React.Fragment>
                {forecast.length > 0 &&
                    <div className="weather">
                        <div className="weather__content">
                            {temperature}° {weatherDescription}<br />{cityName}, {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                        </div>
                        <div className="weather__icon">
                            <img src={this.pickIcon(weatherName)} />
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default Weather;