import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../redux/actions/weather';
import { fetchGithub } from '../redux/actions/github';
import { fetchPlant } from '../redux/actions/plant';
import { fetchPortfolio } from '../redux/actions/portfolio';
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
        this.fetchData();
    }

    fetchData = () => {
        this.props.fetchWeather('Maassluis');
        this.props.fetchGithub();
        this.props.fetchPlant();
        this.props.fetchPortfolio();
    }

    render() {
        const { weather, plant, github, portfolio } = this.props;

        return (
            <div className="main">
                <Menu />
                <TopBar>
                    <Weather forecast={weather} />
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
                    sectionC={<GitFeed githubData={github} />}
                    sectionD={<WorkContainer portfolio={portfolio[0]} title="Work" />}
                    sectionE={<Plant data={plant} />}
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
    return bindActionCreators({
        fetchWeather,
        fetchGithub,
        fetchPlant,
        fetchPortfolio
    }, dispatch);
}

function mapStateToProps({ weather, github, plant, portfolio }) {
    return { weather, github, plant, portfolio };
}

export default connect(mapStateToProps, mapDispatchToProps)(Default);
