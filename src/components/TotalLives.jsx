import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default class TotalLives extends Component {

    listHearts = () => {
        let hearts = []
        for (let i = 0; i < this.props.lives; i++) {
            hearts.push(<FontAwesomeIcon icon={faHeart} key={i} />)
        }
        return hearts
    }
    render() {

        return (
            <div className="scorecomponent">
                <h2 className="hearts">{this.listHearts()}</h2>
            </div>
        );
    }
}
