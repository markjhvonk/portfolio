import React, { Component } from 'react';
import XIcon from '../../assets/icons/icon-x.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class WorkDetail extends Component {
    render() {
        const { title, text, images, toggleModal, skills, git } = this.props;

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
                            interval={3000}
                            infiniteLoop={true}
                            dynamicHeight={false}>
                            {images.map((image) => {
                                return (
                                    <div className="work-detail__slide">
                                        <img src={image} alt="slider" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                    <div className="work-detail__content">
                        <div className="work-detail__close-btn" onClick={toggleModal}>
                            <img src={XIcon} alt="close icon" />
                        </div>
                        <div className="work-detail__content-body">
                            <h2>
                                {title}
                            </h2>
                            <div className="work-detail__text">
                                <pre>
                                    {text}
                                </pre>
                            </div>
                        </div>
                        <div className="work-detail__content-footer">
                            {git &&
                                <div className="word-detail__code">
                                    <a href={git}>Check out the code.</a>
                                </div>
                            }
                            <div className="work-detail__skills">
                                <h3>Skills used:</h3>
                                {skills}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default WorkDetail;
