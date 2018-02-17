import React, { Component } from 'react';

class TImeTicker extends Component {

    render() {

        const element = (
            <div>
                <h2>Hello, world! It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );

        return (
            <div>{element}</div>
        );
    }

}

export default TImeTicker;