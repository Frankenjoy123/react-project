import React, { Component } from 'react';
import './Toggle.css';

class Toggle extends Component {

    constructor(props){
        super(props);
        this.state= {
            isToggleOn : true
        };
        this.handClick = this.handClick.bind(this);
    }


    handClick(){
        this.setState( prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {

        return (
            <button onClick={this.handClick} className="btn_normal">
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }

}

export default Toggle;