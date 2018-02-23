import React, { Component } from 'react';

import UserInfo from './UserInfo';
import './Comment.scss';



export default class Comment extends Component {

    constructor(props){
        super(props);
        this.author=props.author;
        this.text=props.text;
        this.date=props.date;
    }

    render() {

        const textStyle = {
            border: '3px solid #73AD21',
            width: '200px',
            padding: 10,
            float: 'left',
            fontSize: 20,
            color : 'blue',
            marginLeft:10,
            marginTop:5
        };

        const oneStyle={
            float:'left',
            marginLeft:20
        };

        // margin:auto; top: 0;left: 0;right: 0;bottom: 0;

         const commentStyle={
             border: '3px solid blue',
             padding: 10,
             width:'400px',
             height:'120px',
             margin: 'auto'
         };

        function formatDate(date) {
            return date.toLocaleDateString();
        }

        return (

            <div style={commentStyle}>

                <div style={oneStyle}>
                    <UserInfo author={this.props.author}/>
                </div>

                <div style={textStyle}>
                    {this.text}<br/>{formatDate(this.date)}
                </div>

            </div>
        );
    }
}