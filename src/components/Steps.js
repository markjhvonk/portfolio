import React, { Component } from 'react';
import Card from './Card';
import Circle from './Circle';

class Steps extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            steps: 0,
            percent: 0
        })
    }

    componentDidMount() {
        this.calcSteps();
    }

    calcSteps() {
        const timeOfDay = new Date().getHours();
        const currentLimit = 8000;
        const stepsPerHour = 670;
        // const timeOfDay = 19;
        if (timeOfDay >= 8) {
            const currentSteps = (timeOfDay - 8) * stepsPerHour;
            const currentPercent = Math.ceil((currentSteps/currentLimit)*100);

            if (currentSteps <= currentLimit) {
                this.setState({ steps: currentSteps, percent: currentPercent });
            } else {
                this.setState({ steps: currentLimit, percent: 100 });
            }
        }
    }

    render() {
        const {steps, percent} = this.state;
        return (
            <Card title="Steps" info="Test">
                <div className="steps">
                    <h3>Friday</h3>
                    <Circle width={`70%`} height={`100%`} percent={percent} value={steps} />
                </div>
            </Card>
        )
    }
}

export default Steps;
