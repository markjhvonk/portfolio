import React from 'react';
import ApiTest from '../components/ApiTest';
import Menu from '../components/Menu';
import Grid from '../components/Grid';
import TopBar from '../components/TopBar';

function Default() {
    return (
        <div className="Main">
            <Menu />
            <TopBar/>
            <Grid />
        </div>
    );
}

export default Default;
