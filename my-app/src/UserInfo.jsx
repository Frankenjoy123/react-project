import React, { Component } from 'react';

import Avatar from './Avatar';
import './Comment.scss';



export default class UserInfo extends Component {

    constructor(props){
        super(props);
        this.author=props.author;
        this.text=props.text;
        this.date=props.date;
    }

    render() {

        const nameStyle = {
            fontSize : 20,
            color: '#FF0000'
        };

        const userInfoStyle = {
            border: '3px solid #73AD21',
            width: '100px',
            padding: 10
        }

        return (
            <div style={userInfoStyle}>
                <Avatar author={this.props.author}/>

                <div style={nameStyle}>
                    {this.props.author.name}
                </div>
            </div>
        );
    }
}