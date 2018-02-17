import React, { Component } from 'react';

class User extends Component {

    constructor(props){
        super(props);
        this.user=props.user;
    }

    render() {

        const ele = (<h2>开始干活，呵呵哒</h2>);

        function formatName(user) {
            return user.firstName + " " + user.lastName;
        }

        var s = {
            fontSize: 50,
            color: '#FF0000'
        };

        return (
            <div>
                <div>{ele}</div>
                <h1>
                    <span style={s}>joey</span> Hello 2018, {formatName(this.props.user)}!
                </h1>
            </div>
        );
    }
}

export default User;