import React, { Component } from 'react';
import LogoM from '../assets/icons/logo-m.svg';
import GridIcon from '../assets/icons/icon-grid.svg';
import GridIconFilled from '../assets/icons/icon-grid-filled.svg';
import SmileyIcon from '../assets/icons/icon-smiley.svg';
import SmileyIconFilled from '../assets/icons/icon-smiley-filled.svg';
import CoffeeIcon from '../assets/icons/icon-coffee.svg';
import CoffeeIconFilled from '../assets/icons/icon-coffee-filled.svg';

class ApiTest extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            contact: false,
            about: false
        });
    }

    render() {
        const { about, contact } = this.state;

        return (
            <React.Fragment>
                <div className="menu">
                    <div className="menu__logo">
                        <img src={LogoM} alt="logo" />
                    </div>
                    <div className="menu__item" onClick={() => { this.setState({ contact: false, about: false }) }}>
                        {(about || contact) ?
                            <img src={GridIcon} className="menu__icon" alt="grid icon" />
                            :
                            <img src={GridIconFilled} className="menu__icon" alt="grid icon" />
                        }
                    </div>
                    <div className="menu__item"
                        onClick={() => { this.setState({ about: !about, contact: false }) }}>
                        {about ?
                            <img src={SmileyIconFilled} className="menu__icon" alt="smiley icon" />
                            :
                            <img src={SmileyIcon} className="menu__icon" alt="smiley icon" />
                        }
                    </div>
                    <div className="menu__item"
                        onClick={() => { this.setState({ contact: !contact, about: false }) }}>
                        {contact ?
                            <img src={CoffeeIconFilled} className="menu__icon" alt="coffee icon" />
                            :
                            <img src={CoffeeIcon} className="menu__icon" alt="coffee icon" />
                        }
                    </div>
                </div>
                {(about || contact) &&
                    <div className="menu__popup">
                        <div className="menu__popup-content">
                            {contact &&
                                <React.Fragment>
                                    <h2>Let's get in touch!</h2>
                                    <p>You can find me on the following channels:</p>
                                    <ul>
                                        <li>LinkedIn</li>
                                        <li>GitHub</li>
                                        <li>GitLab</li>
                                        <li>CodePen</li>
                                    </ul>
                                </React.Fragment>
                            }
                            {about &&
                                <React.Fragment>
                                    <h2>About me</h2>
                                    <p>Hey my name is Mark and I'm a 23 year old, 4th year, CMGT student at the Hogeschool Rotterdam.</p>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default ApiTest;
