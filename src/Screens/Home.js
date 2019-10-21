import React from 'react';
import Menu from '../components/Menu';
import Grid from '../components/Grid';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import Steps from '../components/Steps';
import Plant from '../components/Plant';
import GitFeed from '../components/GitFeed';

function Default() {
    return (
        <div className="Main">
            <Menu />
            <TopBar />
            <Grid
                sectionA="test"
                sectionB={<Steps />}
                sectionC={<GitFeed />}
                sectionD="test"
                sectionE={<Plant value={80} />}
                sectionF={<Card title="Crawler - Most popular javascript framework" info="Test" />} />
        </div>
    );
}

export default Default;
