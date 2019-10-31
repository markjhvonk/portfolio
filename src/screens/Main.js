import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../redux/actions/weather';
import Menu from '../components/Menu';
import Grid from '../components/Grid';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import Steps from '../components/Steps';
import Plant from '../components/Plant';
import GitFeed from '../components/GitFeed';
import WorkContainer from '../components/work/WorkContainer';
import ComingSoon from '../components/ComingSoon';
import Weather from '../components/Weather';

class Default extends Component {

    componentDidMount() {
        this.fetchWeatherAction();
    }

    fetchWeatherAction = () => {
        this.props.fetchWeather('Rotterdam');
    }

    render() {

        return (
            <div className="main">
                <Menu />
                <TopBar>
                    <Weather forecast={this.props.weather} />
                </TopBar>
                <Grid
                    sectionA={
                        <div className="main__title">
                            <h1>
                                WELCOME TO MY PORTFOLIO!<br />
                                -<br />
                                MAKE YOURSELF AT HOME 👌🏻
                            </h1>
                        </div>
                    }
                    sectionB={<Steps />}
                    sectionC={<GitFeed />}
                    sectionD={
                        <WorkContainer title="Work" />}
                    sectionE={<Plant value={80} />}
                    sectionF={
                        <Card title="Crawler - Most popular JavaScript framework" info="Test">
                            <ComingSoon text="Coming Soon" subText="(Side Project)" />
                        </Card>}
                />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps, mapDispatchToProps)(Default);
