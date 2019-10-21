import React from 'react';
import Menu from '../components/Menu';
import Grid from '../components/Grid';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import Steps from '../components/Steps';
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
                sectionE={<Card title="Ficus ginseng" info="Test" />}
                sectionF={<Card title="Crawler - Most popular javascript framework" info="Test" />} />
        </div>
    );
}

export default Default;
