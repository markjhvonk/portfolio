import React, { Component } from 'react';
import Card from './Card';
import Circle from './Circle';

class Steps extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { } = this.props;

        return (
            <Card title="Steps" info="Test">
                <div className="steps">
                    <h3>Friday</h3>
                    <Circle value={40}/>
                </div>
            </Card>
        )
    }
}

export default Steps;
