import React, { Component } from 'react';
import IconCloud from '../assets/icons/weather/icon-cloud.svg';

class Weather extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.forecast)
    }

    pickIcon(weatherName) {
        return IconCloud;
    }

    render() {
        const { forecast } = this.props;
        const forecastData = forecast.length > 0 ? forecast : null;
        const cityName = forecastData ? forecast[0].name : null;
        const date = forecastData ? new Date(forecast[0].dt*1000) : null;
        const weatherDescription = forecastData ? forecast[0].weather[0].description : null;
        const weatherName = forecastData ? forecast[0].weather[0].main : null;
        const temperature = forecastData ? Math.round(forecast[0].main.temp) : null;
        console.log(forecast)
        //temp -273

        return (
            <React.Fragment>
                {forecast.length > 0 &&
                    <div className="weather">
                        <div className="weather__content">
                            {temperature}° {weatherDescription}<br />{cityName}, {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                    </div>
                        <div className="weather__icon">
                            <img src={this.pickIcon()} />
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default Weather;