import React, { Component } from 'react';
import Card from './Card';
import Circle from './Circle';

class Steps extends Component {
    render() {
        return (
            <Card title="Steps" info="Test">
                <div className="steps">
                    <h3>Friday</h3>
                    <Circle width={`70%`} height={`100%`} value={40} />
                </div>
            </Card>
        )
    }
}

export default Steps;