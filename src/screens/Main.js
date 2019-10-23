import React from 'react';
import Menu from '../components/Menu';
import Grid from '../components/Grid';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import Steps from '../components/Steps';
import Plant from '../components/Plant';
import GitFeed from '../components/GitFeed';
import WorkContainer from '../components/work/WorkContainer';
import WorkItem from '../components/work/WorkItem';
import ComingSoon from '../components/ComingSoon';

function Default() {
    return (
        <div className="main">
            <Menu />
            <TopBar />
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
                    <WorkContainer title="Work">
                        <WorkItem
                            title="Rocto (LoCoSoRoP)"
                            snippet="A low cost, social robot to give handicapped children more attention"
                            image="https://images.unsplash.com/photo-1549145159-2f1242ce0975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                        <WorkItem
                            title="Rocto (LoCoSoRoP)"
                            snippet="A low cost, social robot to give handicapped children more attention"
                            image="https://images.unsplash.com/photo-1549145159-2f1242ce0975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                        <WorkItem
                            title="Rocto (LoCoSoRoP)"
                            snippet="A low cost, social robot to give handicapped children more attention"
                            image="https://images.unsplash.com/photo-1549145159-2f1242ce0975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                        <WorkItem
                            title="Rocto (LoCoSoRoP)"
                            snippet="A low cost, social robot to give handicapped children more attention"
                            image="https://images.unsplash.com/photo-1549145159-2f1242ce0975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                    </WorkContainer>}
                sectionE={<Plant value={80} />}
                sectionF={
                    <Card title="Crawler - Most popular JavaScript framework" info="Test">
                        <ComingSoon text="Coming Soon" subText="Side Project" />
                    </Card>}
            />
        </div>
    );
}

export default Default;
