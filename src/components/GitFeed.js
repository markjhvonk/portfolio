import React, { Component } from 'react';
import githubIcon from '../assets/icons/github-icon.svg'
import gitlabIcon from '../assets/icons/gitlab-icon.svg'
import Card from './Card';

class GitFeed extends Component {

    selectFeed(github) {
        let feed = [];
        console.log(github);

        github.forEach(item => {
            console.log(item.payload.commits)
            let url = (item.payload.commits !== undefined) ? item.payload.commits[0].url : item.repo.url;

            // if (item.payload.commits !== undefined) {
            //     console.log(item.payload.commits[0])
            // }
            console.log(url)
            if (url) {
                url = url.replace("api.", "");
                url = url.replace("/repos", "");
                console.log(url)
            }

            const feedItem =
                <a target="_blank" href={url} key={item.id}>
                    <div className="git__item">
                        <div className="git__icon">
                            <img src={githubIcon} alt="github icon" />
                        </div>
                        <div className="git__content">
                            <b>{item.type}</b>
                            <span>{item.repo.name}</span>
                            {item.payload.commits &&
                                <span>{item.payload.commits[0].message}</span>
                            }
                            <small>{item.created_at}</small>
                        </div>
                    </div>
                </a>;
            feed.push(feedItem)
        });
        return feed;
    }

    render() {
        const { githubData } = this.props;

        return (
            <Card title="Git feed" info="Test">
                <div className="git">
                    {githubData.length > 0 &&
                        this.selectFeed(githubData[0])
                    }
                    <div className="git__spacer"></div>
                </div>
            </Card>
        )
    }
}

export default GitFeed;
