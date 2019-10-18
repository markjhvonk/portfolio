import React, { Component } from 'react';

class Grid extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="grid__container">
                <div className="grid">
                    <div className="grid__section-A">A</div>
                    <div className="grid__section-B">B</div>
                    <div className="grid__section-C">C</div>
                    <div className="grid__section-D">D</div>
                    <div className="grid__section-E">E</div>
                    <div className="grid__section-F">F</div>
                </div>
            </div>
        )
    }
}

export default Grid;
