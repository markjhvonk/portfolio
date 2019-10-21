import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value, width, height } = this.props;

        const progressValue = value + ", 100";

        return (
            <div className="circle">
                <span className="circle__value">8263</span>
                <svg
                    class="circle__svg"
                    viewBox="0 0 33.83098862 33.83098862"
                    width={width}
                    height={height}>
                    {/* <filter id="dropshadow" height="130%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
                        <feOffset dx="0" dy="0" result="offsetblur"/>
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.5"/>
                        </feComponentTransfer>
                        <feMerge> 
                            <feMergeNode/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter> */}
                    <circle
                        class="circle__path"
                        stroke="#00acc1"
                        stroke-width="1"
                        fill="none"
                        stroke-dasharray={progressValue}
                        stroke-linecap="block"
                        cx="16.91549431"
                        cy="16.91549431"
                        r="15.91549431" />
                </svg>
            </div>
        )
    }
}

export default Card;
