import React, { Component } from 'react';
import './FormInput.css';

export default class FormInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'hello world'
        };
        this.handChange=this.handChange.bind(this);
    }

    handChange(event){
        this.setState({
            value : event.target.value
        });
    }

    render() {

        let v = this.state.value;

        return (
            <div className="normal">
                <input type="text" value={v} className="put" onChange={this.handChange}/>
                <text className="txt">{v}</text>
            </div>
        );
    }

}