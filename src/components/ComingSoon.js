import React, { Component } from 'react';

class ComingSoon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text, subText } = this.props;

        return (
            <div className="coming-soon">
                <div className="coming-soon__content">
                    <h2>{text}</h2>
                    <h3>{subText}</h3>
                </div>
            </div>
        )
    }
}

export default ComingSoon;
