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

    getCurrentDay() {
        switch (new Date().getDay()) {
            case 0:
                return "Sunday";
                break;
            case 1:
                return "Monday";
                break;
            case 2:
                return "Tuesday";
                break;
            case 3:
                return "Wednesday";
                break;
            case 4:
                return "Thursday";
                break;
            case 5:
                return "Friday";
                break;
            case 6:
                return "Saturday";
        }
    }

    calcSteps() {
        const timeOfDay = new Date().getHours();
        const currentLimit = 8000;
        const stepsPerHour = 670;
        // const timeOfreturn 19;
        if (timeOfDay >= 8) {
            const currentSteps = (timeOfDay - 8) * stepsPerHour;
            const currentPercent = Math.ceil((currentSteps / currentLimit) * 100);

            if (currentSteps <= currentLimit) {
                this.setState({ steps: currentSteps, percent: currentPercent });
            } else {
                this.setState({ steps: currentLimit, percent: 100 });
            }
        }
    }

    render() {
        const { steps, percent } = this.state;
        return (
            <Card title="Steps">
                <div className="steps">
                    <h3>{this.getCurrentDay()}</h3>
                    <Circle width={`70%`} height={`100%`} percent={percent} value={steps} />
                </div>
            </Card>
        )
    }
}

export default Steps;
