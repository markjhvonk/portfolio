import React, { Component } from 'react';
import LogoM from '../assets/icons/logo-m.svg';

class TopBar extends Component {
    render() {

        return (
            <div className="top-bar">
                <div className="top-bar__content">
                    {this.props.children}
                    <div className="top-bar__logo">
                        <img src={LogoM} alt="logo" />
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBar;
