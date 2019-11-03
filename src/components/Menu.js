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
                                        <li><a href="https://www.linkedin.com/in/mark-vonk-569745a7/" target="_blank">LinkedIn</a></li>
                                        <li><a href="https://github.com/markjhvonk" target="_blank">GitHub</a></li>
                                        <li><a href="https://gitlab.com/markjhvonk" target="_blank">GitLab</a></li>
                                        <li><a href="https://codepen.io/markjhvonk" target="_blank">CodePen</a></li>
                                        <li><a href="mailto:markjhvonk@gmail.com">Email</a></li>
                                    </ul>
                                </React.Fragment>
                            }
                            {about &&
                                <React.Fragment>
                                    <h2>About me</h2>
                                    <p>Hey my name is Mark and I'm a 23 year old, 4th year, CMGT student at the Hogeschool Rotterdam.</p>
                                    <p>My current passions include, but are not limited to;<br />Front-end, Javascript, API's, big data, applied solutions, Python, Machine Learning & new technologies.</p>
                                    <p>Some of my hobbies are;<br />Gaming, skateboarding, board/table-top games, 3d-printing, Arduino, Raspberry Pi & more programming!</p>
                                    <p>Interested in more? <a href="mailto:markjhvonk@gmail.com">Get in touch!</a></p>
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
