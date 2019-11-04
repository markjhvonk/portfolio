import React, { Component } from 'react';
import WorkDetail from './WorkDetail';
import WorkItem from './WorkItem';

class WorkContainer extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            modalTitle: '',
            modalText: '',
            modalImages: '',
            modalOpen: false
        });
    }

    toggleModal(title, text, images, skills, git) {
        const { modalOpen } = this.state;
        this.setState({
            modalOpen: !modalOpen,
            modalTitle: title,
            modalText: text,
            modalImages: images,
            modalSkills: skills,
            modalGit: git
        });
    }

    render() {
        const { modalOpen, modalText, modalTitle, modalImages, modalSkills, modalGit } = this.state;
        const { title, portfolio } = this.props;

        return (
            <React.Fragment>
                {modalOpen &&
                    <WorkDetail
                        toggleModal={() => { this.toggleModal() }}
                        title={modalTitle}
                        text={modalText}
                        images={modalImages}
                        skills={modalSkills}
                        git={modalGit} />
                }
                <div className="work-container">
                    <h2 className="work-container__title">{title}</h2>
                    <div className="work-container__items">
                        {portfolio !== undefined &&
                            portfolio.map((item, index) => {
                                return (<WorkItem
                                    key={index}
                                    onClick={() => { this.toggleModal(item.title, item.text, item.images, item.skills, item.git) }}
                                    title={item.title}
                                    snippet={item.snippet}
                                    coverImage={item.coverImage}
                                    images={item.images} />)
                            })
                        }
                        <div className="work-container__spacer"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default WorkContainer;
