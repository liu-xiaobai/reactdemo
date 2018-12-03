import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import Home from './components/Home'
import News from './components/News';
import Events from './components/Events';
import ReactForm from './components/ReactForm';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Soft from './components/Soft';
import School from './components/School';
import ApiRequest from './components/ApiRequest';
import LifeCycle from './components/LeftCycle';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '留小白',
      show:true
    }
  }

  setName=()=>{
    this.setState({
      name:'我被改变了'
    });
  }
  setShow=()=>{
    this.setState({
      show:!this.state.show
    });
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {/* <Home /> */}
        {/* <News /> */}
        {/* <Events /> */}
        {/* <ReactForm /> */}
        {/* <TodoList /> */}
        {/* <Soft />
        <br /><br />
        <hr />
        <br /><br /> */}
        {/* <School /> */}
        {/* <ApiRequest /> */}
        {
          this.state.show?<LifeCycle name={this.state.name} />:''
        }
        <br /><br />
        <button onClick={this.setName}>我是父级按钮，用来更改名字</button>
        <br /><br />
        <button onClick={this.setShow}>我是父级按钮，用来切换组件是否加载</button>
      </div>
    );
  }
}

export default App;
