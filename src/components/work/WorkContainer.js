import React, { Component } from 'react';

class WorkContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props;

        return (
            <div className="work-container">
                <h2 className="work-container__title">{title}</h2>
                <div className="work-container__items">
                    {this.props.children}
                    <div className="work-container__spacer"></div>
                </div>
            </div>
        )
    }
}

export default WorkContainer;
