import React, { Component } from 'react';
import InfoIcon from '../assets/icons/icon-info.svg';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, info } = this.props;

        return (
            <div className="card">
                <div className="card__top">
                    <h2 className="card__title">{title}</h2>
                    {info &&
                        <div className="card__info-button">
                            <img src={InfoIcon} />
                        </div>
                    }
                </div>
                <div className="card__content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Card;
