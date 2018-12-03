import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
import LifeCycle from './components/LefeCycle';
import NewList from './components/NewList';
import NewInfo from './components/NewInfo';
import Menus from './components/Menus';
import MenusInfo from './components/MenusInfo';


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
      //  <div className="App">
      //   {/* <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header> */}
      //   {/* <Home /> */}
      //   {/* <News /> */}
      //   {/* <Events /> */}
      //   {/* <ReactForm /> */}
      //   {/* <TodoList /> */}
      //   {/* <Soft />
      //   <br /><br />
      //   <hr />
      //   <br /><br /> */}
      //   {/* <School /> */}
      //   {/* <ApiRequest /> */}
      //   {/* {
      //     this.state.show?<LifeCycle name={this.state.name} />:''
      //   }
      //   <br /><br />
      //   <button onClick={this.setName}>我是父级按钮，用来更改名字</button>
      //   <br /><br />
      //   <button onClick={this.setShow}>我是父级按钮，用来切换组件是否加载</button> */}

      //   </div>
        <Router>
          <header className='title-link'>
                {/* <Link to="/">首页</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/menus">菜单</Link> */}
            <Route exact path="/" component={Home} />
            <Route path="/menus" component={Menus} />
            <Route path="/menusinfo/:id" component={MenusInfo} />
            {/* 配置路由 */}
            {/* <Route exact path="/" component={Home} />
            <Route path="/newlist" component={NewList} />
            <Route path="/newinfo" component={NewInfo} />
            <Route path="/newinfo/:nid" component={NewInfo} /> */}
          </header>
        </Router>

      
    );
  }
}

export default App;
