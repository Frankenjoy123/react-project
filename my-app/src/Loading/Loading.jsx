
import React, { Component } from 'react';
import './Loading.css';

export default class Loading extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading : true,
            error : null,
            data : null
        }
    }

    componentDidMount(){
        this.get(this.props.source)
            .then(data => this.setState({
                loading:false,
                data: data
            }) , err => {
                this.setState({
                    loading : false,
                    error:err
                })
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


    render() {

        if (this.state.loading){
            return (
                <span>Loading ...</span>
            );
        }

        else if (this.state.error !=null){
            return <span>Error : {this.state.error.message}</span>
        }

        else {
            let repos = this.state.data.items;

            let repoList = repos.map( (repo) => {
                return (
                    <li>
                        <a href={repo.html_url}>repo.name</a> ({repo.stargazers_count}stars)<br/> {repo.description}
                    </li>
                );
            });

            return (
                <div className="n">
                    <h1>Most Popular JavaScript Projects in Github</h1>
                    <ol>{repoList}</ol>
                </div>
            );

        }


    }

}