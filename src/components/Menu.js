import React, { Component } from 'react';
import LogoM from '../assets/icons/logo-m.svg';
import GridIcon from '../assets/icons/icon-grid.svg';
import WorkIcon from '../assets/icons/icon-work.svg';
import SmileyIcon from '../assets/icons/icon-smiley.svg';
import CoffeeIcon from '../assets/icons/icon-coffee.svg';

class ApiTest extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="menu">
                <div className="menu__logo">
                    <img src={LogoM} />
                </div>
                <div className="menu__item">
                    <img src={GridIcon} className="menu__icon" />
                </div>
                <div className="menu__item">
                    <img src={WorkIcon} className="menu__icon" />
                </div>
                <div className="menu__item">
                    <img src={SmileyIcon} className="menu__icon" />
                </div>
                <div className="menu__item">
                    <img src={CoffeeIcon} className="menu__icon" />
                </div>
            </div>
        )
    }
}

export default ApiTest;
