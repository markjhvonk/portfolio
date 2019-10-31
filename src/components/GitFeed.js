import React, { Component } from 'react';
import githubIcon from '../assets/icons/github-icon.svg'
import gitlabIcon from '../assets/icons/gitlab-icon.svg'
import Card from './Card';

class GitFeed extends Component {
    render() {
        return (
            <Card title="Git feed" info="Test">
                <div className="git">
                    <div className="git__item">
                        <div className="git__icon">
                            <img src={githubIcon} alt="github icon" />
                        </div>
                        <div className="git__content">
                            <b>Pushed to</b>
                            <span>Markjhvonk/threejsSaver</span>
                            <span>"Update README.md"</span>
                            <small>2019-08-16T21:46:27Z</small>
                        </div>
                    </div>
                    <div className="git__item">
                        <div className="git__icon">
                            <img src={gitlabIcon} alt="gitlab icon" />
                        </div>
                        <div className="git__content">
                            <b>Pushed to</b>
                            <span>Markjhvonk/threejsSaver</span>
                            <span>"Update README.md"</span>
                            <small>2019-08-16T21:46:27Z</small>
                        </div>
                    </div>
                    <div className="git__item">
                        <div className="git__icon">
                            <img src={githubIcon} alt="github icon" />
                        </div>
                        <div className="git__content">
                            <b>Pushed to</b>
                            <span>Markjhvonk/threejsSaver</span>
                            <span>"Update README.md"</span>
                            <small>2019-08-16T21:46:27Z</small>
                        </div>
                    </div>
                    <div className="git__item">
                        <div className="git__icon">
                            <img src={gitlabIcon} alt="gitlab icon" />
                        </div>
                        <div className="git__content">
                            <b>Pushed to</b>
                            <span>Markjhvonk/threejsSaver</span>
                            <span>"Update README.md"</span>
                            <small>2019-08-16T21:46:27Z</small>
                        </div>
                    </div>
                    <div className="git__item">
                        <div className="git__icon">
                            <img src={githubIcon} alt="github icon" />
                        </div>
                        <div className="git__content">
                            <b>Pushed to</b>
                            <span>Markjhvonk/threejsSaver</span>
                            <span>"Update README.md"</span>
                            <small>2019-08-16T21:46:27Z</small>
                        </div>
                    </div>
                    <div className="git__item">
                        <div className="git__icon">
                            <img src={gitlabIcon} alt="gitlab icon" />
                        </div>
                        <div className="git__content">
                            <b>Pushed to</b>
                            <span>Markjhvonk/threejsSaver</span>
                            <span>"Update README.md"</span>
                            <small>2019-08-16T21:46:27Z</small>
                        </div>
                    </div>
                    <div className="git__spacer"></div>
                </div>
            </Card>
        )
    }
}

export default GitFeed;
