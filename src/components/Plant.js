import React, { Component } from 'react';
import Card from './Card';
import Bonsai from '../assets/images/bonsai.png';
import Droplet from '../assets/icons/icon-drop.svg';

class Plant extends Component {
    render() {
        const { value } = this.props;

        return (
            <React.Fragment>
                <Card title="Ficus ginseng" info="Test" >
                    <div className="plant">
                        <div className="plant__value">
                            <img src={Droplet} alt="droplet icon" />
                            <span>{value}%</span>
                        </div>
                    </div>
                </Card>
                <img className="plant__image" src={Bonsai} alt="bonsai tree" />
            </React.Fragment>
        )
    }
}

export default Plant;