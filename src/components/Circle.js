import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value } = this.props;

        const progressValue = value + ", 100";

        return (
            <div className="circle">
                <svg 
                    class="circle__svg"
                    viewbox="0 0 50 50"
                    width="200"
                    height="200">
                    <circle
                        stroke="#efefef"
                        stroke-width="5"
                        fill="none"
                        cx="20"
                        cy="20"
                        r="16"/>
                    <circle
                        class="circle__path"
                        stroke="#00acc1"
                        stroke-width="5"
                        fill="none"
                        stroke-dasharray={progressValue} 
                        stroke-linecap="block"
                        cx="20"
                        cy="20"
                        r="16"/>
                </svg>
            </div>
        )
    }
}

export default Card;
