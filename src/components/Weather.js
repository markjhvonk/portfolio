import React, { Component } from 'react';
import IconCloud from '../assets/icons/weather/icon-cloud.svg';

class Weather extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { forecast } = this.props;

        return (
            <div className="weather">
                <div className="weather__content">
                    16° Partly Cloudy<br />Rotterdam, Sunday 10 PM
                </div>
                <div className="weather__icon">
                    <img src={IconCloud} />
                </div>
            </div>
        )
    }
}

export default Weather;