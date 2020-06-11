import React, { Component } from 'react';
import Card from './Card';
import Bonsai from '../assets/images/bonsai.png';
import Droplet from '../assets/icons/icon-drop.svg';
import {random} from 'lodash';

class Plant extends Component {

    calcValue(reading) {
        const minReading = 250;
        const maxReading = 800;
        const percentage = Math.abs(Math.round(((reading - minReading) / (maxReading - minReading)) * 100) - 100);

        return 100 - percentage;
    }

    render() {
        const { data } = this.props;

        const backupDate = new Date();

        const reading = data[0] ? this.calcValue(data[0][0].value) : random(50, 100);
        const timestamp = data[0] ? data[0][0].timestamp : backupDate.toDateString();

        return (
            <React.Fragment>
                <Card title="Ficus ginseng">
                    <div className="plant">
                        <div className="plant__value">
                            <img src={Droplet} alt="droplet icon" />
                            <span>{Math.round(reading)}%</span>
                        </div>
                        <div className="plant__date">Last updated:<br />{timestamp}</div>
                    </div>
                </Card>
                <img className="plant__image" src={Bonsai} alt="bonsai tree" />
            </React.Fragment>
        )
    }
}

export default Plant;