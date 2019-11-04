import React, { Component } from 'react';

class Grid extends Component {
    render() {
        const {
            sectionA,
            sectionB,
            sectionC,
            sectionD,
            sectionE,
            sectionF
        } = this.props;

        return (
            <div className="grid__container">
                <div className="grid">
                    <div className="grid__section-A">{sectionA}</div>
                    <div className="grid__section-B">{sectionB}</div>
                    <div className="grid__section-C">{sectionC}</div>
                    <div className="grid__section-D">{sectionD}</div>
                    <div className="grid__section-E">{sectionE}</div>
                    <div className="grid__section-F">{sectionF}</div>
                </div>
            </div>
        )
    }
}

export default Grid;
