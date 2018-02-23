import React, { Component } from 'react';
// import './Comment.scss';


export default class Avatar extends Component {

    constructor(props){
        super(props);
        this.author=props.author;
    }

    render() {

        return (
            <img className="Avatar"
                 src={this.author.avatarUrl}
                 alt={this.author.name}
            />
        );
    }
}
