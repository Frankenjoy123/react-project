
import React, { Component } from 'react';

export default class JqueryDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName : 'hello',
            lastUrl : ''
        };
        this.getResult = this.getResult.bind(this);
    }


    getResult(){

        this.get(this.props.source)
            .then(res => {
                let tmp = res;
                console.log(tmp);

                let lastGist = tmp[0];

                this.setState({
                    userName : lastGist.owner.login,
                    lastUrl: lastGist.html_url
                });
            } , err => {
                console.log(err);
            })
    }

    get(url){
        return new Promise(function (resolve, reject){
            fetch(url, {
                credentials: 'include',
                method: 'GET'
            }).then(res=>{
                if(res.status===200){
                    resolve(res.json());
                }else{
                    reject(res);
                }
            }).catch(e=>{
                reject(e);
            });
        });
    }

    componentDidMount(){
        this.getResult();
    }


    render() {

        return (
            <div>
                {this.state.userName}'s last gist is <a href={this.state.lastUrl}>here</a>
            </div>
        );
    }

}