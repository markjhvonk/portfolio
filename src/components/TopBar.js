import React, { Component } from 'react';

class TopBar extends Component {
    render() {

        return (
            <div className="top-bar">
                <div className="top-bar__content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default TopBar;
