//import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

export default class TotalLives extends Component {

    listHearts = () => {
        let hearts =[]
        for (let i=0; i<this.props.lives; i++){
            hearts.push(<FontAwesomeIcon icon={faHeart} />)
        }
        return hearts
    }
    render() {
        var style = {
            display: "inline-block",
            padding: "1em",
            background: "#eee",
            margin: "0 0 0 1em"
        }
        return (
            <h2 style={style}>{this.listHearts()} </h2>
        );
    }
}
