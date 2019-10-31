import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { percent, width, height, value } = this.props;

        const progressPercent = percent + ", 100";

        return (
            <div className="circle">
                <span className="circle__value">{value}</span>
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
                        strokeDasharray={progressPercent}
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
