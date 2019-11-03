import React, { Component } from 'react';
import XIcon from '../../assets/icons/icon-x.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class WorkDetail extends Component {
    render() {
        const { title, text, images, toggleModal } = this.props;

        return (
            <div className="work-detail__container">
                <div className="work-detail">
                    <div className="work-detail__images">
                        <Carousel
                            showArrows={false}
                            showThumbs={false}
                            showIndicators={true}
                            showStatus={false}
                            autoPlay={true}
                            interval={2000}
                            infiniteLoop={true}
                            dynamicHeight={false}>
                            <div className="work-detail__slide">
                                <img src={images} alt="slider" />
                            </div>
                            <div className="work-detail__slide">
                                <img src={images} alt="slider" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="work-detail__content">
                        <div className="work-detail__close-btn" onClick={toggleModal}>
                            <img src={XIcon} alt="close icon" />
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
