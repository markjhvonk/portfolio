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

    toggleModal(title, text, images) {
        const { modalOpen } = this.state;
        this.setState({
            modalOpen: !modalOpen,
            modalTitle: title,
            modalText: text,
            modalImages: images
        });
    }

    render() {
        const { modalOpen, modalText, modalTitle, modalImages } = this.state;
        const { title } = this.props;

        return (
            <React.Fragment>
                {modalOpen&&
                    <WorkDetail 
                        toggleModal={() => {this.toggleModal()}} 
                        title={modalTitle} 
                        text={modalText} 
                        images={modalImages}/>
                }
                <div className="work-container">
                    <h2 className="work-container__title">{title}</h2>
                    <div className="work-container__items">
                        <WorkItem
                            onClick={() => {this.toggleModal("Rocto (LoCoSoRoP)", "A low cost, social robot to give handicapped children more attention", "https://images.unsplash.com/photo-1549145159-2f1242ce0975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")}}
                            title="Rocto (LoCoSoRoP)"
                            snippet="A low cost, social robot to give handicapped children more attention"
                            image="https://images.unsplash.com/photo-1549145159-2f1242ce0975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                        <WorkItem
                            onClick={() => {this.toggleModal("Rocto1 (LoCoSoRoP)", "A low cost, social robot to give handicapped children more attention", "https://images.unsplash.com/photo-1549145159-2f1242ce0975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")}}
                            title="Rocto1 (LoCoSoRoP)"
                            snippet="A low cost, social robot to give handicapped children more attention"
                            image="https://images.unsplash.com/photo-1549145159-2f1242ce0975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                        <WorkItem
                            onClick={() => {this.toggleModal("Rocto2 (LoCoSoRoP)", "A low cost, social robot to give handicapped children more attention", "https://images.unsplash.com/photo-1549145159-2f1242ce0975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")}}
                            title="Rocto2 (LoCoSoRoP)"
                            snippet="A low cost, social robot to give handicapped children more attention"
                            image="https://images.unsplash.com/photo-1549145159-2f1242ce0975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                        <WorkItem
                            onClick={() => {this.toggleModal("Rocto3 (LoCoSoRoP)", "A low cost, social robot to give handicapped children more attention", "https://images.unsplash.com/photo-1549145159-2f1242ce0975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")}}
                            title="Rocto3 (LoCoSoRoP)"
                            snippet="A low cost, social robot to give handicapped children more attention"
                            image="https://images.unsplash.com/photo-1549145159-2f1242ce0975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                        <div className="work-container__spacer"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default WorkContainer;
