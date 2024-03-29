import React, { Component } from 'react';

class WorkItem extends Component {
    render() {
        const { title, snippet, coverImage } = this.props;

        return (
            <div className="work-item" onClick={this.props.onClick}>
                <div className="work-item__container">
                    <div className="work-item__image">
                        <img src={coverImage} alt="work item" />
                    </div>
                    <div className="work-item__content">
                        <h2>{title}</h2>
                        <span>{snippet}</span>
                    </div>
                </div>
                <span className="work-item__readmore">READ MORE</span>
            </div>
        )
    }
}

export default WorkItem;
