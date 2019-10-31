import React, { Component } from 'react';

class TopBar extends Component {
    constructor(props) {
        super(props);
    }

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
