import React, { Component } from 'react';
import XIcon from '../../assets/icons/icon-x.svg';

class WorkDetail extends Component {
    render() {
        const { title, text, images, toggleModal } = this.props;

        return (
            <div className="work-detail__container" onClick={toggleModal}>
                <div className="work-detail">
                    <div className="work-detail__images">
                        <div className="work-detail__slider">
                            <div className="work-detail__slide">
                                <img src={images} alt="slider" />
                            </div>
                        </div>
                    </div>
                    <div className="work-detail__content">
                        <div className="work-detail__close-btn" onClick={toggleModal}>
                            <img src={XIcon} alt="close icon"/>
                        </div>
                        <h2>
                            {title}
                        </h2>
                        <div className="work-detail__text">
                            <p>
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkDetail;
