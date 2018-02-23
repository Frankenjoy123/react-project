import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import  TImeTicker from './TImeTicker';
import Comment from './Comment';
import Toggle from "./Toggle/Toggle";
import FormInput from "./FormInput/FormInput";
import JqueryDemo from "./JqueryDemo/JqueryDemo";
import Loading from "./Loading/Loading";

class App extends Component {

  render() {

      const user = {
          firstName: 'Xiaowu',
          lastName: 'Hole'
      };

      const user2={
         firstName: 'Ming',
         lastName: 'Hua'
      };

      const comment = {
          date: new Date(),
          text: 'I hope you enjoy learning React!',
          author: {
              name: 'Hello Kitty',
              avatarUrl: 'http://placekitten.com/g/64/64',
          },
      };

      // const commentStyle = {
      //     margin:'auto'
      // };

      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <User user={user}/>

          <User user={user2}/>
          <TImeTicker/>

          <div>
              <Comment comment = {comment} author={comment.author} date={comment.date} text={comment.text}/>
          </div>

          <Toggle/>

          <FormInput/>

          <JqueryDemo source="/users/octocat/gists"/>

          <Loading source="/search/repositories?q=javascript&sort=stars"/>


      </div>
    );
  }
}

export default App;
