import React, { Component } from 'react';
import './Comment.scss';


export default class Comment extends Component {

    constructor(props){
        super(props);
        this.comment=props.comment;
    }

    render() {

        function formatDate(date) {
            return date.toLocaleDateString();
        }

        return (
            <div className="Comment">
                <div className="UserInfo">
                    <img className="Avatar"
                         src={this.props.comment.author.avatarUrl}
                         alt={this.props.comment.author.name}
                    />
                    <div className="UserInfo-name">
                        {this.props.comment.author.name}
                    </div>
                </div>
                <div className="Comment-text">
                 {this.props.comment.text}
                 </div>
                 <div className="Comment-date">
                     {formatDate(this.props.comment.date)}
                 </div>
            </div>
        );
    }
}