import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { value, width, height } = this.props;

        const progressValue = value + ", 100";

        return (
            <div className="circle">
                <span className="circle__value">8263</span>
                <svg
                    className="circle__svg"
                    viewBox="0 0 33.83098862 33.83098862"
                    width={width}
                    height={height}>
                    <circle
                        className="circle__path"
                        stroke="#00acc1"
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray={progressValue}
                        strokeLinecap="block"
                        cx="16.91549431"
                        cy="16.91549431"
                        r="15.91549431" />
                </svg>
            </div>
        )
    }
}

export default Card;
